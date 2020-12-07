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

/***/ "./components/login/loginPopup.js":
/*!****************************************!*\
  !*** ./components/login/loginPopup.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loginPopUp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_mainStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/mainStyles */ "./styles/mainStyles.js");

var _jsxFileName = "D:\\Programacion\\DesarrolloWeb\\web-cosmerelatam\\cosmere-latam\\components\\login\\loginPopup.js";


function loginPopUp(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    style: {
      display: props.showMe ? "flex" : "none"
    },
    className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_2__["popUp"].__hash}` + " " + "popUp",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_2__["popUp"].__hash}` + " " + "popUp-content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: props.toggle,
        className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_2__["popUp"].__hash}` + " " + "btn-exit",
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/images/logo.png",
        className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_2__["popUp"].__hash}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_2__["popUp"].__hash}`,
        children: "Inicio de sesion."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_2__["popUp"].__hash}`,
        children: "Seleccione el metodo para iniciar sesion."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {
        className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_2__["popUp"].__hash}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: props.google,
        className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_2__["popUp"].__hash}` + " " + "btn-black btn-login",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/images/icons/user.png",
          className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_2__["popUp"].__hash}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_2__["popUp"].__hash}`,
          children: "Iniciar seccion con Gmail."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: _styles_mainStyles__WEBPACK_IMPORTED_MODULE_2__["popUp"].__hash,
      children: _styles_mainStyles__WEBPACK_IMPORTED_MODULE_2__["popUp"]
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/login/userPopup.js":
/*!***************************************!*\
  !*** ./components/login/userPopup.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return logutPopUp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase/client */ "./firebase/client.js");
/* harmony import */ var _styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/mainStyles */ "./styles/mainStyles.js");

var _jsxFileName = "D:\\Programacion\\DesarrolloWeb\\web-cosmerelatam\\cosmere-latam\\components\\login\\userPopup.js";



function logutPopUp(props) {
  const handleLogOut = () => {
    Object(_firebase_client__WEBPACK_IMPORTED_MODULE_2__["logOut"])();
    props.toggle();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    style: {
      display: props.showMe ? "flex" : "none"
    },
    onClick: props.toggle,
    className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["popUpScroll"].__hash}` + " " + "popUp",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["popUpScroll"].__hash}` + " " + "popUp-content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["popUpScroll"].__hash}` + " " + "option",
        children: "Cuenta"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["popUpScroll"].__hash}`,
        children: " | "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["popUpScroll"].__hash}` + " " + "option",
        children: "Shadesmar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["popUpScroll"].__hash}`,
        children: " | "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        onClick: handleLogOut,
        className: `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["popUpScroll"].__hash}` + " " + "option",
        children: "Desconectar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: _styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["popUpScroll"].__hash,
      children: _styles_mainStyles__WEBPACK_IMPORTED_MODULE_3__["popUpScroll"]
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
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
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        httpEquiv: "content-type",
        content: "charset=UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Cosmere-latam"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Web del fandom de Brandon Sanderson en latinoamerica."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "Keywords",
        content: "cosmere; cosmere latam; latam; latinoamerica; fandom; brandon; sanderson; fanderson; mistbotn; nacidos de la bruma; stormlight archive; archivo de las tormentas; warbreker; el aliento de los dioces; juramentada"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "manifest",
        href: "/manifest.json"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "theme-color",
        content: "#317EFB"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        href: "/images/icon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), props.children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: _styles_globalStyles__WEBPACK_IMPORTED_MODULE_5__["globalStyles"].__hash,
      children: _styles_globalStyles__WEBPACK_IMPORTED_MODULE_5__["globalStyles"]
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase/client */ "./firebase/client.js");
/* harmony import */ var _styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../styles/mainStyles */ "./styles/mainStyles.js");
/* harmony import */ var _login_loginPopup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/loginPopup */ "./components/login/loginPopup.js");
/* harmony import */ var _login_userPopup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/userPopup */ "./components/login/userPopup.js");


var _jsxFileName = "D:\\Programacion\\DesarrolloWeb\\web-cosmerelatam\\cosmere-latam\\components\\navbar.js";




 //import './../styles/navbar.css';





const setSpotlight = url => {
  var spot = 'barLine set--';
  var newLoc = url.split("/");
  spot += newLoc[1];
  return spot;
};

function Navbar(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: showLogin,
    1: setShowLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const {
    0: login,
    1: setLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);

  const handleClickG = () => {
    Object(_firebase_client__WEBPACK_IMPORTED_MODULE_5__["loginWithGoogle"])().then(user => {
      console.log(user);
      setLogin(user);
      toggleLogin();
    }).catch(err => {
      console.log(err);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    Object(_firebase_client__WEBPACK_IMPORTED_MODULE_5__["onAuthStateChanged"])(setLogin);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [login === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_login_loginPopup__WEBPACK_IMPORTED_MODULE_7__["default"], {
      showMe: showLogin,
      toggle: toggleLogin,
      google: handleClickG
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_login_userPopup__WEBPACK_IMPORTED_MODULE_8__["default"], {
      showMe: showLogin,
      toggle: toggleLogin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}` + " " + "NavbarItems",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}` + " " + "nav_logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "checkbox",
        id: "menuBtn",
        className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}` + " " + "menuBtn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "menuBtn",
        className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}` + " " + "menuIcon",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}` + " " + "bars"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}` + " " + "nav_link",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}` + " " + "link",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}`,
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 38
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}` + " " + "link",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/news",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}`,
              children: "Noticias"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 38
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}` + " " + "link",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/artists",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}`,
              children: "Artistas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 38
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}` + " " + "link",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/potcast",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}`,
              children: "Podcasts"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 38
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}` + " " + "link",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/cosmere",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}`,
              children: "Cosmere"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 38
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          id: "lineNav",
          className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}` + " " + (setSpotlight(router.pathname) || "")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }, this), login === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: toggleLogin,
        className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}` + " " + "btn_login",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}`,
          children: "Iniciar seci\xF3n"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/images/icons/user.png",
          className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 18
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: toggleLogin,
        className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}` + " " + "btn_login logout",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}`,
          children: login.username
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: login.avatar,
          className: "jsx-572003826 " + `jsx-${_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash}` + " " + "logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: _styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"].__hash,
      children: _styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["navbarStyle"]
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "572003826",
      children: ".NavbarItems.jsx-572003826 ul.jsx-572003826 li.jsx-572003826:nth-child(1){width:100px;}.set--home.jsx-572003826,.NavbarItems.jsx-572003826 ul.jsx-572003826 li.jsx-572003826:nth-child(1):hover~.barLine.jsx-572003826{width:100px;-webkit-transform:translate(0);-ms-transform:translate(0);transform:translate(0);}.NavbarItems.jsx-572003826 ul.jsx-572003826 li.jsx-572003826:nth-child(2){width:100px;}.set--news.jsx-572003826,.NavbarItems.jsx-572003826 ul.jsx-572003826 li.jsx-572003826:nth-child(2):hover~.barLine.jsx-572003826{width:100px;-webkit-transform:translate(100px);-ms-transform:translate(100px);transform:translate(100px);}.NavbarItems.jsx-572003826 ul.jsx-572003826 li.jsx-572003826:nth-child(3){width:100px;}.set--artists.jsx-572003826,.NavbarItems.jsx-572003826 ul.jsx-572003826 li.jsx-572003826:nth-child(3):hover~.barLine.jsx-572003826{width:100px;-webkit-transform:translate(200px);-ms-transform:translate(200px);transform:translate(200px);}.NavbarItems.jsx-572003826 ul.jsx-572003826 li.jsx-572003826:nth-child(4){width:100px;}.set--potcast.jsx-572003826,.NavbarItems.jsx-572003826 ul.jsx-572003826 li.jsx-572003826:nth-child(4):hover~.barLine.jsx-572003826{width:100px;-webkit-transform:translate(300px);-ms-transform:translate(300px);transform:translate(300px);}.NavbarItems.jsx-572003826 ul.jsx-572003826 li.jsx-572003826:nth-child(5){width:100px;}.set--cosmeremecum.jsx-572003826,.NavbarItems.jsx-572003826 ul.jsx-572003826 li.jsx-572003826:nth-child(5):hover~.barLine.jsx-572003826{width:100px;-webkit-transform:translate(400px);-ms-transform:translate(400px);transform:translate(400px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXGNvbXBvbmVudHNcXG5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Rm9CLEFBSTZCLEFBR0EsQUFJQSxBQUdBLEFBSUEsQUFHQSxBQUlBLEFBR0EsQUFJQSxBQUdBLFlBOUJoQixBQUcyQixBQUkzQixBQUcrQixBQUkvQixBQUcrQixBQUkvQixBQUcrQixBQUkvQixBQUcrQixpRkEzQi9CLFlBT0EsQUFPQSxBQU9BLEFBT0EiLCJmaWxlIjoiRDpcXFByb2dyYW1hY2lvblxcRGVzYXJyb2xsb1dlYlxcd2ViLWNvc21lcmVsYXRhbVxcY29zbWVyZS1sYXRhbVxcY29tcG9uZW50c1xcbmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBsb2dpbldpdGhHb29nbGUsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gJy4uL2ZpcmViYXNlL2NsaWVudCdcclxuXHJcbi8vaW1wb3J0ICcuLy4uL3N0eWxlcy9uYXZiYXIuY3NzJztcclxuaW1wb3J0IHsgbmF2YmFyU3R5bGUgfSBmcm9tICcuLy4uL3N0eWxlcy9tYWluU3R5bGVzJztcclxuaW1wb3J0IExvZ2luUG9wVXAgZnJvbSAnLi9sb2dpbi9sb2dpblBvcHVwJztcclxuaW1wb3J0IFVzZXJQb3BVcCBmcm9tICcuL2xvZ2luL3VzZXJQb3B1cCc7XHJcblxyXG5jb25zdCBzZXRTcG90bGlnaHQgPSAodXJsKSA9PntcclxuICAgIHZhciBzcG90ID0gJ2JhckxpbmUgc2V0LS0nXHJcbiAgICB2YXIgbmV3TG9jID0gdXJsLnNwbGl0KFwiL1wiKVxyXG4gICAgc3BvdCArPSBuZXdMb2NbMV1cclxuICAgIHJldHVybihzcG90KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKHByb3BzKXtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgW3Nob3dMb2dpbiwgc2V0U2hvd0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHRvZ2dsZUxvZ2luID0gKCkgPT57XHJcbiAgICAgICAgc2V0U2hvd0xvZ2luKCFzaG93TG9naW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGlja0cgPSAoKSA9PntcclxuICAgICAgICBsb2dpbldpdGhHb29nbGUoKS50aGVuKHVzZXIgPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgICAgICBzZXRMb2dpbih1c2VyKTtcclxuICAgICAgICAgICAgdG9nZ2xlTG9naW4oKTtcclxuICAgICAgICB9KS5jYXRjaCggZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkKHNldExvZ2luKTtcclxuICAgIH0sIFtdICk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsb2dpbiA9PT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICA8TG9naW5Qb3BVcCBzaG93TWU9eyBzaG93TG9naW4gfSB0b2dnbGU9eyB0b2dnbGVMb2dpbiB9IGdvb2dsZT17IGhhbmRsZUNsaWNrRyB9Lz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPFVzZXJQb3BVcCBzaG93TWU9eyBzaG93TG9naW4gfSB0b2dnbGU9eyB0b2dnbGVMb2dpbiB9IC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiTmF2YmFySXRlbXNcIj5cclxuXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdl9sb2dvXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cIm1lbnVCdG5cIiBpZD1cIm1lbnVCdG5cIi8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZW51SWNvblwiIGh0bWxGb3I9XCJtZW51QnRuXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJzXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdl9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlua1wiPjxMaW5rIGhyZWY9XCIvXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rXCI+PExpbmsgaHJlZj1cIi9uZXdzXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPk5vdGljaWFzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlua1wiPjxMaW5rIGhyZWY9XCIvYXJ0aXN0c1wiID5cclxuICAgICAgICAgICAgICAgICAgICA8YT5BcnRpc3RhczwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmtcIj48TGluayBocmVmPVwiL3BvdGNhc3RcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+UG9kY2FzdHM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rXCI+PExpbmsgaHJlZj1cIi9jb3NtZXJlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkNvc21lcmU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3NldFNwb3RsaWdodChyb3V0ZXIucGF0aG5hbWUpfSBpZD1cImxpbmVOYXZcIj48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsb2dpbiA9PT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5fbG9naW5cIiBvbkNsaWNrPXt0b2dnbGVMb2dpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+SW5pY2lhciBzZWNpw7NuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29ucy91c2VyLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5fbG9naW4gbG9nb3V0XCIgb25DbGljaz17dG9nZ2xlTG9naW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntsb2dpbi51c2VybmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ2luLmF2YXRhcn0gY2xhc3NOYW1lPVwibG9nb3V0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57IG5hdmJhclN0eWxlIH08L3N0eWxlPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5OYXZiYXJJdGVtcyB1bCBsaTpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNldC0taG9tZSwgLk5hdmJhckl0ZW1zIHVsIGxpOm50aC1jaGlsZCgxKTpob3ZlciB+IC5iYXJMaW5le1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLk5hdmJhckl0ZW1zIHVsIGxpOm50aC1jaGlsZCgyKXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2V0LS1uZXdzLCAuTmF2YmFySXRlbXMgdWwgbGk6bnRoLWNoaWxkKDIpOmhvdmVyIH4gLmJhckxpbmV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDBweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLk5hdmJhckl0ZW1zIHVsIGxpOm50aC1jaGlsZCgzKXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2V0LS1hcnRpc3RzLCAuTmF2YmFySXRlbXMgdWwgbGk6bnRoLWNoaWxkKDMpOmhvdmVyIH4gLmJhckxpbmV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMDBweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLk5hdmJhckl0ZW1zIHVsIGxpOm50aC1jaGlsZCg0KXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2V0LS1wb3RjYXN0LCAuTmF2YmFySXRlbXMgdWwgbGk6bnRoLWNoaWxkKDQpOmhvdmVyIH4gLmJhckxpbmV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHRcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwMHB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuTmF2YmFySXRlbXMgdWwgbGk6bnRoLWNoaWxkKDUpe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZXQtLWNvc21lcmVtZWN1bSwgLk5hdmJhckl0ZW1zIHVsIGxpOm50aC1jaGlsZCg1KTpob3ZlciB+IC5iYXJMaW5le1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1x0XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MDBweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\components\\\\navbar.js */"
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
/*! exports provided: loginWithGoogle, onAuthStateChanged, logOut, fetchNewsList, fetchNew, addNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginWithGoogle", function() { return loginWithGoogle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAuthStateChanged", function() { return onAuthStateChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
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
!firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig) : firebase__WEBPACK_IMPORTED_MODULE_0___default.a.app();
const dbCon = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.firestore(); //Seccion de Login

const mapUserFormat = user => {
  const {
    photoURL,
    displayName,
    email
  } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email: email
  };
};

const loginWithGoogle = () => {
  const GoogleProvider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();
  return firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signInWithPopup(GoogleProvider);
};
const onAuthStateChanged = onChange => {
  return firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().onAuthStateChanged(user => {
    const normalizedUser = user ? mapUserFormat(user) : null;
    onChange(normalizedUser);
  });
};
const logOut = () => {
  return firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signOut();
}; //fetch de Noticias

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
const globalStyles = new String("html,body{background-color:#202020;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}a{color:inherit;-webkit-text-decoration:none;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}*{box-sizing:border-box;}section{position:relative;background-size:cover;background-position:right;background-position:left top;background-position:20% top;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;padding-top:70px;margin:0;}.btn-withe{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:rgba(230,230,230,.8);color:#000000;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);border:none;border-radius:5px;padding:10px;padding:10px 10px;-webkit-transition:all .2s ease-out;transition:all .2s ease-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;}.btn-withe:hover{background:rgba(255,255,255,.8);box-shadow:0 0 0 4px rgb(197,194,19);outline:none;}.btn-withe:active{outline:none;}.btn-withe:focus{outline:none;}.btn-black{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#393b40cc;color:#ffffff;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);border:none;border-radius:5px;padding:10px;margin:10px 10px;-webkit-transition:all .2s ease-out;transition:all .2s ease-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;}.btn-black:hover{background-color:#393b40;box-shadow:0 0 0 4px rgb(197,194,19);color:rgb(197,194,19);outline:none;}.bbtn-black:active{outline:none;}.btn-black:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcZ2xvYmFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9zQyxBQUk0QixBQVFYLEFBTVEsQUFJRixBQWVMLEFBZ0JzQixBQUt4QixBQUdELEFBS0csQUFnQlUsQUFNWixBQUdELGFBaENkLEFBR0EsQUEyQkEsQUFHQSxDQS9FdUIsSUFVRyxJQUoxQixHQWRZLEFBOEU2QixPQTdCRSxHQWhEaEMsS0FrQm1CLElBaEIwQyxrQkE0RTlDLEVBdEVQLEVBV2MsR0E4QmhCLEtBakJNLEFBNkJBLFFBWHZCLEVBNkJlLFdBM0RpQixFQTREaEMsMEJBM0RjLFVBQ0csVUFXTSxBQTZCQSxNQXJEdkIsNEJBTkEsOEJBb0J1Qiw2QkFXSSxBQTZCQSxnRUF2Q0EsbUNBV1ksQUE2QlIsMkJBQ2IsS0E3QkEsU0E4QlksS0E3QkEsa0JBWmhCLFVBQ08saUJBQ1IsU0FDYixDQXVDZ0IsS0E3QkEsT0E4Qk0sS0E3QkEsYUE4QkwsS0E3QkEsUUE4QkksS0E3QkMsWUE4QlUsTUE3QkEsMERBOEJYLE1BN0JBLCtFQThCSixNQTdCQSxPQThCakIsTUE3QkEiLCJmaWxlIjoiRDpcXFByb2dyYW1hY2lvblxcRGVzYXJyb2xsb1dlYlxcd2ViLWNvc21lcmVsYXRhbVxcY29zbWVyZS1sYXRhbVxcc3R5bGVzXFxnbG9iYWxTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuY29uc3QgY29sb3IgPSB7XHJcbiAgICBwcmltYXJ5OiAnIzM5M2I0MCcsXHJcbiAgICBzZWNvbmRhcnk6ICcjOTM5MzEzJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzcy5nbG9iYWxgXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxyXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwJSB0b3A7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ0bi13aXRoZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAuOCk7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJ0bi13aXRoZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uYnRuLXdpdGhlOmFjdGl2ZXtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idG4td2l0aGU6Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi5idG4tYmxhY2t7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDBjYztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idG4tYmxhY2s6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxuICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJidG4tYmxhY2s6YWN0aXZle1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJ0bi1ibGFjazpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5gXHJcbmV4cG9ydCBjb25zdCBlcnJvclN0eWxlcyA9IGNzc2BcclxuLm5vbntcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogdXJsKC9pbWFnZXMvQ29uc3RlbGFjaW9uZXMtbXVuZG9zLWNvc21lcmUuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4ubm9uIGRpdntcclxuICBjb2xvcjogcmdiKDEyOCwgMTE0LCA3OSk7XHJcbiAgdGV4dC1zaGFkb3c6MHB4IDBweCAzcHggIzAwMDAwMDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ub24gaDJ7XHJcbiAgZm9udC1zaXplOiA1NnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwdmg7XHJcbn1cclxuLm5vbiBwe1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgaWNvbnMgPSBjc3NgXHJcblxyXG5gIl19 */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\globalStyles.js */");
globalStyles.__hash = "870994691";
const errorStyles = new String(".non.jsx-4010740212{min-width:100%;min-height:100vh;background:url(/images/Constelaciones-mundos-cosmere.jpg);background-size:cover;background-position:center;}.non.jsx-4010740212 div.jsx-4010740212{color:rgb(128,114,79);text-shadow:0px 0px 3px #000000;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;}.non.jsx-4010740212 h2.jsx-4010740212{font-size:56px;margin-bottom:50vh;}.non.jsx-4010740212 p.jsx-4010740212{font-size:24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcZ2xvYmFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFHOEIsQUFHa0IsQUFPUyxBQU1ULEFBSUEsZUFoQkUsQUFhRSxBQUlyQixPQVZpQyxVQU4yQixFQWE1RCxvQkFOb0Isb0NBTkksc0JBQ0ssYUFNVCxjQUxwQixJQU1BIiwiZmlsZSI6IkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcZ2xvYmFsU3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcbmNvbnN0IGNvbG9yID0ge1xyXG4gICAgcHJpbWFyeTogJyMzOTNiNDAnLFxyXG4gICAgc2Vjb25kYXJ5OiAnIzkzOTMxMycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZXMgPSBjc3MuZ2xvYmFsYFxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcclxuICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMCUgdG9wO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5idG4td2l0aGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgLjgpO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idG4td2l0aGU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJ0bi13aXRoZTphY3RpdmV7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uYnRuLXdpdGhlOmZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uYnRuLWJsYWNre1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwY2M7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uYnRuLWJsYWNrOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5iYnRuLWJsYWNrOmFjdGl2ZXtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idG4tYmxhY2s6Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuYFxyXG5leHBvcnQgY29uc3QgZXJyb3JTdHlsZXMgPSBjc3NgXHJcbi5ub257XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHVybCgvaW1hZ2VzL0NvbnN0ZWxhY2lvbmVzLW11bmRvcy1jb3NtZXJlLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLm5vbiBkaXZ7XHJcbiAgY29sb3I6IHJnYigxMjgsIDExNCwgNzkpO1xyXG4gIHRleHQtc2hhZG93OjBweCAwcHggM3B4ICMwMDAwMDA7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubm9uIGgye1xyXG4gIGZvbnQtc2l6ZTogNTZweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHZoO1xyXG59XHJcbi5ub24gcHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGljb25zID0gY3NzYFxyXG5cclxuYCJdfQ== */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\globalStyles.js */");
errorStyles.__hash = "4010740212";
const icons = new String("\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcZ2xvYmFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRId0IiLCJmaWxlIjoiRDpcXFByb2dyYW1hY2lvblxcRGVzYXJyb2xsb1dlYlxcd2ViLWNvc21lcmVsYXRhbVxcY29zbWVyZS1sYXRhbVxcc3R5bGVzXFxnbG9iYWxTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuY29uc3QgY29sb3IgPSB7XHJcbiAgICBwcmltYXJ5OiAnIzM5M2I0MCcsXHJcbiAgICBzZWNvbmRhcnk6ICcjOTM5MzEzJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzcy5nbG9iYWxgXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxyXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwJSB0b3A7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ0bi13aXRoZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAuOCk7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJ0bi13aXRoZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uYnRuLXdpdGhlOmFjdGl2ZXtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idG4td2l0aGU6Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi5idG4tYmxhY2t7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDBjYztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idG4tYmxhY2s6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxuICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJidG4tYmxhY2s6YWN0aXZle1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJ0bi1ibGFjazpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5gXHJcbmV4cG9ydCBjb25zdCBlcnJvclN0eWxlcyA9IGNzc2BcclxuLm5vbntcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogdXJsKC9pbWFnZXMvQ29uc3RlbGFjaW9uZXMtbXVuZG9zLWNvc21lcmUuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4ubm9uIGRpdntcclxuICBjb2xvcjogcmdiKDEyOCwgMTE0LCA3OSk7XHJcbiAgdGV4dC1zaGFkb3c6MHB4IDBweCAzcHggIzAwMDAwMDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ub24gaDJ7XHJcbiAgZm9udC1zaXplOiA1NnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwdmg7XHJcbn1cclxuLm5vbiBwe1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgaWNvbnMgPSBjc3NgXHJcblxyXG5gIl19 */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\globalStyles.js */");
icons.__hash = "2008225623";

/***/ }),

/***/ "./styles/mainStyles.js":
/*!******************************!*\
  !*** ./styles/mainStyles.js ***!
  \******************************/
/*! exports provided: navbarStyle, footerStyle, popUp, popUpScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navbarStyle", function() { return navbarStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerStyle", function() { return footerStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popUp", function() { return popUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popUpScroll", function() { return popUpScroll; });
const navbarStyle = new String(".NavbarItems.jsx-2139904398{background:linear-gradient(0deg,rgb(0,0,0,1.0) 0% ,rgba(0,0,0,0.5) 80%,rgba(0,0,0,0.5) 100%);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);padding:0px;margin:0px;position:fixed;top:0;left:0;width:100vw;z-index:10;box-shadow:0px 0px 10px #000000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:space-between;-ms-flex-line-pack:space-between;align-content:space-between;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.nav_logo.jsx-2139904398{display:block;width:70px;height:50px;background:url('/images/LogoCL.png');background-repeat:no-repeat;background-size:cover;padding:0;margin:5px;margin-left:20px;margin-right:50px;}.nav_link.jsx-2139904398{position:fixed;top:0;right:0;width:0%;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0px;padding:0px;clear:both;border-top:55px solid #111111;background:#333333;z-index:5;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;}.nav_link.jsx-2139904398 .link.jsx-2139904398{position:relative;display:inline-block;z-index:5;color:#ffffff;-webkit-text-decoration:none;text-decoration:none;margin:0;padding:0px;font-size:18px;border-left:5px solid transparent;-webkit-transition:all .8s ease-in;transition:all .8s ease-in;}.nav_link.jsx-2139904398 .link.jsx-2139904398:hover{color:rgb(197,194,19);-webkit-text-decoration:none;text-decoration:none;text-shadow:0px 0px 10px #000000;-webkit-transition:all .2s ease-in;transition:all .2s ease-in;list-style:none;border-left:5px solid #0088a9;}.link.jsx-2139904398 a.jsx-2139904398{min-width:300px;padding:20px 20px;display:inline-block;}.btn-lg.jsx-2139904398{border:1px solid #0088a9;border-radius:5px;background:none;color:#0088a9;outline:none;cursor:pointer;margin:0;padding:10px 20px;margin-left:auto;}.btn-lg.jsx-2139904398:hover{border:1px solid #0088a9;border-radius:5px;background:#0088a9;color:#ffffff;outline:none;}.btn-lg.jsx-2139904398:active{border:1px solid #0088a9;border-radius:5px;background:none;color:#ffffff;outline:none;}.btn-lg.jsx-2139904398:focus{outline:none;}.NavbarItems.jsx-2139904398 .menuBtn.jsx-2139904398{display:none;}.NavbarItems.jsx-2139904398 .menuIcon.jsx-2139904398{border:1px solid #0088a9;border-radius:5px;padding:20px 12px;cursor:pointer;z-index:10;margin-left:auto;margin-right:5px;}.NavbarItems.jsx-2139904398 .menuIcon.jsx-2139904398:hover{background-color:#0088a9;}.menuIcon.jsx-2139904398 .bars.jsx-2139904398{background:#999999;display:block;height:2px;width:18px;position:relative;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;}.menuIcon.jsx-2139904398 .bars.jsx-2139904398::before,.menuIcon.jsx-2139904398 .bars.jsx-2139904398::after{background:#999999;content:\"\";height:100%;width:100%;position:absolute;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;}.menuIcon.jsx-2139904398 .bars.jsx-2139904398::before{top:5px;}.menuIcon.jsx-2139904398 .bars.jsx-2139904398::after{top:-5px;}.menuBtn.jsx-2139904398:checked~.nav_link.jsx-2139904398{width:300px;}.menuBtn.jsx-2139904398:checked~.menuIcon.jsx-2139904398 .bars.jsx-2139904398{background:none;}.menuBtn.jsx-2139904398:checked~.menuIcon.jsx-2139904398 .bars.jsx-2139904398::before{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);top:0;}.menuBtn.jsx-2139904398:checked~.menuIcon.jsx-2139904398 .bars.jsx-2139904398::after{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);top:0;}.NavbarItems.jsx-2139904398 .barLine.jsx-2139904398{min-width:100px;height:0px;border-top:5px solid rgb(197,194,19);box-shadow:0px 0px 10px rgb(197,194,19);position:absolute;top:0;left:0;z-index:1;-webkit-transition-duration:.8s;transition-duration:.8s;display:none;}.btn_login.jsx-2139904398{position:absolute;z-index:999;top:0;right:-200px;height:100%;white-space:nowrap;font-size:18px;background:none;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:none;outline:none;color:#ffffff;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;opacity:0.6;}.btn_login.jsx-2139904398:hover{opacity:1.0;}.btn_login.jsx-2139904398 img.jsx-2139904398{margin-left:18px;width:27px;height:27px;}.logout.jsx-2139904398 img.jsx-2139904398{width:35px;height:35px;padding:0;margin:0 10px;border:solid 3px rgba(100,100,100,1);border-radius:999px;}.menuBtn.jsx-2139904398:checked~.btn_login.jsx-2139904398{right:70px;}@media all and (min-width:768px){.nav_link.jsx-2139904398{position:relative;clear:none;width:auto;height:auto;background:none;padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;border:none;}.NavbarItems.jsx-2139904398 .menuIcon.jsx-2139904398{display:none;}.nav_link.jsx-2139904398 .link.jsx-2139904398{width:100px;border:none;}.nav_link.jsx-2139904398 .link.jsx-2139904398:hover{border:none;}.link.jsx-2139904398 a.jsx-2139904398{min-width:100px;width:100px;text-align:center;padding:20px 0px;}.NavbarItems.jsx-2139904398 .barLine.jsx-2139904398{display:inline-block;box-shadow:none;width:100px;}.btn_login.jsx-2139904398{position:absolute;top:0;right:30px;font-size:18px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcbWFpblN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFOEIsQUFHMkcsQUFpQjNGLEFBYUMsQUFpQkcsQUFhTSxBQVNSLEFBTVMsQUFXQSxBQU9BLEFBT1osQUFJQSxBQUlZLEFBVUEsQUFJTixBQVVBLEFBUVgsQUFHQyxBQUlHLEFBR0ksQUFHUyxBQUlELEFBS1IsQUFhRSxBQWtCTixBQUdLLEFBTU4sQUFTQSxBQUtRLEFBY0wsQUFHRCxBQUlBLEFBR0ksQUFNVyxBQUtULFFBOUdwQixDQUdBLEVBMkRhLEFBU2IsQ0FoRUEsQUE4Q0EsQUF3Q29CLEFBSW5CLENBeklELEFBSUEsQUE4SEMsQ0FyTlcsQ0FhTCxDQXVDWSxBQWlGbkIsQUFZWSxBQThFRSxDQTVDQyxDQXJKTyxBQWdJVCxBQXlDQSxBQW1DTCxDQWpJTyxBQVVILEVBckdILEFBdU5lLENBMUxGLENBK0lYLENBK0JWLEFBa0JZLENBMU9BLEFBeURNLEFBV0EsQUFPQSxBQWVBLEFBVW5CLEVBNkN3QyxDQWtDeEIsQUE0Q0ksQ0FqTlYsQUF5TEcsQ0FwRkEsQUEyQ04sR0FyREssQUFpRkcsQ0F0SU8sQ0F1TEwsQ0E1RUgsQ0E5SjJCLEFBb09yQixDQXROTixDQWVILENBc0pYLEFBb0JjLEVBcEZGLENBMURLLEFBV0csQUFPSCxBQWVFLENBZVAsRUFzSE8sQ0FyQ3NCLEVBNUoxQixBQWlJQyxBQXNFZixDQU1BLENBNU5hLENBeUxJLENBcEZDLEVBaEVuQixBQXNEbUIsSUFoREosQUFrQkEsRUFlQyxBQXFFTyxDQTNGUixDQXRDTyxBQWlNckIsQ0EvRTBDLElBd0QvQixHQXBGaUIsQ0EzRUksQ0FpQm5CLEFBa0JBLEFBOEJlLENBMUdHLEVBcUVsQixBQXNCRixFQThHRCxFQXpDSyxJQXZCVCxBQWlEYyxFQS9ITCxBQWtCaEIsQ0Fla0IsQUF5Q1gsQUFxRVEsRUFwSWYsQ0FvRUEsR0E5SjJCLEFBMEozQixFQTJCaUIsTUFyR1AsQ0EzRGEsRUE0RkwsQUFvREMsQUEwQ25CLENBako0QixLQW1CVCxDQXFHTyxFQW5JaEIsUUErRFYsQ0E5RGEsQUFrSE4sRUFoSkksQ0FhWSxHQStDTCxBQXFGVixNQWhKSSxBQThCSSxDQW9GaEIsQUErQlcsRUF4Q1gsUUF4R2tCLEFBMkRsQixBQXNGeUIsSUFuSFUsSUFyRHRCLFFBOE5RLENBdE1GLEdBdkJSLEVBNkRNLFNBNURELElBdUJoQixHQTZCNEIsQUFTRyxRQTVEeEIsTUFDQyxJQXFLTSxFQXRJRixDQTlCQyxJQWlMQyxLQXRIZCxDQTVCYSxBQXNJYixFQXBLWSxVQStCQSxDQTlCcUIsR0F3TlYsT0F6TFEsUUFpQi9CLGNBL0NjLFFBK0JNLGVBZ0pBLElBL0lULFVBQ2tCLFVBdUxmLFlBQ2IsZUF4Tm1CLDJCQWlDcEIsZUE4SWEsWUFDQSxhQUNFLGNBQ2MsWUFqTEEsb0RBa0xoQixZQUNiLGlDQWxMa0IscUZBQ2xCIiwiZmlsZSI6IkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcbWFpblN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXHJcblxyXG5leHBvcnQgY29uc3QgbmF2YmFyU3R5bGUgPSBjc3NgXHJcbi5OYXZiYXJJdGVtcyB7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYigwLCAwLCAwLCAxLjApIDAlICwgcmdiYSgwLCAwLCAwLCAwLjUpIDgwJSwgcmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpO1xyXG5cdGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRtYXJnaW46MHB4O1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogMTAwdnc7XHJcblx0ei1pbmRleDogMTA7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZfbG9nb3tcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogNzBweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWFnZXMvTG9nb0NMLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiA1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubmF2X2xpbmt7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogMDtcclxuXHR3aWR0aDogMCU7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdGNsZWFyOiBib3RoO1xyXG5cdGJvcmRlci10b3A6IDU1cHggc29saWQgIzExMTExMTtcclxuXHRiYWNrZ3JvdW5kOiAjMzMzMzMzO1x0XHJcblx0ei1pbmRleDogNTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4ubmF2X2xpbmsgLmxpbmt7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR6LWluZGV4OiA1O1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdHRyYW5zaXRpb246IGFsbCAuOHMgZWFzZS1pbjtcclxufVxyXG5cclxuLm5hdl9saW5rIC5saW5rOmhvdmVye1xyXG5cdGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0dGV4dC1zaGFkb3c6MHB4IDBweCAxMHB4ICMwMDAwMDA7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluO1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA4OGE5O1xyXG59XHJcblxyXG4ubGluayBhe1xyXG5cdG1pbi13aWR0aDogMzAwcHg7XHJcblx0cGFkZGluZzogMjBweCAyMHB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmJ0bi1sZ3tcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDA4OGE5O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdGNvbG9yOiAjMDA4OGE5O1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuLmJ0bi1sZzpob3ZlcntcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDA4OGE5O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRiYWNrZ3JvdW5kOiAjMDA4OGE5O1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJ0bi1sZzphY3RpdmV7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwODhhOTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idG4tbGc6Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLk5hdmJhckl0ZW1zIC5tZW51QnRue1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5OYXZiYXJJdGVtcyAubWVudUljb257XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwODhhOTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0cGFkZGluZzogMjBweCAxMnB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR6LWluZGV4OiAxMDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLk5hdmJhckl0ZW1zIC5tZW51SWNvbjpob3ZlcntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OGE5O1xyXG59XHJcblxyXG4ubWVudUljb24gLmJhcnN7XHJcblx0YmFja2dyb3VuZDogIzk5OTk5OTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRoZWlnaHQ6IDJweDtcclxuXHR3aWR0aDogMThweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxuXHJcbn1cclxuLm1lbnVJY29uIC5iYXJzOjpiZWZvcmUsXHJcbi5tZW51SWNvbiAuYmFyczo6YWZ0ZXJ7XHJcblx0YmFja2dyb3VuZDogIzk5OTk5OTtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxufVxyXG4ubWVudUljb24gLmJhcnM6OmJlZm9yZXtcclxuXHR0b3A6IDVweDtcclxufVxyXG4ubWVudUljb24gLmJhcnM6OmFmdGVye1xyXG5cdHRvcDogLTVweDtcclxufVxyXG5cclxuLm1lbnVCdG46Y2hlY2tlZCB+IC5uYXZfbGlua3tcclxuXHR3aWR0aDogMzAwcHg7XHJcbn1cclxuLm1lbnVCdG46Y2hlY2tlZCB+IC5tZW51SWNvbiAuYmFyc3tcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5tZW51QnRuOmNoZWNrZWQgfiAubWVudUljb24gLmJhcnM6OmJlZm9yZXtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG5cdHRvcDogMDtcclxufVxyXG4ubWVudUJ0bjpjaGVja2VkIH4gLm1lbnVJY29uIC5iYXJzOjphZnRlcntcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0dG9wOiAwO1xyXG59XHJcblxyXG4uTmF2YmFySXRlbXMgLmJhckxpbmV7XHJcblx0bWluLXdpZHRoOiAxMDBweDtcclxuXHRoZWlnaHQ6IDBweDtcclxuXHRib3JkZXItdG9wOiA1cHggc29saWQgcmdiKDE5NywgMTk0LCAxOSk7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR6LWluZGV4OiAxO1xyXG5cdHRyYW5zaXRpb24tZHVyYXRpb246IC44cztcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYnRuX2xvZ2lue1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiA5OTk7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAtMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRvdXRsaW5lOm5vbmU7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0dHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxuXHRvcGFjaXR5OiAwLjY7XHJcbn1cclxuLmJ0bl9sb2dpbjpob3ZlcntcclxuXHRvcGFjaXR5OiAxLjA7XHJcbn1cclxuLmJ0bl9sb2dpbiBpbWd7XHJcblx0bWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgICB3aWR0aDogMjdweDtcclxuICAgIGhlaWdodDogMjdweDtcclxufVxyXG5cclxuLmxvZ291dCBpbWd7XHJcblx0d2lkdGg6IDM1cHg7XHJcblx0aGVpZ2h0OiAzNXB4O1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiAwIDEwcHg7XHJcblx0Ym9yZGVyOiBzb2xpZCAzcHggcmdiYSgxMDAsIDEwMCwgMTAwLCAxKTtcclxuXHRib3JkZXItcmFkaXVzOiA5OTlweDtcclxufVxyXG5cclxuLm1lbnVCdG46Y2hlY2tlZCB+IC5idG5fbG9naW57XHJcblx0cmlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuXHQubmF2X2xpbmsge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHR3aWR0aDogYXV0bztcclxuXHRcdGhlaWdodDogYXV0bztcclxuXHRcdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG5cdFxyXG5cdC5OYXZiYXJJdGVtcyAubWVudUljb257XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQubmF2X2xpbmsgLmxpbmt7XHJcblx0XHR3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cdH1cclxuXHQubmF2X2xpbmsgLmxpbms6aG92ZXJ7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG5cdC5saW5rIGF7XHJcblx0XHRtaW4td2lkdGg6IDEwMHB4O1xyXG5cdFx0d2lkdGg6IDEwMHB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMjBweCAwcHg7XHJcblx0fVxyXG5cdC5OYXZiYXJJdGVtcyAuYmFyTGluZXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcblx0fVxyXG5cdC5idG5fbG9naW57XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRyaWdodDogMzBweDtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHR9XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGZvb3RlclN0eWxlID0gY3NzYFxyXG5cclxuLkZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xyXG59XHJcblxyXG4uRm9vdGVyIGRpdntcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAuRm9vdGVyIGRpdntcclxuICAgICAgICB3aWR0aDogNjQwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEyODFweCl7XHJcbiAgICAuRm9vdGVyIGRpdntcclxuICAgICAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLmxpbmVfMXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODY4Njg2O1xyXG59XHJcblxyXG4uY29weXJpZ2h0e1xyXG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnNvY2lhbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0cGFkZGluZzogMCU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWwgbGl7XHJcblxyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxufVxyXG5cclxuLnNvY2lhbCBhIHtcclxuICAgIGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcbiAgICBjb2xvcjogI2VmZWZlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNvY2lhbCBsaSBhIGRpdntcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG59XHJcblxyXG4uZmJfaWNvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9pY29ucy9mYWNlYm9vay5wbmcnKTtcclxufVxyXG4udHdfaWNvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9pY29ucy90d2l0dGVyLnBuZycpO1xyXG59XHJcbi5pZ19pY29ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL2ljb25zL2luc3RhZ3JhbS5wbmcnKTtcclxufVxyXG4uZGNfaWNvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9pY29ucy9kaXNjb3JkaWEucG5nJyk7XHJcbn1cclxuLnl0X2ljb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvaWNvbnMveW91dHViZS5wbmcnKTtcclxufVxyXG5cclxuXHJcbi5zb2NpYWwgYS50dzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBhY2VlO1xyXG59IFxyXG4uc29jaWFsIGEuZmI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxufVxyXG4uc29jaWFsIGEueXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2RkNGIzOTtcclxufVxyXG4uc29jaWFsIGEuZGM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxufVxyXG4uc29jaWFsIGEuaWc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2JiOGQwZTtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgcG9wVXAgPSBjc3NgXHJcbi5wb3BVcHtcclxuXHR3aWR0aDogMTAwdnc7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcblx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR6LWluZGV4OiA5OTtcclxuXHRvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6aGlkZGVuO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnBvcFVwLWNvbnRlbnR7XHJcblx0d2lkdGg6IDUwMHB4O1xyXG5cdGhlaWdodDogNjAwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDA7XHJcblx0Ym9yZGVyLXRvcDogc29saWQgM3B4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG5cdHBhZGRpbmc6IDVweCA1cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucG9wVXAtY29udGVudCBpbWd7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG5cdGhlaWdodDogMTAwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogOTk5cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuXHRtYXJnaW46IDIwcHggYXV0bztcclxuXHRwYWRkaW5nOiAwO1xyXG59XHJcbi5wb3BVcC1jb250ZW50IGgxe1xyXG5cdG1hcmdpbjogMDtcclxuXHRtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG4ucG9wVXAtY29udGVudCBoNXtcclxuXHRtYXJnaW46IDA7XHJcblx0bWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuLmJ0bi1leGl0e1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDBweDtcclxuXHRyaWdodDogMTBweDtcclxuXHRmb250LXNpemU6IDQycHg7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdG1hcmdpbjogMHB4OyBcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5idG4tbG9naW57XHJcblx0d2lkdGg6IDI1MHB4O1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRtYXJnaW46IDAgYXV0bzsgXHJcbn1cclxuLmJ0bi1sb2dpbiBpbWd7XHJcblx0d2lkdGg6IDIwcHg7XHJcblx0aGVpZ2h0OiAyMHB4O1xyXG5cdG1hcmdpbjogMDsgXHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBwb3BVcFNjcm9sbCA9IGNzc2BcclxuXHJcbi5wb3BVcHtcclxuXHR3aWR0aDogMTAwdnc7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cdHotaW5kZXg6IDI7XHJcblx0b3ZlcmZsb3cteDpoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OmhpZGRlbjtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5wb3BVcC1jb250ZW50e1xyXG5cdHdpZHRoOiAzMDBweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDA7XHJcblx0Ym9yZGVyLXRvcDogc29saWQgM3B4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG5cdHBhZGRpbmc6IDVweCA1cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA2NXB4O1xyXG5cdHJpZ2h0OiAzMHB4O1xyXG5cdHBhZGRpbmc6IGF1dG87XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5vcHRpb257XHJcblxyXG59XHJcbmAiXX0= */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\mainStyles.js */");
navbarStyle.__hash = "2139904398";
const footerStyle = new String(".Footer.jsx-2479200670{background-color:#202020;position:relative;min-width:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:50px 0px;}.Footer.jsx-2479200670 div.jsx-2479200670{width:320px;margin:auto;}@media all and (min-width:768px){.Footer.jsx-2479200670 div.jsx-2479200670{width:640px;margin:auto;}}@media all and (min-width:1281px){.Footer.jsx-2479200670 div.jsx-2479200670{width:1200px;margin:auto;}}.line_1.jsx-2479200670{margin-top:10px;border:1px solid #868686;}.copyright.jsx-2479200670{margin:20px 10px;color:#ffffff;}.social.jsx-2479200670{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0%;top:0;left:0;right:0;list-style:none;padding:0px;}.social.jsx-2479200670 li.jsx-2479200670{margin:5px 10px;}.social.jsx-2479200670 a.jsx-2479200670{background:#999999;color:#efefef;border-radius:20px;-webkit-text-decoration:none;text-decoration:none;line-height:30px;width:40px;height:40px;font-size:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.social.jsx-2479200670 li.jsx-2479200670 a.jsx-2479200670 div.jsx-2479200670{margin:10px;background-size:cover;background-position:center;background-repeat:no-repeat;margin:auto;width:60%;height:60%;}.fb_icon.jsx-2479200670{background-image:url('/images/icons/facebook.png');}.tw_icon.jsx-2479200670{background-image:url('/images/icons/twitter.png');}.ig_icon.jsx-2479200670{background-image:url('/images/icons/instagram.png');}.dc_icon.jsx-2479200670{background-image:url('/images/icons/discordia.png');}.yt_icon.jsx-2479200670{background-image:url('/images/icons/youtube.png');}.social.jsx-2479200670 a.tw.jsx-2479200670:hover{background:#00acee;}.social.jsx-2479200670 a.fb.jsx-2479200670:hover{background:#3b5998;}.social.jsx-2479200670 a.yt.jsx-2479200670:hover{background:#dd4b39;}.social.jsx-2479200670 a.dc.jsx-2479200670:hover{background:#3b5998;}.social.jsx-2479200670 a.ig.jsx-2479200670:hover{background:#bb8d0e;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcbWFpblN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1UThCLEFBSThCLEFBWWIsQUFLSSxBQU1DLEFBTUQsQUFLQyxBQUtKLEFBV0csQUFJRyxBQVlQLEFBVXVDLEFBR0QsQUFHRSxBQUdBLEFBR0YsQUFLL0IsQUFHQSxBQUdBLEFBR0EsQUFHQSxZQTVGUCxBQUtJLEFBaURNLENBM0NOLEdBTVMsQUFxQjdCLENBaEJrQixFQW9CQSxBQXVDbEIsQUFHQSxBQUdBLEFBR0EsQUFHQSxLQTVGQSxBQUtJLENBbEJrQixBQXdCbEIsTUFXSixFQW9CdUIsQ0FZUSxPQXJDL0IsRUE3Qm1CLE9BOEVuQixBQVNBLENBWkEsQ0FwQnlCLEFBMEJ6QixBQUdBLE1BbkZjLEdBa0VrQixPQWpFZixNQW9DTCxXQUNMLElBNkJTLEVBNUJSLE9BQ0ksR0E0QkUsQ0FiTyxJQWRELEtBNEJMLFFBYkEsR0FkQyxBQTRCaEIsUUFiZ0IsSUFkaEIsUUF6Q3VCLEFBd0RKLGVBQ0YsMEVBQ2pCLElBekQyQixtR0FDZCxTQUNRLGlCQUNyQiIsImZpbGUiOiJEOlxcUHJvZ3JhbWFjaW9uXFxEZXNhcnJvbGxvV2ViXFx3ZWItY29zbWVyZWxhdGFtXFxjb3NtZXJlLWxhdGFtXFxzdHlsZXNcXG1haW5TdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmJhclN0eWxlID0gY3NzYFxyXG4uTmF2YmFySXRlbXMge1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2IoMCwgMCwgMCwgMS4wKSAwJSAsIHJnYmEoMCwgMCwgMCwgMC41KSA4MCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTtcclxuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHRwYWRkaW5nOiAwcHg7XHJcblx0bWFyZ2luOjBweDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ubmF2X2xvZ297XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDcwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvaW1hZ2VzL0xvZ29DTC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogNXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5cclxuLm5hdl9saW5re1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0d2lkdGg6IDAlO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRjbGVhcjogYm90aDtcclxuXHRib3JkZXItdG9wOiA1NXB4IHNvbGlkICMxMTExMTE7XHJcblx0YmFja2dyb3VuZDogIzMzMzMzMztcdFxyXG5cdHotaW5kZXg6IDU7XHJcblx0dHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxufVxyXG5cclxuLm5hdl9saW5rIC5saW5re1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0ei1pbmRleDogNTtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjhzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5uYXZfbGluayAubGluazpob3ZlcntcclxuXHRjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHRleHQtc2hhZG93OjBweCAwcHggMTBweCAjMDAwMDAwO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzAwODhhOTtcclxufVxyXG5cclxuLmxpbmsgYXtcclxuXHRtaW4td2lkdGg6IDMwMHB4O1xyXG5cdHBhZGRpbmc6IDIwcHggMjBweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5idG4tbGd7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwODhhOTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRjb2xvcjogIzAwODhhOTtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMTBweCAyMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5idG4tbGc6aG92ZXJ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwODhhOTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZDogIzAwODhhOTtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idG4tbGc6YWN0aXZle1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDg4YTk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4uYnRuLWxnOmZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5OYXZiYXJJdGVtcyAubWVudUJ0bntcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uTmF2YmFySXRlbXMgLm1lbnVJY29ue1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDg4YTk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdHBhZGRpbmc6IDIwcHggMTJweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ei1pbmRleDogMTA7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5OYXZiYXJJdGVtcyAubWVudUljb246aG92ZXJ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwODhhOTtcclxufVxyXG5cclxuLm1lbnVJY29uIC5iYXJze1xyXG5cdGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0aGVpZ2h0OiAycHg7XHJcblx0d2lkdGg6IDE4cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcblxyXG59XHJcbi5tZW51SWNvbiAuYmFyczo6YmVmb3JlLFxyXG4ubWVudUljb24gLmJhcnM6OmFmdGVye1xyXG5cdGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcbn1cclxuLm1lbnVJY29uIC5iYXJzOjpiZWZvcmV7XHJcblx0dG9wOiA1cHg7XHJcbn1cclxuLm1lbnVJY29uIC5iYXJzOjphZnRlcntcclxuXHR0b3A6IC01cHg7XHJcbn1cclxuXHJcbi5tZW51QnRuOmNoZWNrZWQgfiAubmF2X2xpbmt7XHJcblx0d2lkdGg6IDMwMHB4O1xyXG59XHJcbi5tZW51QnRuOmNoZWNrZWQgfiAubWVudUljb24gLmJhcnN7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4ubWVudUJ0bjpjaGVja2VkIH4gLm1lbnVJY29uIC5iYXJzOjpiZWZvcmV7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuXHR0b3A6IDA7XHJcbn1cclxuLm1lbnVCdG46Y2hlY2tlZCB+IC5tZW51SWNvbiAuYmFyczo6YWZ0ZXJ7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdHRvcDogMDtcclxufVxyXG5cclxuLk5hdmJhckl0ZW1zIC5iYXJMaW5le1xyXG5cdG1pbi13aWR0aDogMTAwcHg7XHJcblx0aGVpZ2h0OiAwcHg7XHJcblx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYigxOTcsIDE5NCwgMTkpO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0ei1pbmRleDogMTtcclxuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAuOHM7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJ0bl9sb2dpbntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogOTk5O1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogLTIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0b3V0bGluZTpub25lO1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcblx0b3BhY2l0eTogMC42O1xyXG59XHJcbi5idG5fbG9naW46aG92ZXJ7XHJcblx0b3BhY2l0eTogMS4wO1xyXG59XHJcbi5idG5fbG9naW4gaW1ne1xyXG5cdG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbn1cclxuXHJcbi5sb2dvdXQgaW1ne1xyXG5cdHdpZHRoOiAzNXB4O1xyXG5cdGhlaWdodDogMzVweDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogMCAxMHB4O1xyXG5cdGJvcmRlcjogc29saWQgM3B4IHJnYmEoMTAwLCAxMDAsIDEwMCwgMSk7XHJcblx0Ym9yZGVyLXJhZGl1czogOTk5cHg7XHJcbn1cclxuXHJcbi5tZW51QnRuOmNoZWNrZWQgfiAuYnRuX2xvZ2lue1xyXG5cdHJpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcblx0Lm5hdl9saW5rIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0d2lkdGg6IGF1dG87XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdH1cclxuXHRcclxuXHQuTmF2YmFySXRlbXMgLm1lbnVJY29ue1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0Lm5hdl9saW5rIC5saW5re1xyXG5cdFx0d2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHR9XHJcblx0Lm5hdl9saW5rIC5saW5rOmhvdmVye1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdH1cclxuXHQubGluayBhe1xyXG5cdFx0bWluLXdpZHRoOiAxMDBweDtcclxuXHRcdHdpZHRoOiAxMDBweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDIwcHggMHB4O1xyXG5cdH1cclxuXHQuTmF2YmFySXRlbXMgLmJhckxpbmV7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG5cdH1cclxuXHQuYnRuX2xvZ2lue1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0cmlnaHQ6IDMwcHg7XHJcblx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0fVxyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBmb290ZXJTdHlsZSA9IGNzc2BcclxuXHJcbi5Gb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDBweDtcclxufVxyXG5cclxuLkZvb3RlciBkaXZ7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLkZvb3RlciBkaXZ7XHJcbiAgICAgICAgd2lkdGg6IDY0MHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxufVxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxMjgxcHgpe1xyXG4gICAgLkZvb3RlciBkaXZ7XHJcbiAgICAgICAgd2lkdGg6IDEyMDBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi5saW5lXzF7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg2ODY4NjtcclxufVxyXG5cclxuLmNvcHlyaWdodHtcclxuICAgIG1hcmdpbjogMjBweCAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zb2NpYWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdHBhZGRpbmc6IDAlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uc29jaWFsIGxpe1xyXG5cclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWwgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTk5OTk5O1xyXG4gICAgY29sb3I6ICNlZmVmZWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zb2NpYWwgbGkgYSBkaXZ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxufVxyXG5cclxuLmZiX2ljb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvaWNvbnMvZmFjZWJvb2sucG5nJyk7XHJcbn1cclxuLnR3X2ljb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvaWNvbnMvdHdpdHRlci5wbmcnKTtcclxufVxyXG4uaWdfaWNvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9pY29ucy9pbnN0YWdyYW0ucG5nJyk7XHJcbn1cclxuLmRjX2ljb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvaWNvbnMvZGlzY29yZGlhLnBuZycpO1xyXG59XHJcbi55dF9pY29ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL2ljb25zL3lvdXR1YmUucG5nJyk7XHJcbn1cclxuXHJcblxyXG4uc29jaWFsIGEudHc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwYWNlZTtcclxufSBcclxuLnNvY2lhbCBhLmZiOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzYjU5OTg7XHJcbn1cclxuLnNvY2lhbCBhLnl0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZDRiMzk7XHJcbn1cclxuLnNvY2lhbCBhLmRjOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzYjU5OTg7XHJcbn1cclxuLnNvY2lhbCBhLmlnOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNiYjhkMGU7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IHBvcFVwID0gY3NzYFxyXG4ucG9wVXB7XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG5cdGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblx0ei1pbmRleDogOTk7XHJcblx0b3ZlcmZsb3cteDpoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OmhpZGRlbjtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5wb3BVcC1jb250ZW50e1xyXG5cdHdpZHRoOiA1MDBweDtcclxuXHRoZWlnaHQ6IDYwMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG5cdGJvcmRlci10b3A6IHNvbGlkIDNweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuXHRwYWRkaW5nOiA1cHggNXB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnBvcFVwLWNvbnRlbnQgaW1ne1xyXG5cdHdpZHRoOiAxMDBweDtcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblx0bWFyZ2luOiAyMHB4IGF1dG87XHJcblx0cGFkZGluZzogMDtcclxufVxyXG4ucG9wVXAtY29udGVudCBoMXtcclxuXHRtYXJnaW46IDA7XHJcblx0bWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuLnBvcFVwLWNvbnRlbnQgaDV7XHJcblx0bWFyZ2luOiAwO1xyXG5cdG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcbi5idG4tZXhpdHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwcHg7XHJcblx0cmlnaHQ6IDEwcHg7XHJcblx0Zm9udC1zaXplOiA0MnB4O1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRtYXJnaW46IDBweDsgXHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4uYnRuLWxvZ2lue1xyXG5cdHdpZHRoOiAyNTBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87IFxyXG59XHJcbi5idG4tbG9naW4gaW1ne1xyXG5cdHdpZHRoOiAyMHB4O1xyXG5cdGhlaWdodDogMjBweDtcclxuXHRtYXJnaW46IDA7IFxyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgcG9wVXBTY3JvbGwgPSBjc3NgXHJcblxyXG4ucG9wVXB7XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR6LWluZGV4OiAyO1xyXG5cdG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTpoaWRkZW47XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4ucG9wVXAtY29udGVudHtcclxuXHR3aWR0aDogMzAwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG5cdGJvcmRlci10b3A6IHNvbGlkIDNweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuXHRwYWRkaW5nOiA1cHggNXB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNjVweDtcclxuXHRyaWdodDogMzBweDtcclxuXHRwYWRkaW5nOiBhdXRvO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ub3B0aW9ue1xyXG5cclxufVxyXG5gIl19 */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\mainStyles.js */");
footerStyle.__hash = "2479200670";
const popUp = new String(".popUp.jsx-2542535029{width:100vw;height:100vh;background-color:rgba(0,0,0,0.7);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);position:fixed;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;z-index:99;overflow-x:hidden;overflow-y:hidden;display:none;}.popUp-content.jsx-2542535029{width:500px;height:600px;background-color:rgba(255,255,255,1);border-radius:5px;box-shadow:0px 0px 10px #000000;border-top:solid 3px rgb(197,194,19);padding:5px 5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}.popUp-content.jsx-2542535029 img.jsx-2542535029{width:100px;height:100px;border-radius:999px;background-color:#000000;margin:20px auto;padding:0;}.popUp-content.jsx-2542535029 h1.jsx-2542535029{margin:0;margin:10px auto;}.popUp-content.jsx-2542535029 h5.jsx-2542535029{margin:0;margin:10px auto;}.btn-exit.jsx-2542535029{position:absolute;top:0px;right:10px;font-size:42px;padding:0px;margin:0px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.btn-login.jsx-2542535029{width:250px;height:30px;margin:0 auto;}.btn-login.jsx-2542535029 img.jsx-2542535029{width:20px;height:20px;margin:0;margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcbWFpblN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1WHdCLEFBR2MsQUFlQSxBQVlBLEFBUUgsQUFJQSxBQUlTLEFBV04sQUFLRCxTQXZCTSxBQUlBLEVBb0JMLENBM0RDLEFBZUEsQUFZQSxBQTJCRCxNQVhKLEtBaUJDLENBTEssQ0F0RHNCLEFBZUksQUFZcEIsQ0FRckIsQUFJQSxBQUlZLE1BaUJPLEtBaEJILENBV2hCLE9BM0IwQixLQWlDMUIsRUFoQmEsTUE1Q2MsSUFlUixFQThCUCxNQWpCTSxLQWtCTyxLQTlCUSxPQWF0QixVQUNYLGVBYndDLE1BaEJ4QixlQUNULE1BQ08sVUFlRyxVQTZCRCxNQTVCRixTQTZCSSx1Q0E1Q00sMEJBZ0JELG9CQTZCdkIscURBNUNzQixLQWdCSCxrQkFDbkIscURBaEJZLFdBQ00sa0JBQ0csa0JBQ1AsYUFDZCIsImZpbGUiOiJEOlxcUHJvZ3JhbWFjaW9uXFxEZXNhcnJvbGxvV2ViXFx3ZWItY29zbWVyZWxhdGFtXFxjb3NtZXJlLWxhdGFtXFxzdHlsZXNcXG1haW5TdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmJhclN0eWxlID0gY3NzYFxyXG4uTmF2YmFySXRlbXMge1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2IoMCwgMCwgMCwgMS4wKSAwJSAsIHJnYmEoMCwgMCwgMCwgMC41KSA4MCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTtcclxuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHRwYWRkaW5nOiAwcHg7XHJcblx0bWFyZ2luOjBweDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ubmF2X2xvZ297XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDcwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvaW1hZ2VzL0xvZ29DTC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogNXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5cclxuLm5hdl9saW5re1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0d2lkdGg6IDAlO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRjbGVhcjogYm90aDtcclxuXHRib3JkZXItdG9wOiA1NXB4IHNvbGlkICMxMTExMTE7XHJcblx0YmFja2dyb3VuZDogIzMzMzMzMztcdFxyXG5cdHotaW5kZXg6IDU7XHJcblx0dHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxufVxyXG5cclxuLm5hdl9saW5rIC5saW5re1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0ei1pbmRleDogNTtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjhzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5uYXZfbGluayAubGluazpob3ZlcntcclxuXHRjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHRleHQtc2hhZG93OjBweCAwcHggMTBweCAjMDAwMDAwO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzAwODhhOTtcclxufVxyXG5cclxuLmxpbmsgYXtcclxuXHRtaW4td2lkdGg6IDMwMHB4O1xyXG5cdHBhZGRpbmc6IDIwcHggMjBweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5idG4tbGd7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwODhhOTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRjb2xvcjogIzAwODhhOTtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMTBweCAyMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5idG4tbGc6aG92ZXJ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwODhhOTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZDogIzAwODhhOTtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idG4tbGc6YWN0aXZle1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDg4YTk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4uYnRuLWxnOmZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5OYXZiYXJJdGVtcyAubWVudUJ0bntcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uTmF2YmFySXRlbXMgLm1lbnVJY29ue1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDg4YTk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdHBhZGRpbmc6IDIwcHggMTJweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ei1pbmRleDogMTA7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5OYXZiYXJJdGVtcyAubWVudUljb246aG92ZXJ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwODhhOTtcclxufVxyXG5cclxuLm1lbnVJY29uIC5iYXJze1xyXG5cdGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0aGVpZ2h0OiAycHg7XHJcblx0d2lkdGg6IDE4cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcblxyXG59XHJcbi5tZW51SWNvbiAuYmFyczo6YmVmb3JlLFxyXG4ubWVudUljb24gLmJhcnM6OmFmdGVye1xyXG5cdGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcbn1cclxuLm1lbnVJY29uIC5iYXJzOjpiZWZvcmV7XHJcblx0dG9wOiA1cHg7XHJcbn1cclxuLm1lbnVJY29uIC5iYXJzOjphZnRlcntcclxuXHR0b3A6IC01cHg7XHJcbn1cclxuXHJcbi5tZW51QnRuOmNoZWNrZWQgfiAubmF2X2xpbmt7XHJcblx0d2lkdGg6IDMwMHB4O1xyXG59XHJcbi5tZW51QnRuOmNoZWNrZWQgfiAubWVudUljb24gLmJhcnN7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4ubWVudUJ0bjpjaGVja2VkIH4gLm1lbnVJY29uIC5iYXJzOjpiZWZvcmV7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuXHR0b3A6IDA7XHJcbn1cclxuLm1lbnVCdG46Y2hlY2tlZCB+IC5tZW51SWNvbiAuYmFyczo6YWZ0ZXJ7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdHRvcDogMDtcclxufVxyXG5cclxuLk5hdmJhckl0ZW1zIC5iYXJMaW5le1xyXG5cdG1pbi13aWR0aDogMTAwcHg7XHJcblx0aGVpZ2h0OiAwcHg7XHJcblx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYigxOTcsIDE5NCwgMTkpO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0ei1pbmRleDogMTtcclxuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAuOHM7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJ0bl9sb2dpbntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogOTk5O1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogLTIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0b3V0bGluZTpub25lO1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcblx0b3BhY2l0eTogMC42O1xyXG59XHJcbi5idG5fbG9naW46aG92ZXJ7XHJcblx0b3BhY2l0eTogMS4wO1xyXG59XHJcbi5idG5fbG9naW4gaW1ne1xyXG5cdG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbn1cclxuXHJcbi5sb2dvdXQgaW1ne1xyXG5cdHdpZHRoOiAzNXB4O1xyXG5cdGhlaWdodDogMzVweDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogMCAxMHB4O1xyXG5cdGJvcmRlcjogc29saWQgM3B4IHJnYmEoMTAwLCAxMDAsIDEwMCwgMSk7XHJcblx0Ym9yZGVyLXJhZGl1czogOTk5cHg7XHJcbn1cclxuXHJcbi5tZW51QnRuOmNoZWNrZWQgfiAuYnRuX2xvZ2lue1xyXG5cdHJpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcblx0Lm5hdl9saW5rIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0d2lkdGg6IGF1dG87XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdH1cclxuXHRcclxuXHQuTmF2YmFySXRlbXMgLm1lbnVJY29ue1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0Lm5hdl9saW5rIC5saW5re1xyXG5cdFx0d2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHR9XHJcblx0Lm5hdl9saW5rIC5saW5rOmhvdmVye1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdH1cclxuXHQubGluayBhe1xyXG5cdFx0bWluLXdpZHRoOiAxMDBweDtcclxuXHRcdHdpZHRoOiAxMDBweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDIwcHggMHB4O1xyXG5cdH1cclxuXHQuTmF2YmFySXRlbXMgLmJhckxpbmV7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG5cdH1cclxuXHQuYnRuX2xvZ2lue1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0cmlnaHQ6IDMwcHg7XHJcblx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0fVxyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBmb290ZXJTdHlsZSA9IGNzc2BcclxuXHJcbi5Gb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDBweDtcclxufVxyXG5cclxuLkZvb3RlciBkaXZ7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLkZvb3RlciBkaXZ7XHJcbiAgICAgICAgd2lkdGg6IDY0MHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxufVxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxMjgxcHgpe1xyXG4gICAgLkZvb3RlciBkaXZ7XHJcbiAgICAgICAgd2lkdGg6IDEyMDBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi5saW5lXzF7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg2ODY4NjtcclxufVxyXG5cclxuLmNvcHlyaWdodHtcclxuICAgIG1hcmdpbjogMjBweCAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zb2NpYWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdHBhZGRpbmc6IDAlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uc29jaWFsIGxpe1xyXG5cclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWwgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTk5OTk5O1xyXG4gICAgY29sb3I6ICNlZmVmZWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zb2NpYWwgbGkgYSBkaXZ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxufVxyXG5cclxuLmZiX2ljb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvaWNvbnMvZmFjZWJvb2sucG5nJyk7XHJcbn1cclxuLnR3X2ljb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvaWNvbnMvdHdpdHRlci5wbmcnKTtcclxufVxyXG4uaWdfaWNvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9pY29ucy9pbnN0YWdyYW0ucG5nJyk7XHJcbn1cclxuLmRjX2ljb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvaWNvbnMvZGlzY29yZGlhLnBuZycpO1xyXG59XHJcbi55dF9pY29ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL2ljb25zL3lvdXR1YmUucG5nJyk7XHJcbn1cclxuXHJcblxyXG4uc29jaWFsIGEudHc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwYWNlZTtcclxufSBcclxuLnNvY2lhbCBhLmZiOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzYjU5OTg7XHJcbn1cclxuLnNvY2lhbCBhLnl0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZDRiMzk7XHJcbn1cclxuLnNvY2lhbCBhLmRjOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzYjU5OTg7XHJcbn1cclxuLnNvY2lhbCBhLmlnOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNiYjhkMGU7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IHBvcFVwID0gY3NzYFxyXG4ucG9wVXB7XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG5cdGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblx0ei1pbmRleDogOTk7XHJcblx0b3ZlcmZsb3cteDpoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OmhpZGRlbjtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5wb3BVcC1jb250ZW50e1xyXG5cdHdpZHRoOiA1MDBweDtcclxuXHRoZWlnaHQ6IDYwMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG5cdGJvcmRlci10b3A6IHNvbGlkIDNweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuXHRwYWRkaW5nOiA1cHggNXB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnBvcFVwLWNvbnRlbnQgaW1ne1xyXG5cdHdpZHRoOiAxMDBweDtcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblx0bWFyZ2luOiAyMHB4IGF1dG87XHJcblx0cGFkZGluZzogMDtcclxufVxyXG4ucG9wVXAtY29udGVudCBoMXtcclxuXHRtYXJnaW46IDA7XHJcblx0bWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuLnBvcFVwLWNvbnRlbnQgaDV7XHJcblx0bWFyZ2luOiAwO1xyXG5cdG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcbi5idG4tZXhpdHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwcHg7XHJcblx0cmlnaHQ6IDEwcHg7XHJcblx0Zm9udC1zaXplOiA0MnB4O1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRtYXJnaW46IDBweDsgXHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4uYnRuLWxvZ2lue1xyXG5cdHdpZHRoOiAyNTBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87IFxyXG59XHJcbi5idG4tbG9naW4gaW1ne1xyXG5cdHdpZHRoOiAyMHB4O1xyXG5cdGhlaWdodDogMjBweDtcclxuXHRtYXJnaW46IDA7IFxyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgcG9wVXBTY3JvbGwgPSBjc3NgXHJcblxyXG4ucG9wVXB7XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR6LWluZGV4OiAyO1xyXG5cdG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTpoaWRkZW47XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4ucG9wVXAtY29udGVudHtcclxuXHR3aWR0aDogMzAwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG5cdGJvcmRlci10b3A6IHNvbGlkIDNweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuXHRwYWRkaW5nOiA1cHggNXB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNjVweDtcclxuXHRyaWdodDogMzBweDtcclxuXHRwYWRkaW5nOiBhdXRvO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ub3B0aW9ue1xyXG5cclxufVxyXG5gIl19 */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\mainStyles.js */");
popUp.__hash = "2542535029";
const popUpScroll = new String(".popUp.jsx-2085907560{width:100vw;height:100vh;position:fixed;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;z-index:2;overflow-x:hidden;overflow-y:hidden;display:none;}.popUp-content.jsx-2085907560{width:300px;height:50px;background-color:rgba(255,255,255,1);border-radius:5px;box-shadow:0px 0px 10px #000000;border-top:solid 3px rgb(197,194,19);padding:5px 5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;position:absolute;top:65px;right:30px;padding:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcbWFpblN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyYjhCLEFBSWMsQUFhQSxZQVpDLEFBYUQsWUFDNEIsQ0FiekIsZUFDVCxNQUNPLGVBWUssa0JBQ2MsZ0NBQ08sU0FiaEIsNEJBY1AsZ0JBQ0gsdURBZFEsbUJBZUYseURBZFQsVUFDTyxFQWNZLGdCQWJULGtCQUNQLGFBQ2QsNEVBWXNCLDRFQUNILGtCQUNULFNBQ0UsV0FDRSxhQUNJLHFGQUNsQiIsImZpbGUiOiJEOlxcUHJvZ3JhbWFjaW9uXFxEZXNhcnJvbGxvV2ViXFx3ZWItY29zbWVyZWxhdGFtXFxjb3NtZXJlLWxhdGFtXFxzdHlsZXNcXG1haW5TdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmJhclN0eWxlID0gY3NzYFxyXG4uTmF2YmFySXRlbXMge1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2IoMCwgMCwgMCwgMS4wKSAwJSAsIHJnYmEoMCwgMCwgMCwgMC41KSA4MCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTtcclxuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuXHRwYWRkaW5nOiAwcHg7XHJcblx0bWFyZ2luOjBweDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ubmF2X2xvZ297XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDcwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvaW1hZ2VzL0xvZ29DTC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogNXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5cclxuLm5hdl9saW5re1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0d2lkdGg6IDAlO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRjbGVhcjogYm90aDtcclxuXHRib3JkZXItdG9wOiA1NXB4IHNvbGlkICMxMTExMTE7XHJcblx0YmFja2dyb3VuZDogIzMzMzMzMztcdFxyXG5cdHotaW5kZXg6IDU7XHJcblx0dHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxufVxyXG5cclxuLm5hdl9saW5rIC5saW5re1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0ei1pbmRleDogNTtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjhzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5uYXZfbGluayAubGluazpob3ZlcntcclxuXHRjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHRleHQtc2hhZG93OjBweCAwcHggMTBweCAjMDAwMDAwO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzAwODhhOTtcclxufVxyXG5cclxuLmxpbmsgYXtcclxuXHRtaW4td2lkdGg6IDMwMHB4O1xyXG5cdHBhZGRpbmc6IDIwcHggMjBweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5idG4tbGd7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwODhhOTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRjb2xvcjogIzAwODhhOTtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMTBweCAyMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5idG4tbGc6aG92ZXJ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwODhhOTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZDogIzAwODhhOTtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idG4tbGc6YWN0aXZle1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDg4YTk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4uYnRuLWxnOmZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5OYXZiYXJJdGVtcyAubWVudUJ0bntcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uTmF2YmFySXRlbXMgLm1lbnVJY29ue1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDg4YTk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdHBhZGRpbmc6IDIwcHggMTJweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ei1pbmRleDogMTA7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5OYXZiYXJJdGVtcyAubWVudUljb246aG92ZXJ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwODhhOTtcclxufVxyXG5cclxuLm1lbnVJY29uIC5iYXJze1xyXG5cdGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0aGVpZ2h0OiAycHg7XHJcblx0d2lkdGg6IDE4cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcblxyXG59XHJcbi5tZW51SWNvbiAuYmFyczo6YmVmb3JlLFxyXG4ubWVudUljb24gLmJhcnM6OmFmdGVye1xyXG5cdGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcbn1cclxuLm1lbnVJY29uIC5iYXJzOjpiZWZvcmV7XHJcblx0dG9wOiA1cHg7XHJcbn1cclxuLm1lbnVJY29uIC5iYXJzOjphZnRlcntcclxuXHR0b3A6IC01cHg7XHJcbn1cclxuXHJcbi5tZW51QnRuOmNoZWNrZWQgfiAubmF2X2xpbmt7XHJcblx0d2lkdGg6IDMwMHB4O1xyXG59XHJcbi5tZW51QnRuOmNoZWNrZWQgfiAubWVudUljb24gLmJhcnN7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4ubWVudUJ0bjpjaGVja2VkIH4gLm1lbnVJY29uIC5iYXJzOjpiZWZvcmV7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuXHR0b3A6IDA7XHJcbn1cclxuLm1lbnVCdG46Y2hlY2tlZCB+IC5tZW51SWNvbiAuYmFyczo6YWZ0ZXJ7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdHRvcDogMDtcclxufVxyXG5cclxuLk5hdmJhckl0ZW1zIC5iYXJMaW5le1xyXG5cdG1pbi13aWR0aDogMTAwcHg7XHJcblx0aGVpZ2h0OiAwcHg7XHJcblx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYigxOTcsIDE5NCwgMTkpO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0ei1pbmRleDogMTtcclxuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAuOHM7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJ0bl9sb2dpbntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogOTk5O1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogLTIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0b3V0bGluZTpub25lO1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcblx0b3BhY2l0eTogMC42O1xyXG59XHJcbi5idG5fbG9naW46aG92ZXJ7XHJcblx0b3BhY2l0eTogMS4wO1xyXG59XHJcbi5idG5fbG9naW4gaW1ne1xyXG5cdG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbn1cclxuXHJcbi5sb2dvdXQgaW1ne1xyXG5cdHdpZHRoOiAzNXB4O1xyXG5cdGhlaWdodDogMzVweDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogMCAxMHB4O1xyXG5cdGJvcmRlcjogc29saWQgM3B4IHJnYmEoMTAwLCAxMDAsIDEwMCwgMSk7XHJcblx0Ym9yZGVyLXJhZGl1czogOTk5cHg7XHJcbn1cclxuXHJcbi5tZW51QnRuOmNoZWNrZWQgfiAuYnRuX2xvZ2lue1xyXG5cdHJpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcblx0Lm5hdl9saW5rIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0d2lkdGg6IGF1dG87XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdH1cclxuXHRcclxuXHQuTmF2YmFySXRlbXMgLm1lbnVJY29ue1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0Lm5hdl9saW5rIC5saW5re1xyXG5cdFx0d2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHR9XHJcblx0Lm5hdl9saW5rIC5saW5rOmhvdmVye1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdH1cclxuXHQubGluayBhe1xyXG5cdFx0bWluLXdpZHRoOiAxMDBweDtcclxuXHRcdHdpZHRoOiAxMDBweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDIwcHggMHB4O1xyXG5cdH1cclxuXHQuTmF2YmFySXRlbXMgLmJhckxpbmV7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG5cdH1cclxuXHQuYnRuX2xvZ2lue1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0cmlnaHQ6IDMwcHg7XHJcblx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0fVxyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBmb290ZXJTdHlsZSA9IGNzc2BcclxuXHJcbi5Gb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDBweDtcclxufVxyXG5cclxuLkZvb3RlciBkaXZ7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLkZvb3RlciBkaXZ7XHJcbiAgICAgICAgd2lkdGg6IDY0MHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxufVxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxMjgxcHgpe1xyXG4gICAgLkZvb3RlciBkaXZ7XHJcbiAgICAgICAgd2lkdGg6IDEyMDBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi5saW5lXzF7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg2ODY4NjtcclxufVxyXG5cclxuLmNvcHlyaWdodHtcclxuICAgIG1hcmdpbjogMjBweCAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zb2NpYWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdHBhZGRpbmc6IDAlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uc29jaWFsIGxpe1xyXG5cclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWwgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTk5OTk5O1xyXG4gICAgY29sb3I6ICNlZmVmZWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zb2NpYWwgbGkgYSBkaXZ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxufVxyXG5cclxuLmZiX2ljb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvaWNvbnMvZmFjZWJvb2sucG5nJyk7XHJcbn1cclxuLnR3X2ljb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvaWNvbnMvdHdpdHRlci5wbmcnKTtcclxufVxyXG4uaWdfaWNvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9pY29ucy9pbnN0YWdyYW0ucG5nJyk7XHJcbn1cclxuLmRjX2ljb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvaWNvbnMvZGlzY29yZGlhLnBuZycpO1xyXG59XHJcbi55dF9pY29ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL2ljb25zL3lvdXR1YmUucG5nJyk7XHJcbn1cclxuXHJcblxyXG4uc29jaWFsIGEudHc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwYWNlZTtcclxufSBcclxuLnNvY2lhbCBhLmZiOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzYjU5OTg7XHJcbn1cclxuLnNvY2lhbCBhLnl0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZDRiMzk7XHJcbn1cclxuLnNvY2lhbCBhLmRjOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzYjU5OTg7XHJcbn1cclxuLnNvY2lhbCBhLmlnOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNiYjhkMGU7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IHBvcFVwID0gY3NzYFxyXG4ucG9wVXB7XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG5cdGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblx0ei1pbmRleDogOTk7XHJcblx0b3ZlcmZsb3cteDpoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OmhpZGRlbjtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5wb3BVcC1jb250ZW50e1xyXG5cdHdpZHRoOiA1MDBweDtcclxuXHRoZWlnaHQ6IDYwMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG5cdGJvcmRlci10b3A6IHNvbGlkIDNweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuXHRwYWRkaW5nOiA1cHggNXB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnBvcFVwLWNvbnRlbnQgaW1ne1xyXG5cdHdpZHRoOiAxMDBweDtcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblx0bWFyZ2luOiAyMHB4IGF1dG87XHJcblx0cGFkZGluZzogMDtcclxufVxyXG4ucG9wVXAtY29udGVudCBoMXtcclxuXHRtYXJnaW46IDA7XHJcblx0bWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuLnBvcFVwLWNvbnRlbnQgaDV7XHJcblx0bWFyZ2luOiAwO1xyXG5cdG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcbi5idG4tZXhpdHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwcHg7XHJcblx0cmlnaHQ6IDEwcHg7XHJcblx0Zm9udC1zaXplOiA0MnB4O1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRtYXJnaW46IDBweDsgXHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4uYnRuLWxvZ2lue1xyXG5cdHdpZHRoOiAyNTBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87IFxyXG59XHJcbi5idG4tbG9naW4gaW1ne1xyXG5cdHdpZHRoOiAyMHB4O1xyXG5cdGhlaWdodDogMjBweDtcclxuXHRtYXJnaW46IDA7IFxyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgcG9wVXBTY3JvbGwgPSBjc3NgXHJcblxyXG4ucG9wVXB7XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR6LWluZGV4OiAyO1xyXG5cdG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTpoaWRkZW47XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4ucG9wVXAtY29udGVudHtcclxuXHR3aWR0aDogMzAwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG5cdGJvcmRlci10b3A6IHNvbGlkIDNweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuXHRwYWRkaW5nOiA1cHggNXB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNjVweDtcclxuXHRyaWdodDogMzBweDtcclxuXHRwYWRkaW5nOiBhdXRvO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ub3B0aW9ue1xyXG5cclxufVxyXG5gIl19 */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\mainStyles.js */");
popUpScroll.__hash = "2085907560";

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
const newSecction = new String("section.jsx-2661352353{background:url(\"/images/newsBackground.jpg\") no-repeat;background-size:cover;background-position:left top;background-position:20% top;background-attachment:fixed;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}@media all and (min-width:768px){.new.jsx-2661352353{padding-top:66px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcbmV3U3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU84QixBQUdnRSxBQVV0QyxpQkFFckIsc0NBWDBCLHNCQUNPLDZCQUNELDRCQUNBLDRCQUNOLDhFQUMxQiIsImZpbGUiOiJEOlxcUHJvZ3JhbWFjaW9uXFxEZXNhcnJvbGxvV2ViXFx3ZWItY29zbWVyZWxhdGFtXFxjb3NtZXJlLWxhdGFtXFxzdHlsZXNcXG5ld1N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXHJcblxyXG5jb25zdCBjb2xvciA9IHtcclxuICAgIHByaW1hcnk6ICcjMzkzYjQwJyxcclxuICAgIHNlY29uZGFyeTogJyM5MzkzMTMnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmV3U2VjY3Rpb24gPSBjc3NgXHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvaW1hZ2VzL25ld3NCYWNrZ3JvdW5kLmpwZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMCUgdG9wO1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAubmV3e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2NnB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiAgICBcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld1N0eWxlID0gY3NzYFxyXG5oNXtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuLm5ld3MgaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBsYWJlbHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1pbi13aWR0aDogMTU1cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTcsIDU5LCA2NCwgMC4yKTtcclxuICAgIGNvbG9yOiAjMzkzYjQwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIDBzIGVhc2U7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgbGFiZWw6aG92ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwOyAgIFxyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBpbnB1dFtpZD1cImNhdGVnb3J5MVwiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVwiY2F0ZWdvcnkxXCJde1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgaW5wdXRbaWQ9XCJjYXRlZ29yeTJcIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cImNhdGVnb3J5MlwiXXtcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGlucHV0W2lkPVwiY2F0ZWdvcnkzXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJjYXRlZ29yeTNcIl17XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwO1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBpbnB1dFtpZD1cImNhdGVnb3J5NFwiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVwiY2F0ZWdvcnk0XCJde1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxufVxyXG5cclxuLm5ld3NMaXN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogdG9wO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG4ubmV3c0xpc3QgdWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5uZXd7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG59XHJcbi5uZXc6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbn1cclxuLm5ldyBhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubW9yZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubmV3IC5pbWcge1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMzAsIDMwLCAwLjcpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi5uZXcgLmNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiB0b3A7XHJcbiAgICBtYXJnaW46IDBweDtcclxuXHJcbn1cclxuXHJcbi5uZXcgLmRhdGF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvdHRvbTogMTZweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgY29sb3I6IHJnYmEoODAsIDgwLCA4MCwgMSk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbn1cclxuLm5ldyAuc2VjdGlvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA1MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5uZXcgaDN7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4ubmV3IHB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM3ZDdkN2Q7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAubmV3c0xpc3R7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDBweDtcclxuICAgIH1cclxuICAgIC5uZXdzTGlzdCB1bHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLm5ld3tcclxuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMjgwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTcwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICB9XHJcbiAgIC5tb3Jle1xyXG4gICAgICAgIHdpZHRoOiAxMjgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLm5ldyAuaW1nIHtcclxuICAgICAgICB3aWR0aDogMjY1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCAzMCwgMzAsIDAuNyk7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC5uZXcgLmNvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4NXB4KTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAubmV3IGgze1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgLm5ldyBwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLm5ldyAuZGF0YXtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVyU3R5bGUgPSBjc3NgXHJcbi50b3BOZXdze1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiA3MHB4IDBweDtcclxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbn1cclxuXHJcbi5zbGlkZXJNYWlue1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG59XHJcblxyXG4udG9wTmV3cyB1bHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcyBlYXNlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGF1dG9TbGlkZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMjAuNXM7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4udG9wTmV3cyBsaXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMwLCAzMCwgMzAsIDAuNyk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuLnRvcE5ld3MgbGk6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDAgMnB4IHJnYmEoMCwgMCwgMCwgMC43KTtcclxufVxyXG5cclxuLnRvcE5ld3MgbGkgLm5ld3NJbWd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gICAgd2lkdGg6IDI4M3B4O1xyXG4gICAgaGVpZ2h0OiAxMjNweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c1RpdGxlIGgxe1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4ICMwMDAwMDA7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzVGV4dHtcclxuICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c1RleHQgcHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCAjMDAwMDAwO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzT3JpZ2lue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAyODNweDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCAjMDAwMDAwO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzT3JpZ2luIC5kYXRle1xyXG4gICAgXHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOTQpO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzT3JpZ2luIC5vcmlnaW57XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxufVxyXG5cclxuLnRvcE5ld3MgLnNsaWRlckJhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRvcE5ld3MgaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50b3BOZXdzIC5zbGlkZXJCYXIgbGFiZWx7XHJcbiAgICBtYXJnaW46IDVweCAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTcsIDU5LCA2NCwgMC4zKTtcclxuICAgIGJvcmRlcjogc29saWQgNXB4IHJnYmEoNTcsIDU5LCA2NCwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0W2lkPVwic2xpZGVyMVwiXTpjaGVja2VkIH4gLnNsaWRlck1haW4gLnNsaWRlcntcclxuICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG59XHJcbmlucHV0W2lkPVwic2xpZGVyMVwiXTpjaGVja2VkIH4gLnNsaWRlckJhciBsYWJlbFtmb3I9XCJzbGlkZXIxXCJde1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTcsIDE5NCwgMTksIC42KTtcclxufVxyXG5cclxuaW5wdXRbaWQ9XCJzbGlkZXIyXCJdOmNoZWNrZWQgfiAuc2xpZGVyTWFpbiAuc2xpZGVye1xyXG4gICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1MHB4LCAwcHgpO1xyXG59XHJcbmlucHV0W2lkPVwic2xpZGVyMlwiXTpjaGVja2VkIH4gLnNsaWRlckJhciBsYWJlbFtmb3I9XCJzbGlkZXIyXCJde1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTcsIDE5NCwgMTksIC42KTtcclxufVxyXG5cclxuaW5wdXRbaWQ9XCJzbGlkZXIzXCJdOmNoZWNrZWQgfiAuc2xpZGVyTWFpbiAuc2xpZGVye1xyXG4gICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwMHB4LCAwcHgpO1xyXG59XHJcbmlucHV0W2lkPVwic2xpZGVyM1wiXTpjaGVja2VkIH4gLnNsaWRlckJhciBsYWJlbFtmb3I9XCJzbGlkZXIzXCJde1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTcsIDE5NCwgMTksIC42KTtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLm5ld3N7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuICAgIC50b3BOZXdzIHVse1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyBsaSAubmV3c0ltZ3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gICAgICAgIHdpZHRoOiAzODBweDtcclxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgfVxyXG4gICAgLnRvcE5ld3MgbGl7XHJcbiAgICAgICAgd2lkdGg6IDQyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyBsaSAubmV3c1RleHR7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnNsaWRlck1haW57XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyAuc2xpZGVyQmFye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEFuaW1hY2lvbiAqL1xyXG5cclxuQGtleWZyYW1lcyBhdXRvU2xpZGV7XHJcbiAgICAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIH1cclxuICAgIDMwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIH1cclxuICAgIDQwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzUwcHgsIDApO1xyXG4gICAgfVxyXG4gICAgNzAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zNTBweCwgMCk7XHJcbiAgICB9XHJcbiAgICA4MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwMHB4LCAwKTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwMHB4LCAwKTtcclxuICAgIH1cclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgYXJ0aWNsZVN0eWxlcyA9IGNzc2BcclxuZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5hcnRpY2xle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmFhO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMXB4O1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgM3B4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5iYWNre1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG59XHJcbmgxe1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuc3BhbntcclxuICAgIGNvbG9yOiByZ2JhKDgwLCA4MCwgODAsIDEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5wIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLmFydGljbGV7XHJcbiAgICAgICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDVweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOTk7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjMDAwMDAwOTk7XHJcbiAgICB9XHJcbiAgICAuYmFja3tcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIH1cclxuICAgIC5iYWNrIGRpdntcclxuICAgICAgICB3aWR0aDogOTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYm9keXtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOTk7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuYCJdfQ== */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\newStyles.js */");
newSecction.__hash = "2661352353";
const newStyle = new String("h5.jsx-3048185384{margin:5px 0px;}.news.jsx-3048185384 .category.jsx-3048185384{background-color:rgba(255,255,255,.8);-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px);box-shadow:0px 0px 10px #000000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:10px 0px;}.news.jsx-3048185384 input.jsx-3048185384{display:none;}.news.jsx-3048185384 .category.jsx-3048185384 label.jsx-3048185384{display:inline-block;min-width:155px;height:36px;line-height:36px;background-color:rgba(57,59,64,0.2);color:#393b40;border-radius:4px;text-align:center;margin:5px 10px;cursor:pointer;-webkit-transition:all 0.2s 0s ease;transition:all 0.2s 0s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.news.jsx-3048185384 .category.jsx-3048185384 label.jsx-3048185384:hover{color:rgb(197,194,19);background-color:#393b40;}.news.jsx-3048185384 .category.jsx-3048185384 input[id=\"category1\"].jsx-3048185384:checked~label[for=\"category1\"].jsx-3048185384{color:rgb(197,194,19);background-color:#393b40;}.news.jsx-3048185384 .category.jsx-3048185384 input[id=\"category2\"].jsx-3048185384:checked~label[for=\"category2\"].jsx-3048185384{color:rgb(197,194,19);background-color:#393b40;}.news.jsx-3048185384 .category.jsx-3048185384 input[id=\"category3\"].jsx-3048185384:checked~label[for=\"category3\"].jsx-3048185384{color:rgb(197,194,19);background-color:#393b40;}.news.jsx-3048185384 .category.jsx-3048185384 input[id=\"category4\"].jsx-3048185384:checked~label[for=\"category4\"].jsx-3048185384{color:rgb(197,194,19);background-color:#393b40;}.newsList.jsx-3048185384{width:100%;background-color:rgba(255,255,255,.5);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:top;-webkit-box-align:top;-ms-flex-align:top;align-items:top;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:20px 0px;}.newsList.jsx-3048185384 ul.jsx-3048185384{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;margin:0;}.new.jsx-3048185384{width:100vw;min-height:100px;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background:rgb(230,230,230);border-radius:5px;padding:5px 10px;margin:5px 0px;-webkit-transition:all .2s ease-out;transition:all .2s ease-out;}.new.jsx-3048185384:hover{background:rgb(255,255,255);box-shadow:0 0 0 4px rgb(197,194,19);}.new.jsx-3048185384 a.jsx-3048185384{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;overflow:hidden;}.more.jsx-3048185384{width:100%;min-width:100%;height:50px;margin:0px;margin-top:20px;}.new.jsx-3048185384 .img.jsx-3048185384{min-width:80px;height:50px;background-color:rgba(30,30,30,0.7);margin-right:20px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.new.jsx-3048185384 .content.jsx-3048185384{height:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:top;-webkit-box-align:top;-ms-flex-align:top;align-items:top;margin:0px;}.new.jsx-3048185384 .data.jsx-3048185384{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:300px;bottom:16px;right:16px;color:rgba(80,80,80,1);font-weight:400;font-size:9px;}.new.jsx-3048185384 .section.jsx-3048185384{margin-left:52px;text-align:right;}.new.jsx-3048185384 h3.jsx-3048185384{color:#000000;font-weight:500;font-size:15px;margin:0px;}.new.jsx-3048185384 p.jsx-3048185384{margin-top:11px;font-size:16px;color:#7d7d7d;display:none;}@media all and (min-width:768px){.newsList.jsx-3048185384{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:50px 0px;}.newsList.jsx-3048185384 ul.jsx-3048185384{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.new.jsx-3048185384{min-width:300px;width:1280px;min-height:170px;margin:10px 0px;padding:15px 20px;}.more.jsx-3048185384{width:1280px;height:80px;}.new.jsx-3048185384 .img.jsx-3048185384{width:265px;height:140px;background-color:rgba(30,30,30,0.7);margin-right:20px;padding:0px;}.new.jsx-3048185384 .content.jsx-3048185384{width:calc(100% - 285px);margin:0;}.new.jsx-3048185384 h3.jsx-3048185384{color:#000000;font-weight:500;font-size:19px;margin:0px;}.new.jsx-3048185384 p.jsx-3048185384{margin-top:11px;font-size:16px;color:#7d7d7d;display:block;}.new.jsx-3048185384 .data.jsx-3048185384{font-weight:600;font-size:12px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcbmV3U3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCMkIsQUFHb0IsQUFHMEIsQUFXNUIsQUFHUSxBQWNHLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFLYixBQVNFLEFBT0QsQUFZa0IsQUFJbkIsQUFVQSxBQVFJLEFBT0gsQUFTTSxBQVdELEFBS0gsQUFNRSxBQVFPLEFBSUcsQUFHTixBQU9ILEFBSUQsQUFPYSxBQUlYLEFBTUUsQUFNQSxXQXhJcUIsQUFnQzdCLEFBVUcsQ0ExQkUsQUF5Q0osQUF5REksQ0F4SnJCLEFBb0pvQixDQTVCQSxBQTJDSSxDQWpMeEIsQUFzR2dCLENBc0NHLEFBZUUsQUE0QkUsQUFNQSxDQTVERixDQVhKLEdBckdHLENBY1MsQUFJQSxBQUlBLEFBSUEsQUFJQSxDQXNDWixFQThFYixBQUkyQyxBQU05QixDQTlFRCxDQVEyQixDQXZCQSxDQVhyQixBQXVGRyxDQXJCTixBQTJDSSxDQXJDTCxBQTJDSSxBQU1sQixHQTVESixBQTRDSSxHQTVKWSxDQWZlLEFBNkZoQixPQXdDQSxBQU1FLEFBcUNFLEFBTUcsQ0E1QkUsQ0E3SHhCLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFzQmlCLEVBbkRJLEFBa0NVLEFBNENYLE9Bd0NwQixBQTJDSSxFQXJDSixDQTJDSSxFQWxCc0IsQ0FWQSxDQXRESixFQXZCdEIsQUFpQkEsQ0E5RTJDLEdBZ0lsQixLQXZGTixJQTJGZixDQWlCZ0IsQ0FWaEIsQ0F0RGtCLEtBS0ksQUF1Q3RCLEtBcUJBLENBbkR5QixLQWpDTixHQWxGYSxFQWlCbEIsU0FpQ0QsS0FoQ0ssS0FpREMsVUFUSSxDQXpEVixFQWtCSyxrQkFDRixBQWtGcEIsWUFLb0IsRUF4Qk0sRUE5RFAsZUFDYSxFQTZCWixJQWlFSixDQWhEa0IsV0FpRGxCLEtBbkhPLE9Bb0hSLEtBakRPLE1Ba0RRLE1BNURoQixNQVdPLElBVlIsS0FnREUsRUFyRk0sQUFpR0QsRUEzRHBCLElBVW1CLEdBdUNuQixLQTFCc0IsRUFxQ0osR0FyRVMsRUFvQkssU0FrRGhDLHNCQXZIbUIsaUNBcUJuQixBQWlEQSxrQkFZb0IsTUFqRk8sU0FpRE4sQ0FpQ3JCLGdCQWhDQSx5RUFqRGUsV0FDTSxpQkFDckIiLCJmaWxlIjoiRDpcXFByb2dyYW1hY2lvblxcRGVzYXJyb2xsb1dlYlxcd2ViLWNvc21lcmVsYXRhbVxcY29zbWVyZS1sYXRhbVxcc3R5bGVzXFxuZXdTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuY29uc3QgY29sb3IgPSB7XHJcbiAgICBwcmltYXJ5OiAnIzM5M2I0MCcsXHJcbiAgICBzZWNvbmRhcnk6ICcjOTM5MzEzJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld1NlY2N0aW9uID0gY3NzYFxyXG4gICAgc2VjdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL2ltYWdlcy9uZXdzQmFja2dyb3VuZC5qcGdcIikgbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAlIHRvcDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLm5ld3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogNjZweDtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4gICAgXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdTdHlsZSA9IGNzc2BcclxuaDV7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzBweCk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcbi5uZXdzIGlucHV0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtaW4td2lkdGg6IDE1NXB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU3LCA1OSwgNjQsIDAuMik7XHJcbiAgICBjb2xvcjogIzM5M2I0MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAwcyBlYXNlO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGxhYmVsOmhvdmVye1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDsgICBcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgaW5wdXRbaWQ9XCJjYXRlZ29yeTFcIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cImNhdGVnb3J5MVwiXXtcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGlucHV0W2lkPVwiY2F0ZWdvcnkyXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJjYXRlZ29yeTJcIl17XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwO1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBpbnB1dFtpZD1cImNhdGVnb3J5M1wiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVwiY2F0ZWdvcnkzXCJde1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgaW5wdXRbaWQ9XCJjYXRlZ29yeTRcIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cImNhdGVnb3J5NFwiXXtcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7XHJcbn1cclxuXHJcbi5uZXdzTGlzdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHRvcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuLm5ld3NMaXN0IHVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ubmV3e1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcclxufVxyXG4ubmV3OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG59XHJcbi5uZXcgYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1vcmV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLm5ldyAuaW1nIHtcclxuICAgIG1pbi13aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDMwLCAzMCwgMC43KTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4ubmV3IC5jb250ZW50e1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogdG9wO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG59XHJcblxyXG4ubmV3IC5kYXRhe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3R0b206IDE2cHg7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIGNvbG9yOiByZ2JhKDgwLCA4MCwgODAsIDEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG59XHJcbi5uZXcgLnNlY3Rpb257XHJcbiAgICBtYXJnaW4tbGVmdDogNTJweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubmV3IGgze1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLm5ldyBwe1xyXG4gICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLm5ld3NMaXN0e1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgcGFkZGluZzogNTBweCAwcHg7XHJcbiAgICB9XHJcbiAgICAubmV3c0xpc3QgdWx7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5uZXd7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICB3aWR0aDogMTI4MHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE3MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgfVxyXG4gICAubW9yZXtcclxuICAgICAgICB3aWR0aDogMTI4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5uZXcgLmltZyB7XHJcbiAgICAgICAgd2lkdGg6IDI2NXB4O1xyXG4gICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMzAsIDMwLCAwLjcpO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAubmV3IC5jb250ZW50e1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyODVweCk7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLm5ldyBoM3tcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIC5uZXcgcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogIzdkN2Q3ZDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5uZXcgLmRhdGF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlclN0eWxlID0gY3NzYFxyXG4udG9wTmV3c3tcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogNzBweCAwcHg7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG59XHJcblxyXG4uc2xpZGVyTWFpbntcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxufVxyXG5cclxuLnRvcE5ld3MgdWx7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgNjAwbXMgZWFzZTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhdXRvU2xpZGU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDIwLjVzO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuLnRvcE5ld3MgbGl7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDMwLCAwLjcpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xyXG59XHJcbi50b3BOZXdzIGxpOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbi50b3BOZXdzIGxpIC5uZXdzSW1ne1xyXG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcclxuICAgIHdpZHRoOiAyODNweDtcclxuICAgIGhlaWdodDogMTIzcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NUaXRsZSBoMXtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCAjMDAwMDAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c1RleHR7XHJcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NUZXh0IHB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggIzAwMDAwMDtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c09yaWdpbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMjgzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggIzAwMDAwMDtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c09yaWdpbiAuZGF0ZXtcclxuICAgIFxyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTk0KTtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c09yaWdpbiAub3JpZ2lue1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbn1cclxuXHJcbi50b3BOZXdzIC5zbGlkZXJCYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi50b3BOZXdzIGlucHV0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udG9wTmV3cyAuc2xpZGVyQmFyIGxhYmVse1xyXG4gICAgbWFyZ2luOiA1cHggMTVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDU3LCA1OSwgNjQsIDAuMyk7XHJcbiAgICBib3JkZXI6IHNvbGlkIDVweCByZ2JhKDU3LCA1OSwgNjQsIDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5pbnB1dFtpZD1cInNsaWRlcjFcIl06Y2hlY2tlZCB+IC5zbGlkZXJNYWluIC5zbGlkZXJ7XHJcbiAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxufVxyXG5pbnB1dFtpZD1cInNsaWRlcjFcIl06Y2hlY2tlZCB+IC5zbGlkZXJCYXIgbGFiZWxbZm9yPVwic2xpZGVyMVwiXXtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk3LCAxOTQsIDE5LCAuNik7XHJcbn1cclxuXHJcbmlucHV0W2lkPVwic2xpZGVyMlwiXTpjaGVja2VkIH4gLnNsaWRlck1haW4gLnNsaWRlcntcclxuICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zNTBweCwgMHB4KTtcclxufVxyXG5pbnB1dFtpZD1cInNsaWRlcjJcIl06Y2hlY2tlZCB+IC5zbGlkZXJCYXIgbGFiZWxbZm9yPVwic2xpZGVyMlwiXXtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk3LCAxOTQsIDE5LCAuNik7XHJcbn1cclxuXHJcbmlucHV0W2lkPVwic2xpZGVyM1wiXTpjaGVja2VkIH4gLnNsaWRlck1haW4gLnNsaWRlcntcclxuICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MDBweCwgMHB4KTtcclxufVxyXG5pbnB1dFtpZD1cInNsaWRlcjNcIl06Y2hlY2tlZCB+IC5zbGlkZXJCYXIgbGFiZWxbZm9yPVwic2xpZGVyM1wiXXtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk3LCAxOTQsIDE5LCAuNik7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5uZXdze1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyB1bHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLnRvcE5ld3MgbGkgLm5ld3NJbWd7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzMzMzMzMztcclxuICAgICAgICB3aWR0aDogMzgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOTBweDtcclxuICAgIH1cclxuICAgIC50b3BOZXdzIGxpe1xyXG4gICAgICAgIHdpZHRoOiA0MjBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG4gICAgLnRvcE5ld3MgbGkgLm5ld3NUZXh0e1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIC5zbGlkZXJNYWlue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnRvcE5ld3MgLnNsaWRlckJhcntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBBbmltYWNpb24gKi9cclxuXHJcbkBrZXlmcmFtZXMgYXV0b1NsaWRle1xyXG4gICAgMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgICAzMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgICA0MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1MHB4LCAwKTtcclxuICAgIH1cclxuICAgIDcwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzUwcHgsIDApO1xyXG4gICAgfVxyXG4gICAgODAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MDBweCwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MDBweCwgMCk7XHJcbiAgICB9XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGFydGljbGVTdHlsZXMgPSBjc3NgXHJcbmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYXJ0aWNsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZhYTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDFweDtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIDNweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uYmFja3tcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG5oMXtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcbnNwYW57XHJcbiAgICBjb2xvcjogcmdiYSg4MCwgODAsIDgwLCAxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxucCB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5hcnRpY2xle1xyXG4gICAgICAgIHdpZHRoOiA5MDBweDtcclxuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCA1cHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjk5O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzAwMDAwMDk5O1xyXG4gICAgfVxyXG4gICAgLmJhY2t7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICB9XHJcbiAgICAuYmFjayBkaXZ7XHJcbiAgICAgICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmJvZHl7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjk5O1xyXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmAiXX0= */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\newStyles.js */");
newStyle.__hash = "3048185384";
const sliderStyle = new String(".topNews.jsx-2897110184{margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:70px 0px;justify-self:start;}.sliderMain.jsx-2897110184{width:350px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;justify-self:start;}.topNews.jsx-2897110184 ul.jsx-2897110184{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;margin:0;-webkit-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px);-webkit-transition:all 600ms ease;transition:all 600ms ease;-webkit-animation-name:autoSlide-jsx-2897110184;animation-name:autoSlide-jsx-2897110184;-webkit-animation-duration:20.5s;animation-duration:20.5s;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.topNews.jsx-2897110184 li.jsx-2897110184{position:relative;width:320px;height:250px;background:rgba(30,30,30,0.7);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);border-radius:5px;padding:15px;margin:10px 15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-transition:all 0.2s ease-out;transition:all 0.2s ease-out;}.topNews.jsx-2897110184 li.jsx-2897110184:hover{box-shadow:0px 0px 0 2px rgba(0,0,0,0.7);}.topNews.jsx-2897110184 li.jsx-2897110184 .newsImg.jsx-2897110184{background:#333333;width:283px;height:123px;margin:0;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.topNews.jsx-2897110184 li.jsx-2897110184 .newsTitle.jsx-2897110184 h1.jsx-2897110184{color:#ffffff;font-size:22px;font-weight:500;text-shadow:0px 0px 3px #000000;margin:10px 0px;}.topNews.jsx-2897110184 li.jsx-2897110184 .newsText.jsx-2897110184{min-height:130px;display:none;}.topNews.jsx-2897110184 li.jsx-2897110184 .newsText.jsx-2897110184 p.jsx-2897110184{color:#ffffff;font-size:18px;overflow:hidden;text-shadow:0px 0px 3px #000000;}.topNews.jsx-2897110184 li.jsx-2897110184 .newsOrigin.jsx-2897110184{position:absolute;bottom:0px;right:10px;width:283px;margin-top:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;font-size:11px;text-shadow:0px 0px 3px #000000;}.topNews.jsx-2897110184 li.jsx-2897110184 .newsOrigin.jsx-2897110184 .date.jsx-2897110184{color:rgb(197,194,194);}.topNews.jsx-2897110184 li.jsx-2897110184 .newsOrigin.jsx-2897110184 .origin.jsx-2897110184{margin-left:auto;color:rgb(197,194,19);}.topNews.jsx-2897110184 .sliderBar.jsx-2897110184{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.topNews.jsx-2897110184 input.jsx-2897110184{display:none;}.topNews.jsx-2897110184 .sliderBar.jsx-2897110184 label.jsx-2897110184{margin:5px 15px;display:block;width:30px;height:30px;background:rgba(57,59,64,0.3);border:solid 5px rgba(57,59,64,0.5);border-radius:10px;}input[id=\"slider1\"].jsx-2897110184:checked~.sliderMain.jsx-2897110184 .slider.jsx-2897110184{-webkit-animation:none;animation:none;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}input[id=\"slider1\"].jsx-2897110184:checked~.sliderBar.jsx-2897110184 label[for=\"slider1\"].jsx-2897110184{background:rgba(197,194,19,.6);}input[id=\"slider2\"].jsx-2897110184:checked~.sliderMain.jsx-2897110184 .slider.jsx-2897110184{-webkit-animation:none;animation:none;-webkit-transform:translate(-350px,0px);-ms-transform:translate(-350px,0px);transform:translate(-350px,0px);}input[id=\"slider2\"].jsx-2897110184:checked~.sliderBar.jsx-2897110184 label[for=\"slider2\"].jsx-2897110184{background:rgba(197,194,19,.6);}input[id=\"slider3\"].jsx-2897110184:checked~.sliderMain.jsx-2897110184 .slider.jsx-2897110184{-webkit-animation:none;animation:none;-webkit-transform:translate(-700px,0px);-ms-transform:translate(-700px,0px);transform:translate(-700px,0px);}input[id=\"slider3\"].jsx-2897110184:checked~.sliderBar.jsx-2897110184 label[for=\"slider3\"].jsx-2897110184{background:rgba(197,194,19,.6);}@media all and (min-width:768px){.news.jsx-2897110184{background-size:cover;}.topNews.jsx-2897110184 ul.jsx-2897110184{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:0px 0px;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);-webkit-animation:none;animation:none;}.topNews.jsx-2897110184 li.jsx-2897110184 .newsImg.jsx-2897110184{background:#333333;width:380px;height:190px;}.topNews.jsx-2897110184 li.jsx-2897110184{width:420px;height:450px;min-height:450px;margin:5px;}.topNews.jsx-2897110184 li.jsx-2897110184 .newsText.jsx-2897110184{min-height:130px;display:inline-block;}.sliderMain.jsx-2897110184{width:100%;}.topNews.jsx-2897110184 .sliderBar.jsx-2897110184{display:none;}}@-webkit-keyframes autoSlide-jsx-2897110184{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}30%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}40%{-webkit-transform:translate(-350px,0);-ms-transform:translate(-350px,0);transform:translate(-350px,0);}70%{-webkit-transform:translate(-350px,0);-ms-transform:translate(-350px,0);transform:translate(-350px,0);}80%{-webkit-transform:translate(-700px,0);-ms-transform:translate(-700px,0);transform:translate(-700px,0);}100%{-webkit-transform:translate(-700px,0);-ms-transform:translate(-700px,0);transform:translate(-700px,0);}}@keyframes autoSlide-jsx-2897110184{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}30%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}40%{-webkit-transform:translate(-350px,0);-ms-transform:translate(-350px,0);transform:translate(-350px,0);}70%{-webkit-transform:translate(-350px,0);-ms-transform:translate(-350px,0);transform:translate(-350px,0);}80%{-webkit-transform:translate(-700px,0);-ms-transform:translate(-700px,0);transform:translate(-700px,0);}100%{-webkit-transform:translate(-700px,0);-ms-transform:translate(-700px,0);transform:translate(-700px,0);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcbmV3U3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStOOEIsQUFHYyxBQVVHLEFBT00sQUFnQkEsQUFhMEIsQUFJekIsQUFPTCxBQU9HLEFBSUgsQUFNSSxBQVlPLEFBR1IsQUFLSixBQUtBLEFBR0csQUFVRCxBQUltQixBQUluQixBQUltQixBQUluQixBQUltQixBQUtSLEFBR0gsQUFNQSxBQUtQLEFBTUssQUFJTixBQUdFLEFBUWEsQUFHQSxBQUdLLEFBR0EsQUFHQSxBQUdBLFNBMUx0QixFQWlLYixDQXZKZ0IsQUE2SUMsQ0FwRHJCLEFBaUVJLENBM0dlLEFBV0EsRUFrQ0QsQ0F0Q0QsQUF5QlcsQUFvRUMsQ0E1SVosQUFnQkQsQUF5Q0QsQ0F4QkMsQUFnR0ksR0FUaEIsQ0FuREosRUFrRXlCLEdBN0lSLENBK0NHLEFBV0EsQUFNTCxDQXpDRSxBQStCakIsQUFzQ2UsQ0FwREUsQUFpRWpCLEFBUUEsQUFRQSxBQWVxQixPQW5DUyxBQVFPLEFBUUEsQUE4QmpDLENBcEVKLENBZGdCLENBOUJoQixBQTBEZ0IsQ0FpREcsQ0F0SGtCLENBaUJ4QixBQWdHVCxDQXpGZ0MsQUFXQSxPQU9oQixDQXhCRSxBQW9EZSxBQWlEakMsZUE1RWEsQ0E4RE8sSUF4R00sQ0EwRFAsR0FsQ0gsQUFXcEIsTUF0RXVCLEFBeUdvQixFQW1DVCxFQStCOUIsQUFHQSxLQTdKbUIsQ0EyQ3ZCLFNBakR1QixBQXNLbkIsQUFHQSxBQUdBLEFBR0EsaUJBaEZtQixFQTlGdkIsR0F5Q0EsQ0EyREEsUUE1RXNCLEtBdUV0QixJQTdCb0IsSUEwQ3BCLEFBUUEsS0EzRmlCLE9BMENFLE1BekNFLEdBd0RNLEtBK0NKLENBN0RhLEdBL0VULEtBc0NWLElBckJELFlBQ0gsUUE4RGIsQ0E1RGtDLElBeUg5Qiw2Q0F0R3NCLFdBdUQxQixTQTdGMEIsOEJBb0JJLDRCQW1CRyxvQkF0Q1osWUFvQlEsS0FuQk4sbUJBQ3ZCLFVBcUNBLHNEQWxCNkIsMERBQ0ssb0VBQ0Qsa0VBQ00sOEVBQ3ZDIiwiZmlsZSI6IkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcbmV3U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcbmNvbnN0IGNvbG9yID0ge1xyXG4gICAgcHJpbWFyeTogJyMzOTNiNDAnLFxyXG4gICAgc2Vjb25kYXJ5OiAnIzkzOTMxMycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZXdTZWNjdGlvbiA9IGNzc2BcclxuICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9pbWFnZXMvbmV3c0JhY2tncm91bmQuanBnXCIpIG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwJSB0b3A7XHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5uZXd7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDY2cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuICAgIFxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgbmV3U3R5bGUgPSBjc3NgXHJcbmg1e1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMwcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxufVxyXG4ubmV3cyBpbnB1dHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGxhYmVse1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAxNTVweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NywgNTksIDY0LCAwLjIpO1xyXG4gICAgY29sb3I6ICMzOTNiNDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgMHMgZWFzZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBsYWJlbDpob3ZlcntcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7ICAgXHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGlucHV0W2lkPVwiY2F0ZWdvcnkxXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJjYXRlZ29yeTFcIl17XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwO1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBpbnB1dFtpZD1cImNhdGVnb3J5MlwiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVwiY2F0ZWdvcnkyXCJde1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgaW5wdXRbaWQ9XCJjYXRlZ29yeTNcIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cImNhdGVnb3J5M1wiXXtcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGlucHV0W2lkPVwiY2F0ZWdvcnk0XCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJjYXRlZ29yeTRcIl17XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwO1xyXG59XHJcblxyXG4ubmV3c0xpc3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiB0b3A7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG59XHJcbi5uZXdzTGlzdCB1bHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLm5ld3tcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuLm5ldzpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxufVxyXG4ubmV3IGF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tb3Jle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5uZXcgLmltZyB7XHJcbiAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCAzMCwgMzAsIDAuNyk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLm5ldyAuY29udGVudHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHRvcDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG5cclxufVxyXG5cclxuLm5ldyAuZGF0YXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm90dG9tOiAxNnB4O1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICBjb2xvcjogcmdiYSg4MCwgODAsIDgwLCAxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxufVxyXG4ubmV3IC5zZWN0aW9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUycHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm5ldyBoM3tcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5uZXcgcHtcclxuICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzdkN2Q3ZDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5uZXdzTGlzdHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLm5ld3NMaXN0IHVse1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAubmV3e1xyXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEyODBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxNzBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIH1cclxuICAgLm1vcmV7XHJcbiAgICAgICAgd2lkdGg6IDEyODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubmV3IC5pbWcge1xyXG4gICAgICAgIHdpZHRoOiAyNjVweDtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDMwLCAzMCwgMC43KTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG4gICAgLm5ldyAuY29udGVudHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjg1cHgpO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5uZXcgaDN7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbiAgICAubmV3IHB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICM3ZDdkN2Q7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAubmV3IC5kYXRhe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZXJTdHlsZSA9IGNzc2BcclxuLnRvcE5ld3N7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDcwcHggMHB4O1xyXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxufVxyXG5cclxuLnNsaWRlck1haW57XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbn1cclxuXHJcbi50b3BOZXdzIHVse1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDYwMG1zIGVhc2U7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYXV0b1NsaWRlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMC41cztcclxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbi50b3BOZXdzIGxpe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzAsIDMwLCAzMCwgMC43KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxufVxyXG4udG9wTmV3cyBsaTpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMCAycHggcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG59XHJcblxyXG4udG9wTmV3cyBsaSAubmV3c0ltZ3tcclxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICB3aWR0aDogMjgzcHg7XHJcbiAgICBoZWlnaHQ6IDEyM3B4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzVGl0bGUgaDF7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggIzAwMDAwMDtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NUZXh0e1xyXG4gICAgbWluLWhlaWdodDogMTMwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzVGV4dCBwe1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4ICMwMDAwMDA7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NPcmlnaW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDI4M3B4O1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4ICMwMDAwMDA7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NPcmlnaW4gLmRhdGV7XHJcbiAgICBcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5NCk7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NPcmlnaW4gLm9yaWdpbntcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG59XHJcblxyXG4udG9wTmV3cyAuc2xpZGVyQmFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udG9wTmV3cyBpbnB1dHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRvcE5ld3MgLnNsaWRlckJhciBsYWJlbHtcclxuICAgIG1hcmdpbjogNXB4IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg1NywgNTksIDY0LCAwLjMpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCA1cHggcmdiYSg1NywgNTksIDY0LCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW5wdXRbaWQ9XCJzbGlkZXIxXCJdOmNoZWNrZWQgfiAuc2xpZGVyTWFpbiAuc2xpZGVye1xyXG4gICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbn1cclxuaW5wdXRbaWQ9XCJzbGlkZXIxXCJdOmNoZWNrZWQgfiAuc2xpZGVyQmFyIGxhYmVsW2Zvcj1cInNsaWRlcjFcIl17XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NywgMTk0LCAxOSwgLjYpO1xyXG59XHJcblxyXG5pbnB1dFtpZD1cInNsaWRlcjJcIl06Y2hlY2tlZCB+IC5zbGlkZXJNYWluIC5zbGlkZXJ7XHJcbiAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzUwcHgsIDBweCk7XHJcbn1cclxuaW5wdXRbaWQ9XCJzbGlkZXIyXCJdOmNoZWNrZWQgfiAuc2xpZGVyQmFyIGxhYmVsW2Zvcj1cInNsaWRlcjJcIl17XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NywgMTk0LCAxOSwgLjYpO1xyXG59XHJcblxyXG5pbnB1dFtpZD1cInNsaWRlcjNcIl06Y2hlY2tlZCB+IC5zbGlkZXJNYWluIC5zbGlkZXJ7XHJcbiAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAwcHgsIDBweCk7XHJcbn1cclxuaW5wdXRbaWQ9XCJzbGlkZXIzXCJdOmNoZWNrZWQgfiAuc2xpZGVyQmFyIGxhYmVsW2Zvcj1cInNsaWRlcjNcIl17XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NywgMTk0LCAxOSwgLjYpO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAubmV3c3tcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgLnRvcE5ld3MgdWx7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIC50b3BOZXdzIGxpIC5uZXdzSW1ne1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICAgICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyBsaXtcclxuICAgICAgICB3aWR0aDogNDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0NTBweDtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICAgIC50b3BOZXdzIGxpIC5uZXdzVGV4dHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMzBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVyTWFpbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC50b3BOZXdzIC5zbGlkZXJCYXJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLyogQW5pbWFjaW9uICovXHJcblxyXG5Aa2V5ZnJhbWVzIGF1dG9TbGlkZXtcclxuICAgIDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgfVxyXG4gICAgMzAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgfVxyXG4gICAgNDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zNTBweCwgMCk7XHJcbiAgICB9XHJcbiAgICA3MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1MHB4LCAwKTtcclxuICAgIH1cclxuICAgIDgwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAwcHgsIDApO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAwcHgsIDApO1xyXG4gICAgfVxyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBhcnRpY2xlU3R5bGVzID0gY3NzYFxyXG5kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmFydGljbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmYWE7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMzAxcHg7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAzcHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmJhY2t7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuaDF7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG5zcGFue1xyXG4gICAgY29sb3I6IHJnYmEoODAsIDgwLCA4MCwgMSk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbnAge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAuYXJ0aWNsZXtcclxuICAgICAgICB3aWR0aDogOTAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgNXB4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5OTtcclxuICAgICAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMDAwMDA5OTtcclxuICAgIH1cclxuICAgIC5iYWNre1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgfVxyXG4gICAgLmJhY2sgZGl2e1xyXG4gICAgICAgIHdpZHRoOiA5MDBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIH1cclxuICAgIC5ib2R5e1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5OTtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5gIl19 */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\newStyles.js */");
sliderStyle.__hash = "2897110184";
const articleStyles = new String("div.jsx-3983598635{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.article.jsx-3983598635{background-color:#ffffffaa;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);margin:0px 0px;padding:0px 20px;width:100%;min-height:301px;border-top:solid 3px rgb(197,194,19);border-radius:5px;}.back.jsx-3983598635{background:none;-webkit-backdrop-filter:none;backdrop-filter:none;height:30px;color:rgb(0,0,0);font-weight:500;font-size:19px;margin:5px 0px;}h1.jsx-3983598635{height:30px;color:rgb(0,0,0);font-weight:500;font-size:19px;}span.jsx-3983598635{color:rgba(80,80,80,1);font-weight:500;font-size:10px;}p.jsx-3983598635{color:#000000;font-weight:400;}@media all and (min-width:768px){.article.jsx-3983598635{width:900px;border-top:solid 5px rgb(197,194,19);margin:auto;margin-top:10px;background-color:#ffffff99;border-top:0;box-shadow:0px 0px 5px #00000099;}.back.jsx-3983598635{width:100vw;height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#ffffff;margin:0px;margin-top:40px;padding:0px;box-shadow:0px 0px 10px #000000;border-bottom:solid 3px rgb(197,194,19);}.back.jsx-3983598635 div.jsx-3983598635{width:900px;margin:20px auto;}.body.jsx-3983598635{width:100vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#ffffff99;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);padding-bottom:210px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9ncmFtYWNpb25cXERlc2Fycm9sbG9XZWJcXHdlYi1jb3NtZXJlbGF0YW1cXGNvc21lcmUtbGF0YW1cXHN0eWxlc1xcbmV3U3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlhZ0MsQUFHa0IsQUFLYyxBQVVYLEFBU0osQUFNYyxBQUtaLEFBTUUsQUFTQSxBQWFBLEFBSUEsWUExQ0csQUFpQndCLEFBUzNCLEFBYUssQUFJSixFQWhDRCxFQXBCSyxPQWVMLENBcUJDLEdBOUNVLEVBb0JYLEFBdUNoQixDQTVCSixTQUxtQixNQUxBLElBZ0JDLEtBVnBCLE1BTEEsQ0FnQndCLEtBM0JSLFFBaEJVLEdBNENTLENBM0JaLFFBbURRLEdBOURaLE1BWUMsR0FrQ1csTUE3Q1YsQUFzQ0EsT0ExQkYsTUEyQnNCLElBdEMxQixLQVlJLE1BWEUsU0FZckIsUUFYMkMsQ0FxQ3ZDLEVBOUNKLGlDQW9FbUMsQ0ExRGIsV0EwQ0ssT0F6QzNCLFFBMERtQyw4REFDTixnQkFqQkksS0FrQjdCLG9CQWpCZSxXQUNLLGdCQUNKLFlBQ29CLGdDQUNVLHdDQUM5QyIsImZpbGUiOiJEOlxcUHJvZ3JhbWFjaW9uXFxEZXNhcnJvbGxvV2ViXFx3ZWItY29zbWVyZWxhdGFtXFxjb3NtZXJlLWxhdGFtXFxzdHlsZXNcXG5ld1N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXHJcblxyXG5jb25zdCBjb2xvciA9IHtcclxuICAgIHByaW1hcnk6ICcjMzkzYjQwJyxcclxuICAgIHNlY29uZGFyeTogJyM5MzkzMTMnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmV3U2VjY3Rpb24gPSBjc3NgXHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvaW1hZ2VzL25ld3NCYWNrZ3JvdW5kLmpwZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMCUgdG9wO1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAubmV3e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2NnB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiAgICBcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld1N0eWxlID0gY3NzYFxyXG5oNXtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuLm5ld3MgaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBsYWJlbHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1pbi13aWR0aDogMTU1cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTcsIDU5LCA2NCwgMC4yKTtcclxuICAgIGNvbG9yOiAjMzkzYjQwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIDBzIGVhc2U7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgbGFiZWw6aG92ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwOyAgIFxyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBpbnB1dFtpZD1cImNhdGVnb3J5MVwiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVwiY2F0ZWdvcnkxXCJde1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgaW5wdXRbaWQ9XCJjYXRlZ29yeTJcIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cImNhdGVnb3J5MlwiXXtcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGlucHV0W2lkPVwiY2F0ZWdvcnkzXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJjYXRlZ29yeTNcIl17XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwO1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBpbnB1dFtpZD1cImNhdGVnb3J5NFwiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVwiY2F0ZWdvcnk0XCJde1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxufVxyXG5cclxuLm5ld3NMaXN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogdG9wO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG4ubmV3c0xpc3QgdWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5uZXd7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG59XHJcbi5uZXc6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbn1cclxuLm5ldyBhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubW9yZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubmV3IC5pbWcge1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMzAsIDMwLCAwLjcpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi5uZXcgLmNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiB0b3A7XHJcbiAgICBtYXJnaW46IDBweDtcclxuXHJcbn1cclxuXHJcbi5uZXcgLmRhdGF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvdHRvbTogMTZweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgY29sb3I6IHJnYmEoODAsIDgwLCA4MCwgMSk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbn1cclxuLm5ldyAuc2VjdGlvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA1MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5uZXcgaDN7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4ubmV3IHB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM3ZDdkN2Q7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAubmV3c0xpc3R7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDBweDtcclxuICAgIH1cclxuICAgIC5uZXdzTGlzdCB1bHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLm5ld3tcclxuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMjgwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTcwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICB9XHJcbiAgIC5tb3Jle1xyXG4gICAgICAgIHdpZHRoOiAxMjgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLm5ldyAuaW1nIHtcclxuICAgICAgICB3aWR0aDogMjY1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCAzMCwgMzAsIDAuNyk7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC5uZXcgLmNvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4NXB4KTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAubmV3IGgze1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgLm5ldyBwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLm5ldyAuZGF0YXtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVyU3R5bGUgPSBjc3NgXHJcbi50b3BOZXdze1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiA3MHB4IDBweDtcclxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbn1cclxuXHJcbi5zbGlkZXJNYWlue1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG59XHJcblxyXG4udG9wTmV3cyB1bHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcyBlYXNlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGF1dG9TbGlkZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMjAuNXM7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4udG9wTmV3cyBsaXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMwLCAzMCwgMzAsIDAuNyk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuLnRvcE5ld3MgbGk6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDAgMnB4IHJnYmEoMCwgMCwgMCwgMC43KTtcclxufVxyXG5cclxuLnRvcE5ld3MgbGkgLm5ld3NJbWd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gICAgd2lkdGg6IDI4M3B4O1xyXG4gICAgaGVpZ2h0OiAxMjNweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c1RpdGxlIGgxe1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4ICMwMDAwMDA7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzVGV4dHtcclxuICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c1RleHQgcHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCAjMDAwMDAwO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzT3JpZ2lue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAyODNweDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCAjMDAwMDAwO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzT3JpZ2luIC5kYXRle1xyXG4gICAgXHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOTQpO1xyXG59XHJcbi50b3BOZXdzIGxpIC5uZXdzT3JpZ2luIC5vcmlnaW57XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxufVxyXG5cclxuLnRvcE5ld3MgLnNsaWRlckJhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRvcE5ld3MgaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50b3BOZXdzIC5zbGlkZXJCYXIgbGFiZWx7XHJcbiAgICBtYXJnaW46IDVweCAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTcsIDU5LCA2NCwgMC4zKTtcclxuICAgIGJvcmRlcjogc29saWQgNXB4IHJnYmEoNTcsIDU5LCA2NCwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0W2lkPVwic2xpZGVyMVwiXTpjaGVja2VkIH4gLnNsaWRlck1haW4gLnNsaWRlcntcclxuICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG59XHJcbmlucHV0W2lkPVwic2xpZGVyMVwiXTpjaGVja2VkIH4gLnNsaWRlckJhciBsYWJlbFtmb3I9XCJzbGlkZXIxXCJde1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTcsIDE5NCwgMTksIC42KTtcclxufVxyXG5cclxuaW5wdXRbaWQ9XCJzbGlkZXIyXCJdOmNoZWNrZWQgfiAuc2xpZGVyTWFpbiAuc2xpZGVye1xyXG4gICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1MHB4LCAwcHgpO1xyXG59XHJcbmlucHV0W2lkPVwic2xpZGVyMlwiXTpjaGVja2VkIH4gLnNsaWRlckJhciBsYWJlbFtmb3I9XCJzbGlkZXIyXCJde1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTcsIDE5NCwgMTksIC42KTtcclxufVxyXG5cclxuaW5wdXRbaWQ9XCJzbGlkZXIzXCJdOmNoZWNrZWQgfiAuc2xpZGVyTWFpbiAuc2xpZGVye1xyXG4gICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwMHB4LCAwcHgpO1xyXG59XHJcbmlucHV0W2lkPVwic2xpZGVyM1wiXTpjaGVja2VkIH4gLnNsaWRlckJhciBsYWJlbFtmb3I9XCJzbGlkZXIzXCJde1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTcsIDE5NCwgMTksIC42KTtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLm5ld3N7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuICAgIC50b3BOZXdzIHVse1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyBsaSAubmV3c0ltZ3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gICAgICAgIHdpZHRoOiAzODBweDtcclxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgfVxyXG4gICAgLnRvcE5ld3MgbGl7XHJcbiAgICAgICAgd2lkdGg6IDQyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyBsaSAubmV3c1RleHR7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnNsaWRlck1haW57XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyAuc2xpZGVyQmFye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEFuaW1hY2lvbiAqL1xyXG5cclxuQGtleWZyYW1lcyBhdXRvU2xpZGV7XHJcbiAgICAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIH1cclxuICAgIDMwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIH1cclxuICAgIDQwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzUwcHgsIDApO1xyXG4gICAgfVxyXG4gICAgNzAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zNTBweCwgMCk7XHJcbiAgICB9XHJcbiAgICA4MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwMHB4LCAwKTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwMHB4LCAwKTtcclxuICAgIH1cclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgYXJ0aWNsZVN0eWxlcyA9IGNzc2BcclxuZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5hcnRpY2xle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmFhO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMXB4O1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgM3B4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5iYWNre1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG59XHJcbmgxe1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuc3BhbntcclxuICAgIGNvbG9yOiByZ2JhKDgwLCA4MCwgODAsIDEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5wIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLmFydGljbGV7XHJcbiAgICAgICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDVweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOTk7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjMDAwMDAwOTk7XHJcbiAgICB9XHJcbiAgICAuYmFja3tcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIH1cclxuICAgIC5iYWNrIGRpdntcclxuICAgICAgICB3aWR0aDogOTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYm9keXtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOTk7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuYCJdfQ== */\n/*@ sourceURL=D:\\\\Programacion\\\\DesarrolloWeb\\\\web-cosmerelatam\\\\cosmere-latam\\\\styles\\\\newStyles.js */");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29jaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dvVG9wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9naW4vbG9naW5Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ2luL3VzZXJQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uZXdzL25ld3NMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmV3cy9zbGlkZXJOZXdzLmpzIiwid2VicGFjazovLy8uL2ZpcmViYXNlL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9uZXdzLmpzeCIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvZ2xvYmFsU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9tYWluU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9uZXdTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiU29jaWFsSXRlbXMiLCJzb2NpYWwiLCJ1cmwiLCJjTmFtZSIsImNJY29uIiwiRm9vdGVyIiwicHJvcHMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJHb1RvcCIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaGFuZGxlQ2xpY2siLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsb2dpblBvcFVwIiwiZGlzcGxheSIsInNob3dNZSIsInRvZ2dsZSIsImdvb2dsZSIsImxvZ3V0UG9wVXAiLCJoYW5kbGVMb2dPdXQiLCJsb2dPdXQiLCJNYWluQ29udGVpbmVyIiwiY2hpbGRyZW4iLCJzZXRTcG90bGlnaHQiLCJzcG90IiwibmV3TG9jIiwic3BsaXQiLCJOYXZiYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaG93TG9naW4iLCJzZXRTaG93TG9naW4iLCJ1c2VTdGF0ZSIsInRvZ2dsZUxvZ2luIiwibG9naW4iLCJzZXRMb2dpbiIsImhhbmRsZUNsaWNrRyIsImxvZ2luV2l0aEdvb2dsZSIsInRoZW4iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwicGF0aG5hbWUiLCJ1c2VybmFtZSIsImF2YXRhciIsIm5ld0xpc3QiLCJMYWJlbCIsImlzTG9hZCIsInJlc3VsdHMiLCJyZXN1bHQiLCJpZCIsImJhbm5lciIsInRpdGxlIiwic3ViVGl0bGUiLCJkYXRlIiwic2VjdGlvbiIsIm1vcmUiLCJTbGlkZXJOZXdzIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXBwIiwiZGJDb24iLCJmaXJlc3RvcmUiLCJtYXBVc2VyRm9ybWF0IiwicGhvdG9VUkwiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiR29vZ2xlUHJvdmlkZXIiLCJhdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aFBvcHVwIiwib25DaGFuZ2UiLCJub3JtYWxpemVkVXNlciIsInNpZ25PdXQiLCJmZXRjaE5ld3NMaXN0IiwicGFnZSIsImxvZ2ljIiwiY29sbGVjdGlvbiIsImxpbWl0Iiwib3JkZXJCeSIsImdldCIsInNuYXBzaG90IiwiZG9jcyIsImRvYyIsImRhdGEiLCJpbnRsIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0Iiwibm9ybWFsaXplZERhdGUiLCJEYXRlIiwic2Vjb25kcyIsInRvU3RyaW5nIiwic3BsaXREYXRlIiwid2hlcmUiLCJmZXRjaE5ldyIsImFkZE5ld3MiLCJ1c2VySWQiLCJ0aXRlbCIsImNvbnRlbnQiLCJmaXJlc3RvdGUiLCJUaW1lc3RhcHMiLCJmcm9tRGF0ZSIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImhyZWYiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInZhbHVlIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJOZXdzIiwibmV3c0xpc3QiLCJzZXROZXdzIiwic2V0U2VjdGlvbiIsInNldFBhZ2UiLCJzZXRSZWxvYWQiLCJoYW5kbGVDaGFuZ2UiLCJoYWRsZU1vcmUiLCJzbGlkZXIiLCJuZXdTdHlsZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbG9yIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImdsb2JhbFN0eWxlcyIsImVycm9yU3R5bGVzIiwiaWNvbnMiLCJuYXZiYXJTdHlsZSIsImZvb3RlclN0eWxlIiwicG9wVXAiLCJwb3BVcFNjcm9sbCIsIm5ld1NlY2N0aW9uIiwic2xpZGVyU3R5bGUiLCJhcnRpY2xlU3R5bGVzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFB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QUE7QUFBQTtBQUFBLE1BQU1ULEtBQUssR0FBRztBQUNWQyxTQUFPLEVBQUUsU0FEQztBQUVWQyxXQUFTLEVBQUU7QUFGRCxDQUFkO0FBS08sTUFBTVEsV0FBVyx5MmZBQWpCOztBQW1CQSxNQUFNWixRQUFRLHcvckJBQWQ7O0FBcU1BLE1BQU1hLFdBQVcsK3B1QkFBakI7O0FBa01BLE1BQU1DLGFBQWEseXNqQkFBbkI7Ozs7Ozs7Ozs7OztBQ2phUCxxQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9uZXdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9uZXdzLmpzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiZXhwb3J0IGNvbnN0IFNvY2lhbEl0ZW1zID0gW1xyXG4gICAge1xyXG4gICAgICAgIHNvY2lhbDonVHdpdHRlcicsXHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9Db3NtZXJlTGF0YW0nLFxyXG4gICAgICAgIGNOYW1lOiAndHcnLFxyXG4gICAgICAgIGNJY29uOiAndHdfaWNvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc29jaWFsOidGYWNlYm9vaycsXHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2Nvc21lcmVsYXRhbScsXHJcbiAgICAgICAgY05hbWU6ICdmYicsXHJcbiAgICAgICAgY0ljb246ICdmYl9pY29uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb2NpYWw6J0luc3RhZ3JhbScsXHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9jb3NtZXJlbGF0YW0vJyxcclxuICAgICAgICBjTmFtZTogJ2lnJyxcclxuICAgICAgICBjSWNvbjogJ2lnX2ljb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvY2lhbDonWW91dHViZScsXHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ2puWEh0SEkwTDRyZnZUV2NjTHVlYlEnLFxyXG4gICAgICAgIGNOYW1lOiAneXQnLFxyXG4gICAgICAgIGNJY29uOiAneXRfaWNvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc29jaWFsOidEaXNjb3JkJyxcclxuICAgICAgICB1cmw6ICcjJyxcclxuICAgICAgICBjTmFtZTogJ2RjJyxcclxuICAgICAgICBjSWNvbjogJ2RjX2ljb24nXHJcbiAgICB9XHJcbl0iLCJpbXBvcnQgeyBTb2NpYWxJdGVtcyB9IGZyb20gXCIuL1NvY2lhbHNcIjtcclxuLy9pbXBvcnQgJy4vLi4vc3R5bGVzL2Zvb3Rlci5jc3MnO1xyXG5pbXBvcnQgeyBmb290ZXJTdHlsZSB9IGZyb20gJy4uL3N0eWxlcy9tYWluU3R5bGVzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3Rlcihwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiRm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzb2NpYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1NvY2lhbEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0udXJsfSBjbGFzc05hbWU9e2l0ZW0uY05hbWV9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXRlbS5jSWNvbn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJsaW5lXzFcIj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPsKpMjAyMCBkaXNlw7FhZG8geSBwcm9ncmFtYWRvIHBvciBOZW9kb29tIFhhcmRheC48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+eyBmb290ZXJTdHlsZSB9PC9zdHlsZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBpY29ucyB9IGZyb20gJy4uL3N0eWxlcy9nbG9iYWxTdHlsZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHb1RvcChwcm9wcyl7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMDApe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29Ub3BDb250ZWluZXInKVxyXG4gICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29Ub3BDb250ZWluZXInKVxyXG4gICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcclxuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb1RvcENvbnRlaW5lciBidG4tYmxhY2tcIiBvbkNsaWNrPXsgaGFuZGxlQ2xpY2sgfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93c1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PnsgaWNvbnMgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5nb1RvcENvbnRlaW5lcntcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBhbGwgMSBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVPdXQgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYXJyb3dze1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYXJyb3dzOjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAuYXJyb3dzOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTk5OTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvd3M6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA3cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYXJyb3dzOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogN3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93czo6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvd3M6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA3cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2hvd3tcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAuc2hvd3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03MHB4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW57XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge29wYWNpdHk6IDA7fVxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge29wYWNpdHk6IDE7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0e1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtvcGFjaXR5OiAxO31cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtvcGFjaXR5OiAwO31cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQge3BvcFVwfSBmcm9tICcuLi8uLi9zdHlsZXMvbWFpblN0eWxlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2luUG9wVXAocHJvcHMpe1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwb3BVcFwiIHN0eWxlPXt7ZGlzcGxheTogcHJvcHMuc2hvd01lP1wiZmxleFwiOlwibm9uZVwifX0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcFVwLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWV4aXRcIiBvbkNsaWNrPXsgcHJvcHMudG9nZ2xlIH0+KzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWFnZXMvbG9nby5wbmcnIC8+XHJcbiAgICAgICAgICAgICAgICA8aDE+SW5pY2lvIGRlIHNlc2lvbi48L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg1PlNlbGVjY2lvbmUgZWwgbWV0b2RvIHBhcmEgaW5pY2lhciBzZXNpb24uPC9oNT5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWJsYWNrIGJ0bi1sb2dpblwiIG9uQ2xpY2s9e3Byb3BzLmdvb2dsZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29ucy91c2VyLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5JbmljaWFyIHNlY2Npb24gY29uIEdtYWlsLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+eyBwb3BVcCB9PC9zdHlsZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBsb2dPdXQgfSBmcm9tICcuLi8uLi9maXJlYmFzZS9jbGllbnQnXHJcbmltcG9ydCB7cG9wVXBTY3JvbGx9IGZyb20gJy4uLy4uL3N0eWxlcy9tYWluU3R5bGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9ndXRQb3BVcChwcm9wcyl7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9nT3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxvZ091dCgpO1xyXG4gICAgICAgIHByb3BzLnRvZ2dsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwb3BVcFwiIHN0eWxlPXsge2Rpc3BsYXk6IHByb3BzLnNob3dNZT9cImZsZXhcIjpcIm5vbmVcIn0gfSBvbkNsaWNrPXsgcHJvcHMudG9nZ2xlIH0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcFVwLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wdGlvblwiPkN1ZW50YTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiB8IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wdGlvblwiPlNoYWRlc21hcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiB8IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wdGlvblwiIG9uQ2xpY2s9eyBoYW5kbGVMb2dPdXQgfT5EZXNjb25lY3Rhcjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PnsgcG9wVXBTY3JvbGwgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJ1xyXG5cclxuXHJcbmltcG9ydCB7IGdsb2JhbFN0eWxlcyB9IGZyb20gJy4vLi4vc3R5bGVzL2dsb2JhbFN0eWxlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5Db250ZWluZXIocHJvcHMpe1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cImNvbnRlbnQtdHlwZVwiIGNvbnRlbnQ9XCJjaGFyc2V0PVVURi04XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Db3NtZXJlLWxhdGFtPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiV2ViIGRlbCBmYW5kb20gZGUgQnJhbmRvbiBTYW5kZXJzb24gZW4gbGF0aW5vYW1lcmljYS5cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJLZXl3b3Jkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImNvc21lcmU7IGNvc21lcmUgbGF0YW07IGxhdGFtOyBsYXRpbm9hbWVyaWNhOyBmYW5kb207IGJyYW5kb247IHNhbmRlcnNvbjsgZmFuZGVyc29uOyBtaXN0Ym90bjsgbmFjaWRvcyBkZSBsYSBicnVtYTsgc3Rvcm1saWdodCBhcmNoaXZlOyBhcmNoaXZvIGRlIGxhcyB0b3JtZW50YXM7IHdhcmJyZWtlcjsgZWwgYWxpZW50byBkZSBsb3MgZGlvY2VzOyBqdXJhbWVudGFkYVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9tYW5pZmVzdC5qc29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMzE3RUZCXCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCIvaW1hZ2VzL2ljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TmF2YmFyPjwvTmF2YmFyPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57IGdsb2JhbFN0eWxlcyB9PC9zdHlsZT5cclxuICAgICAgICA8L21haW4+XHJcblxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGxvZ2luV2l0aEdvb2dsZSwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSAnLi4vZmlyZWJhc2UvY2xpZW50J1xyXG5cclxuLy9pbXBvcnQgJy4vLi4vc3R5bGVzL25hdmJhci5jc3MnO1xyXG5pbXBvcnQgeyBuYXZiYXJTdHlsZSB9IGZyb20gJy4vLi4vc3R5bGVzL21haW5TdHlsZXMnO1xyXG5pbXBvcnQgTG9naW5Qb3BVcCBmcm9tICcuL2xvZ2luL2xvZ2luUG9wdXAnO1xyXG5pbXBvcnQgVXNlclBvcFVwIGZyb20gJy4vbG9naW4vdXNlclBvcHVwJztcclxuXHJcbmNvbnN0IHNldFNwb3RsaWdodCA9ICh1cmwpID0+e1xyXG4gICAgdmFyIHNwb3QgPSAnYmFyTGluZSBzZXQtLSdcclxuICAgIHZhciBuZXdMb2MgPSB1cmwuc3BsaXQoXCIvXCIpXHJcbiAgICBzcG90ICs9IG5ld0xvY1sxXVxyXG4gICAgcmV0dXJuKHNwb3QpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIocHJvcHMpe1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBbc2hvd0xvZ2luLCBzZXRTaG93TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdG9nZ2xlTG9naW4gPSAoKSA9PntcclxuICAgICAgICBzZXRTaG93TG9naW4oIXNob3dMb2dpbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrRyA9ICgpID0+e1xyXG4gICAgICAgIGxvZ2luV2l0aEdvb2dsZSgpLnRoZW4odXNlciA9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgICAgIHNldExvZ2luKHVzZXIpO1xyXG4gICAgICAgICAgICB0b2dnbGVMb2dpbigpO1xyXG4gICAgICAgIH0pLmNhdGNoKCBlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoc2V0TG9naW4pO1xyXG4gICAgfSwgW10gKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxvZ2luID09PSBudWxsID9cclxuICAgICAgICAgICAgICAgIDxMb2dpblBvcFVwIHNob3dNZT17IHNob3dMb2dpbiB9IHRvZ2dsZT17IHRvZ2dsZUxvZ2luIH0gZ29vZ2xlPXsgaGFuZGxlQ2xpY2tHIH0vPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8VXNlclBvcFVwIHNob3dNZT17IHNob3dMb2dpbiB9IHRvZ2dsZT17IHRvZ2dsZUxvZ2luIH0gLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJOYXZiYXJJdGVtc1wiPlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2X2xvZ29cIj48L3NwYW4+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwibWVudUJ0blwiIGlkPVwibWVudUJ0blwiLz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1lbnVJY29uXCIgaHRtbEZvcj1cIm1lbnVCdG5cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhcnNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rXCI+PExpbmsgaHJlZj1cIi9cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmtcIj48TGluayBocmVmPVwiL25ld3NcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+Tm90aWNpYXM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rXCI+PExpbmsgaHJlZj1cIi9hcnRpc3RzXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkFydGlzdGFzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlua1wiPjxMaW5rIGhyZWY9XCIvcG90Y2FzdFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Qb2RjYXN0czwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmtcIj48TGluayBocmVmPVwiL2Nvc21lcmVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+Q29zbWVyZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c2V0U3BvdGxpZ2h0KHJvdXRlci5wYXRobmFtZSl9IGlkPVwibGluZU5hdlwiPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxvZ2luID09PSBudWxsID9cclxuICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bl9sb2dpblwiIG9uQ2xpY2s9e3RvZ2dsZUxvZ2lufT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5JbmljaWFyIHNlY2nDs248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL3VzZXIucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bl9sb2dpbiBsb2dvdXRcIiBvbkNsaWNrPXt0b2dnbGVMb2dpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xvZ2luLnVzZXJuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9naW4uYXZhdGFyfSBjbGFzc05hbWU9XCJsb2dvdXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8c3R5bGUganN4PnsgbmF2YmFyU3R5bGUgfTwvc3R5bGU+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLk5hdmJhckl0ZW1zIHVsIGxpOm50aC1jaGlsZCgxKXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2V0LS1ob21lLCAuTmF2YmFySXRlbXMgdWwgbGk6bnRoLWNoaWxkKDEpOmhvdmVyIH4gLmJhckxpbmV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuTmF2YmFySXRlbXMgdWwgbGk6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZXQtLW5ld3MsIC5OYXZiYXJJdGVtcyB1bCBsaTpudGgtY2hpbGQoMik6aG92ZXIgfiAuYmFyTGluZXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMHB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuTmF2YmFySXRlbXMgdWwgbGk6bnRoLWNoaWxkKDMpe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZXQtLWFydGlzdHMsIC5OYXZiYXJJdGVtcyB1bCBsaTpudGgtY2hpbGQoMyk6aG92ZXIgfiAuYmFyTGluZXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwMHB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuTmF2YmFySXRlbXMgdWwgbGk6bnRoLWNoaWxkKDQpe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZXQtLXBvdGNhc3QsIC5OYXZiYXJJdGVtcyB1bCBsaTpudGgtY2hpbGQoNCk6aG92ZXIgfiAuYmFyTGluZXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcdFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAwcHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5OYXZiYXJJdGVtcyB1bCBsaTpudGgtY2hpbGQoNSl7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNldC0tY29zbWVyZW1lY3VtLCAuTmF2YmFySXRlbXMgdWwgbGk6bnRoLWNoaWxkKDUpOmhvdmVyIH4gLmJhckxpbmV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHRcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQwMHB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuLy9pbXBvcnQgJy4vLi4vLi4vc3R5bGVzL25ld3NMaXN0LmNzcyc7XHJcbmltcG9ydCB7IG5ld1N0eWxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL25ld1N0eWxlcydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdMaXN0KHByb3BzKXtcclxuICAgIC8vb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9uZXdzL1tpZF0nLCBgL25ld3MvJHtyZXN1bHQuaWR9YCl9XHJcbiAgICAvLzxMaW5rIGhyZWY9J25ld3MvW2lkXScgYXM9e2AvbmV3cy8ke3Jlc3VsdC5pZH1gfSBrZXk9e3Jlc3VsdC5pZH0+XHJcbiAgICAvL2h0dHBzOi8vcGJzLnR3aW1nLmNvbS9tZWRpYS9FbFlJS2Z5WFVBTVVKdmk/Zm9ybWF0PWpwZyZuYW1lPTkwMHg5MDBcclxuXHJcbiAgICB2YXIgTGFiZWwgPSAnJ1xyXG4gICAge3Byb3BzLmlzTG9hZCA/IExhYmVsID0gJ01hcycgOiAgTGFiZWwgPSAnQ2FyZ2FuZG8uLi4nfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld3NMaXN0Jz5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnJlc3VsdHMubWFwKHJlc3VsdD0+KFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmV3JyBrZXk9e3Jlc3VsdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPSduZXdzL1tpZF0nIGFzPXtgL25ld3MvJHtyZXN1bHQuaWR9YH0+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyByZXN1bHQuYmFubmVyIH0gY2xhc3NOYW1lPSdpbWcnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57IHJlc3VsdC50aXRsZSB9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+eyByZXN1bHQuc3ViVGl0bGUgfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0ZSc+eyByZXN1bHQuZGF0ZSB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbic+eyByZXN1bHQuc2VjdGlvbiB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnRuLWJsYWNrIG1vcmVcIiBvbkNsaWNrPXtwcm9wcy5tb3JlfT4geyBMYWJlbCB9IDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57IG5ld1N0eWxlIH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vaW1wb3J0ICcuLy4uLy4uL3N0eWxlcy9zaWRlTmV3cy5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBzbGlkZXJTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9uZXdTdHlsZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXJOZXdzKHByb3BzKXtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wTmV3c1wiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNsaWRlclwiIGlkPVwic2xpZGVyMVwiLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzbGlkZXJcIiBpZD1cInNsaWRlcjJcIi8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2xpZGVyXCIgaWQ9XCJzbGlkZXIzXCIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlck1haW5cIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMucmVzdWx0cy5tYXAocmVzdWx0PT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nbmV3cy9baWRdJyBhcz17YC9uZXdzLyR7cmVzdWx0LmlkfWB9IGtleT17cmVzdWx0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyByZXN1bHQuYmFubmVyIH0gY2xhc3NOYW1lPVwibmV3c0ltZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57IHJlc3VsdC50aXRsZSB9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnsgcmVzdWx0LnN1YlRpdGxlIH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c09yaWdpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj57IHJlc3VsdC5kYXRlIH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwib3JpZ2luXCI+eyByZXN1bHQuc2VjdGlvbiB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzbGlkZXJCYXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2xpZGVyMVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNsaWRlcjJcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzbGlkZXIzXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+eyBzbGlkZXJTdHlsZSB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICk7XHJcbn0iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5cclxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lCSFBBazR5X0FYRnpmdExHLXUwNktmV3dVNUk5QXl4UnNcIixcclxuICAgIGF1dGhEb21haW46IFwiY29zbWVyZS1sYXRhbS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vY29zbWVyZS1sYXRhbS5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcImNvc21lcmUtbGF0YW1cIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiY29zbWVyZS1sYXRhbS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDQ4MDk2OTUzNTAwXCIsXHJcbiAgICBhcHBJZDogXCIxOjQ0ODA5Njk1MzUwMDp3ZWI6NmIwOWI2MWUwNjQwZjEzZDI1Mzk1OVwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLVlQMjBLRVdZWE5cIlxyXG59O1xyXG5cclxuIWZpcmViYXNlLmFwcHMubGVuZ3RoID8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBmaXJlYmFzZS5hcHAoKTtcclxuXHJcbmNvbnN0IGRiQ29uID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcblxyXG4vL1NlY2Npb24gZGUgTG9naW5cclxuXHJcbmNvbnN0IG1hcFVzZXJGb3JtYXQgPSAodXNlcikgPT4ge1xyXG4gICAgY29uc3Qge3Bob3RvVVJMLCBkaXNwbGF5TmFtZSwgZW1haWx9ID0gdXNlcjtcclxuICAgIHJldHVybntcclxuICAgICAgICBhdmF0YXI6IHBob3RvVVJMLFxyXG4gICAgICAgIHVzZXJuYW1lOiBkaXNwbGF5TmFtZSxcclxuICAgICAgICBlbWFpbDogZW1haWxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEdvb2dsZSA9ICgpID0+e1xyXG4gICAgY29uc3QgR29vZ2xlUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKVxyXG4gICAgcmV0dXJuIGZpcmViYXNlXHJcbiAgICAgICAgLmF1dGgoKVxyXG4gICAgICAgIC5zaWduSW5XaXRoUG9wdXAoR29vZ2xlUHJvdmlkZXIpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgb25BdXRoU3RhdGVDaGFuZ2VkID0gKG9uQ2hhbmdlKSA9PiB7XHJcbiAgICByZXR1cm4gZmlyZWJhc2VcclxuICAgICAgICAuYXV0aCgpXHJcbiAgICAgICAgLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVzZXIgPSBcclxuICAgICAgICAgICAgdXNlciA/IG1hcFVzZXJGb3JtYXQodXNlcikgOiBudWxsO1xyXG4gICAgICAgICAgICBvbkNoYW5nZShub3JtYWxpemVkVXNlcik7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dPdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKTtcclxufVxyXG5cclxuXHJcbi8vZmV0Y2ggZGUgTm90aWNpYXNcclxuZXhwb3J0IGNvbnN0IGZldGNoTmV3c0xpc3QgPSAoc2VjdGlvbiwgcGFnZSkgPT57XHJcbiAgICB2YXIgbG9naWMgPSAnJ1xyXG4gICAgaWYgKHNlY3Rpb249PSdhbGwnKSB7XHJcbiAgICAgICAgcmV0dXJuIGRiQ29uXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKCduZXdzJylcclxuICAgICAgICAgICAgLmxpbWl0KHBhZ2UpXHJcbiAgICAgICAgICAgIC5vcmRlckJ5KFwiZGF0ZVwiLCBcImRlc2NcIilcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZG9jLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRlIH0gPSBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW50bCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlcy1FUycpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZERhdGUgPW5ldyBEYXRlKGRhdGUuc2Vjb25kcyAqIDEwMDApLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdERhdGUgPSBub3JtYWxpemVkRGF0ZS5zcGxpdChcIihcIilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4gZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA6IHNwbGl0RGF0ZVswXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gZGJDb25cclxuICAgICAgICAuY29sbGVjdGlvbignbmV3cycpXHJcbiAgICAgICAgLm9yZGVyQnkoXCJkYXRlXCIsIFwiZGVzY1wiKVxyXG4gICAgICAgIC53aGVyZSgnc2VjdGlvbicsIFwiPT1cIiwgc2VjdGlvbilcclxuICAgICAgICAubGltaXQocGFnZSlcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PntcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBkb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGRvYy5pZFxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBkYXRlIH0gPSBkYXRhXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnRsID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VzLUVTJylcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWREYXRlID0gbmV3IERhdGUoZGF0ZS5zZWNvbmRzICogMTAwMCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdERhdGUgPSBub3JtYWxpemVkRGF0ZS5zcGxpdChcIihcIilcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkLCBcclxuICAgICAgICAgICAgICAgICAgICAuLi4gZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlIDogc3BsaXREYXRlWzBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoTmV3ID0gKGlkKSA9PntcclxuICAgIHJldHVybiBkYkNvblxyXG4gICAgICAgIC5jb2xsZWN0aW9uKCduZXdzJylcclxuICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKHNuYXBzaG90ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9ICBzbmFwc2hvdC5kYXRhKClcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRlIH0gPSBkYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IGludGwgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZXMtRVMnKVxyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkRGF0ZSA9bmV3IERhdGUoZGF0ZS5zZWNvbmRzICogMTAwMCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uIGRhdGEsXHJcbiAgICAgICAgICAgICAgICBkYXRlIDogbm9ybWFsaXplZERhdGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkTmV3cyA9ICh1c2VySWQsIHRpdGVsLCBzdWJUaXRsZSwgYmFubmVyLCBjb250ZW50LCBzZWN0aW9uKSA9PntcclxuICAgIHJldHVybiBkYkNvbi5jb2xsZWN0aW9uKCduZXdzJykuYWRkKHtcclxuICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgdGl0ZWwsXHJcbiAgICAgICAgc3ViVGl0bGUsXHJcbiAgICAgICAgYmFubmVyLFxyXG4gICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgc2VjdGlvbixcclxuICAgICAgICBkYXRlIDogZmlyZWJhc2UuZmlyZXN0b3RlLlRpbWVzdGFwcy5mcm9tRGF0ZShuZXcgRGF0ZSgpKVxyXG4gICAgfSlcclxufSIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7ZmV0Y2hOZXdzTGlzdH0gZnJvbSAnLi8uLi9maXJlYmFzZS9jbGllbnQnXHJcbmltcG9ydCBNYWluQ29udGVpbmVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9tYWluJztcclxuaW1wb3J0IFNsaWRlck5ld3MgZnJvbSAnLi8uLi9jb21wb25lbnRzL25ld3Mvc2xpZGVyTmV3cyc7XHJcbmltcG9ydCBOZXdzTGlzdCBmcm9tICcuLy4uL2NvbXBvbmVudHMvbmV3cy9uZXdzTGlzdCc7XHJcbmltcG9ydCBHb1RvcCBmcm9tICcuLi9jb21wb25lbnRzL2dvVG9wJztcclxuXHJcbmltcG9ydCB7IG5ld1NlY2N0aW9uLCBuZXdTdHlsZSB9IGZyb20gJy4uL3N0eWxlcy9uZXdTdHlsZXMnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3MocHJvcHMpe1xyXG5cclxuICAgIC8vY29uc3QgW25ld3NTbGlkZXIsIHNldFNsaWRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbmV3c0xpc3QsIHNldE5ld3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtzZWN0aW9uLCBzZXRTZWN0aW9uXSA9IHVzZVN0YXRlKCdhbGwnKTtcclxuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDUpO1xyXG4gICAgY29uc3QgW3JlbG9hZCwgc2V0UmVsb2FkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoIGFzeW5jKCkgPT57XHJcbiAgICAgICAgc2V0UmVsb2FkKGZhbHNlKVxyXG4gICAgICAgIGF3YWl0IGZldGNoTmV3c0xpc3Qoc2VjdGlvbiwgcGFnZSlcclxuICAgICAgICAgICAgLnRoZW4oc2V0TmV3cylcclxuICAgICAgICBzZXRSZWxvYWQodHJ1ZSlcclxuICAgIH0sIFtzZWN0aW9uLCBwYWdlXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFNlY3Rpb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRQYWdlKDUpXHJcbiAgICAgICAgLy9mZXRjaERhdGEoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYWRsZU1vcmUgPSAoKSA9PntcclxuICAgICAgICBzZXRQYWdlKHBhZ2UgKyA1KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE1haW5Db250ZWluZXI+XHJcbiAgICAgICAgICAgIDxHb1RvcC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm5ld3NcIj5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXJOZXdzXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IHsgcHJvcHMuc2xpZGVyIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2F0ZWdvcnlcIiBpZD1cImNhdGVnb3J5MVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJhbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VjdGlvbiA9PT0gXCJhbGxcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2F0ZWdvcnlcIiBpZD1cImNhdGVnb3J5MlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJuZXdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlY3Rpb24gPT09IFwibmV3c1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjYXRlZ29yeVwiIGlkPVwiY2F0ZWdvcnkzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImV2ZW50XCIgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VjdGlvbiA9PT0gXCJldmVudFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjYXRlZ29yeVwiIGlkPVwiY2F0ZWdvcnk0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImFkZHNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlY3Rpb24gPT09IFwiYWRkc1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBodG1sRm9yPVwiY2F0ZWdvcnkxXCI+UmVjaWVudGVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBodG1sRm9yPVwiY2F0ZWdvcnkyXCI+Tm90aWNpYXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgIGh0bWxGb3I9XCJjYXRlZ29yeTNcIj5FdmVudG9zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBodG1sRm9yPVwiY2F0ZWdvcnk0XCI+QW51bmNpb3M8L2xhYmVsPiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDxOZXdzTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMgPSB7IG5ld3NMaXN0IH1cclxuICAgICAgICAgICAgICAgICAgICBtb3JlID0geyBoYWRsZU1vcmUgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZCA9IHsgcmVsb2FkIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzU3R5bGUgPSB7IG5ld1N0eWxlIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57IG5ld1NlY2N0aW9uIH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PnsgbmV3U3R5bGUgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9NYWluQ29udGVpbmVyPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KXtcclxuICAgIGNvbnN0IHNsaWRlciA9IGF3YWl0IGZldGNoTmV3c0xpc3QoJ2FsbCcsIDMpLnRoZW4oc25hcHNob3QgPT4ge3JldHVybiBzbmFwc2hvdH0pXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBzbGlkZXIgOiBzbGlkZXIgfSB9ICAgIFxyXG59IiwiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcbmNvbnN0IGNvbG9yID0ge1xyXG4gICAgcHJpbWFyeTogJyMzOTNiNDAnLFxyXG4gICAgc2Vjb25kYXJ5OiAnIzkzOTMxMycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZXMgPSBjc3MuZ2xvYmFsYFxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcclxuICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMCUgdG9wO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5idG4td2l0aGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgLjgpO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idG4td2l0aGU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJ0bi13aXRoZTphY3RpdmV7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uYnRuLXdpdGhlOmZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uYnRuLWJsYWNre1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwY2M7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uYnRuLWJsYWNrOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5iYnRuLWJsYWNrOmFjdGl2ZXtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idG4tYmxhY2s6Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuYFxyXG5leHBvcnQgY29uc3QgZXJyb3JTdHlsZXMgPSBjc3NgXHJcbi5ub257XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHVybCgvaW1hZ2VzL0NvbnN0ZWxhY2lvbmVzLW11bmRvcy1jb3NtZXJlLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLm5vbiBkaXZ7XHJcbiAgY29sb3I6IHJnYigxMjgsIDExNCwgNzkpO1xyXG4gIHRleHQtc2hhZG93OjBweCAwcHggM3B4ICMwMDAwMDA7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubm9uIGgye1xyXG4gIGZvbnQtc2l6ZTogNTZweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHZoO1xyXG59XHJcbi5ub24gcHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGljb25zID0gY3NzYFxyXG5cclxuYCIsImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXHJcblxyXG5leHBvcnQgY29uc3QgbmF2YmFyU3R5bGUgPSBjc3NgXHJcbi5OYXZiYXJJdGVtcyB7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYigwLCAwLCAwLCAxLjApIDAlICwgcmdiYSgwLCAwLCAwLCAwLjUpIDgwJSwgcmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpO1xyXG5cdGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRtYXJnaW46MHB4O1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogMTAwdnc7XHJcblx0ei1pbmRleDogMTA7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZfbG9nb3tcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogNzBweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWFnZXMvTG9nb0NMLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiA1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubmF2X2xpbmt7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogMDtcclxuXHR3aWR0aDogMCU7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdGNsZWFyOiBib3RoO1xyXG5cdGJvcmRlci10b3A6IDU1cHggc29saWQgIzExMTExMTtcclxuXHRiYWNrZ3JvdW5kOiAjMzMzMzMzO1x0XHJcblx0ei1pbmRleDogNTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4ubmF2X2xpbmsgLmxpbmt7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR6LWluZGV4OiA1O1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdHRyYW5zaXRpb246IGFsbCAuOHMgZWFzZS1pbjtcclxufVxyXG5cclxuLm5hdl9saW5rIC5saW5rOmhvdmVye1xyXG5cdGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0dGV4dC1zaGFkb3c6MHB4IDBweCAxMHB4ICMwMDAwMDA7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluO1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA4OGE5O1xyXG59XHJcblxyXG4ubGluayBhe1xyXG5cdG1pbi13aWR0aDogMzAwcHg7XHJcblx0cGFkZGluZzogMjBweCAyMHB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmJ0bi1sZ3tcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDA4OGE5O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdGNvbG9yOiAjMDA4OGE5O1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuLmJ0bi1sZzpob3ZlcntcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDA4OGE5O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRiYWNrZ3JvdW5kOiAjMDA4OGE5O1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJ0bi1sZzphY3RpdmV7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwODhhOTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idG4tbGc6Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLk5hdmJhckl0ZW1zIC5tZW51QnRue1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5OYXZiYXJJdGVtcyAubWVudUljb257XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwODhhOTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0cGFkZGluZzogMjBweCAxMnB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR6LWluZGV4OiAxMDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLk5hdmJhckl0ZW1zIC5tZW51SWNvbjpob3ZlcntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OGE5O1xyXG59XHJcblxyXG4ubWVudUljb24gLmJhcnN7XHJcblx0YmFja2dyb3VuZDogIzk5OTk5OTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRoZWlnaHQ6IDJweDtcclxuXHR3aWR0aDogMThweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxuXHJcbn1cclxuLm1lbnVJY29uIC5iYXJzOjpiZWZvcmUsXHJcbi5tZW51SWNvbiAuYmFyczo6YWZ0ZXJ7XHJcblx0YmFja2dyb3VuZDogIzk5OTk5OTtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxufVxyXG4ubWVudUljb24gLmJhcnM6OmJlZm9yZXtcclxuXHR0b3A6IDVweDtcclxufVxyXG4ubWVudUljb24gLmJhcnM6OmFmdGVye1xyXG5cdHRvcDogLTVweDtcclxufVxyXG5cclxuLm1lbnVCdG46Y2hlY2tlZCB+IC5uYXZfbGlua3tcclxuXHR3aWR0aDogMzAwcHg7XHJcbn1cclxuLm1lbnVCdG46Y2hlY2tlZCB+IC5tZW51SWNvbiAuYmFyc3tcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5tZW51QnRuOmNoZWNrZWQgfiAubWVudUljb24gLmJhcnM6OmJlZm9yZXtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG5cdHRvcDogMDtcclxufVxyXG4ubWVudUJ0bjpjaGVja2VkIH4gLm1lbnVJY29uIC5iYXJzOjphZnRlcntcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0dG9wOiAwO1xyXG59XHJcblxyXG4uTmF2YmFySXRlbXMgLmJhckxpbmV7XHJcblx0bWluLXdpZHRoOiAxMDBweDtcclxuXHRoZWlnaHQ6IDBweDtcclxuXHRib3JkZXItdG9wOiA1cHggc29saWQgcmdiKDE5NywgMTk0LCAxOSk7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR6LWluZGV4OiAxO1xyXG5cdHRyYW5zaXRpb24tZHVyYXRpb246IC44cztcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYnRuX2xvZ2lue1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiA5OTk7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAtMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRvdXRsaW5lOm5vbmU7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0dHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxuXHRvcGFjaXR5OiAwLjY7XHJcbn1cclxuLmJ0bl9sb2dpbjpob3ZlcntcclxuXHRvcGFjaXR5OiAxLjA7XHJcbn1cclxuLmJ0bl9sb2dpbiBpbWd7XHJcblx0bWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgICB3aWR0aDogMjdweDtcclxuICAgIGhlaWdodDogMjdweDtcclxufVxyXG5cclxuLmxvZ291dCBpbWd7XHJcblx0d2lkdGg6IDM1cHg7XHJcblx0aGVpZ2h0OiAzNXB4O1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiAwIDEwcHg7XHJcblx0Ym9yZGVyOiBzb2xpZCAzcHggcmdiYSgxMDAsIDEwMCwgMTAwLCAxKTtcclxuXHRib3JkZXItcmFkaXVzOiA5OTlweDtcclxufVxyXG5cclxuLm1lbnVCdG46Y2hlY2tlZCB+IC5idG5fbG9naW57XHJcblx0cmlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuXHQubmF2X2xpbmsge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHR3aWR0aDogYXV0bztcclxuXHRcdGhlaWdodDogYXV0bztcclxuXHRcdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG5cdFxyXG5cdC5OYXZiYXJJdGVtcyAubWVudUljb257XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQubmF2X2xpbmsgLmxpbmt7XHJcblx0XHR3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cdH1cclxuXHQubmF2X2xpbmsgLmxpbms6aG92ZXJ7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG5cdC5saW5rIGF7XHJcblx0XHRtaW4td2lkdGg6IDEwMHB4O1xyXG5cdFx0d2lkdGg6IDEwMHB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMjBweCAwcHg7XHJcblx0fVxyXG5cdC5OYXZiYXJJdGVtcyAuYmFyTGluZXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcblx0fVxyXG5cdC5idG5fbG9naW57XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRyaWdodDogMzBweDtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHR9XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGZvb3RlclN0eWxlID0gY3NzYFxyXG5cclxuLkZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xyXG59XHJcblxyXG4uRm9vdGVyIGRpdntcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAuRm9vdGVyIGRpdntcclxuICAgICAgICB3aWR0aDogNjQwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEyODFweCl7XHJcbiAgICAuRm9vdGVyIGRpdntcclxuICAgICAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLmxpbmVfMXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODY4Njg2O1xyXG59XHJcblxyXG4uY29weXJpZ2h0e1xyXG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnNvY2lhbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0cGFkZGluZzogMCU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWwgbGl7XHJcblxyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxufVxyXG5cclxuLnNvY2lhbCBhIHtcclxuICAgIGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcbiAgICBjb2xvcjogI2VmZWZlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNvY2lhbCBsaSBhIGRpdntcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG59XHJcblxyXG4uZmJfaWNvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9pY29ucy9mYWNlYm9vay5wbmcnKTtcclxufVxyXG4udHdfaWNvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9pY29ucy90d2l0dGVyLnBuZycpO1xyXG59XHJcbi5pZ19pY29ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL2ljb25zL2luc3RhZ3JhbS5wbmcnKTtcclxufVxyXG4uZGNfaWNvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9pY29ucy9kaXNjb3JkaWEucG5nJyk7XHJcbn1cclxuLnl0X2ljb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvaWNvbnMveW91dHViZS5wbmcnKTtcclxufVxyXG5cclxuXHJcbi5zb2NpYWwgYS50dzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBhY2VlO1xyXG59IFxyXG4uc29jaWFsIGEuZmI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxufVxyXG4uc29jaWFsIGEueXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2RkNGIzOTtcclxufVxyXG4uc29jaWFsIGEuZGM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxufVxyXG4uc29jaWFsIGEuaWc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2JiOGQwZTtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgcG9wVXAgPSBjc3NgXHJcbi5wb3BVcHtcclxuXHR3aWR0aDogMTAwdnc7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcblx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR6LWluZGV4OiA5OTtcclxuXHRvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6aGlkZGVuO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnBvcFVwLWNvbnRlbnR7XHJcblx0d2lkdGg6IDUwMHB4O1xyXG5cdGhlaWdodDogNjAwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDA7XHJcblx0Ym9yZGVyLXRvcDogc29saWQgM3B4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG5cdHBhZGRpbmc6IDVweCA1cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucG9wVXAtY29udGVudCBpbWd7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG5cdGhlaWdodDogMTAwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogOTk5cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuXHRtYXJnaW46IDIwcHggYXV0bztcclxuXHRwYWRkaW5nOiAwO1xyXG59XHJcbi5wb3BVcC1jb250ZW50IGgxe1xyXG5cdG1hcmdpbjogMDtcclxuXHRtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG4ucG9wVXAtY29udGVudCBoNXtcclxuXHRtYXJnaW46IDA7XHJcblx0bWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuLmJ0bi1leGl0e1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDBweDtcclxuXHRyaWdodDogMTBweDtcclxuXHRmb250LXNpemU6IDQycHg7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdG1hcmdpbjogMHB4OyBcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5idG4tbG9naW57XHJcblx0d2lkdGg6IDI1MHB4O1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRtYXJnaW46IDAgYXV0bzsgXHJcbn1cclxuLmJ0bi1sb2dpbiBpbWd7XHJcblx0d2lkdGg6IDIwcHg7XHJcblx0aGVpZ2h0OiAyMHB4O1xyXG5cdG1hcmdpbjogMDsgXHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBwb3BVcFNjcm9sbCA9IGNzc2BcclxuXHJcbi5wb3BVcHtcclxuXHR3aWR0aDogMTAwdnc7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cdHotaW5kZXg6IDI7XHJcblx0b3ZlcmZsb3cteDpoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OmhpZGRlbjtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5wb3BVcC1jb250ZW50e1xyXG5cdHdpZHRoOiAzMDBweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDA7XHJcblx0Ym9yZGVyLXRvcDogc29saWQgM3B4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG5cdHBhZGRpbmc6IDVweCA1cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA2NXB4O1xyXG5cdHJpZ2h0OiAzMHB4O1xyXG5cdHBhZGRpbmc6IGF1dG87XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5vcHRpb257XHJcblxyXG59XHJcbmAiLCJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuY29uc3QgY29sb3IgPSB7XHJcbiAgICBwcmltYXJ5OiAnIzM5M2I0MCcsXHJcbiAgICBzZWNvbmRhcnk6ICcjOTM5MzEzJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld1NlY2N0aW9uID0gY3NzYFxyXG4gICAgc2VjdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL2ltYWdlcy9uZXdzQmFja2dyb3VuZC5qcGdcIikgbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAlIHRvcDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLm5ld3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogNjZweDtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4gICAgXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdTdHlsZSA9IGNzc2BcclxuaDV7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzBweCk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcbi5uZXdzIGlucHV0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtaW4td2lkdGg6IDE1NXB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU3LCA1OSwgNjQsIDAuMik7XHJcbiAgICBjb2xvcjogIzM5M2I0MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAwcyBlYXNlO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGxhYmVsOmhvdmVye1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDsgICBcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgaW5wdXRbaWQ9XCJjYXRlZ29yeTFcIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cImNhdGVnb3J5MVwiXXtcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7XHJcbn1cclxuLm5ld3MgLmNhdGVnb3J5IGlucHV0W2lkPVwiY2F0ZWdvcnkyXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJjYXRlZ29yeTJcIl17XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjQwO1xyXG59XHJcbi5uZXdzIC5jYXRlZ29yeSBpbnB1dFtpZD1cImNhdGVnb3J5M1wiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVwiY2F0ZWdvcnkzXCJde1xyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2I0MDtcclxufVxyXG4ubmV3cyAuY2F0ZWdvcnkgaW5wdXRbaWQ9XCJjYXRlZ29yeTRcIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cImNhdGVnb3J5NFwiXXtcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiNDA7XHJcbn1cclxuXHJcbi5uZXdzTGlzdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHRvcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuLm5ld3NMaXN0IHVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ubmV3e1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcclxufVxyXG4ubmV3OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYigxOTcsIDE5NCwgMTkpO1xyXG59XHJcbi5uZXcgYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1vcmV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLm5ldyAuaW1nIHtcclxuICAgIG1pbi13aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDMwLCAzMCwgMC43KTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4ubmV3IC5jb250ZW50e1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogdG9wO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG59XHJcblxyXG4ubmV3IC5kYXRhe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3R0b206IDE2cHg7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIGNvbG9yOiByZ2JhKDgwLCA4MCwgODAsIDEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG59XHJcbi5uZXcgLnNlY3Rpb257XHJcbiAgICBtYXJnaW4tbGVmdDogNTJweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubmV3IGgze1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLm5ldyBwe1xyXG4gICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLm5ld3NMaXN0e1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgcGFkZGluZzogNTBweCAwcHg7XHJcbiAgICB9XHJcbiAgICAubmV3c0xpc3QgdWx7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5uZXd7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICB3aWR0aDogMTI4MHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE3MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgfVxyXG4gICAubW9yZXtcclxuICAgICAgICB3aWR0aDogMTI4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5uZXcgLmltZyB7XHJcbiAgICAgICAgd2lkdGg6IDI2NXB4O1xyXG4gICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMzAsIDMwLCAwLjcpO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAubmV3IC5jb250ZW50e1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyODVweCk7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLm5ldyBoM3tcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIC5uZXcgcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogIzdkN2Q3ZDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5uZXcgLmRhdGF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlclN0eWxlID0gY3NzYFxyXG4udG9wTmV3c3tcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogNzBweCAwcHg7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG59XHJcblxyXG4uc2xpZGVyTWFpbntcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxufVxyXG5cclxuLnRvcE5ld3MgdWx7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgNjAwbXMgZWFzZTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhdXRvU2xpZGU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDIwLjVzO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuLnRvcE5ld3MgbGl7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDMwLCAwLjcpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xyXG59XHJcbi50b3BOZXdzIGxpOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbi50b3BOZXdzIGxpIC5uZXdzSW1ne1xyXG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcclxuICAgIHdpZHRoOiAyODNweDtcclxuICAgIGhlaWdodDogMTIzcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NUaXRsZSBoMXtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCAjMDAwMDAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c1RleHR7XHJcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRvcE5ld3MgbGkgLm5ld3NUZXh0IHB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggIzAwMDAwMDtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c09yaWdpbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMjgzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggIzAwMDAwMDtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c09yaWdpbiAuZGF0ZXtcclxuICAgIFxyXG4gICAgY29sb3I6IHJnYigxOTcsIDE5NCwgMTk0KTtcclxufVxyXG4udG9wTmV3cyBsaSAubmV3c09yaWdpbiAub3JpZ2lue1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBjb2xvcjogcmdiKDE5NywgMTk0LCAxOSk7XHJcbn1cclxuXHJcbi50b3BOZXdzIC5zbGlkZXJCYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi50b3BOZXdzIGlucHV0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udG9wTmV3cyAuc2xpZGVyQmFyIGxhYmVse1xyXG4gICAgbWFyZ2luOiA1cHggMTVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDU3LCA1OSwgNjQsIDAuMyk7XHJcbiAgICBib3JkZXI6IHNvbGlkIDVweCByZ2JhKDU3LCA1OSwgNjQsIDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5pbnB1dFtpZD1cInNsaWRlcjFcIl06Y2hlY2tlZCB+IC5zbGlkZXJNYWluIC5zbGlkZXJ7XHJcbiAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxufVxyXG5pbnB1dFtpZD1cInNsaWRlcjFcIl06Y2hlY2tlZCB+IC5zbGlkZXJCYXIgbGFiZWxbZm9yPVwic2xpZGVyMVwiXXtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk3LCAxOTQsIDE5LCAuNik7XHJcbn1cclxuXHJcbmlucHV0W2lkPVwic2xpZGVyMlwiXTpjaGVja2VkIH4gLnNsaWRlck1haW4gLnNsaWRlcntcclxuICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zNTBweCwgMHB4KTtcclxufVxyXG5pbnB1dFtpZD1cInNsaWRlcjJcIl06Y2hlY2tlZCB+IC5zbGlkZXJCYXIgbGFiZWxbZm9yPVwic2xpZGVyMlwiXXtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk3LCAxOTQsIDE5LCAuNik7XHJcbn1cclxuXHJcbmlucHV0W2lkPVwic2xpZGVyM1wiXTpjaGVja2VkIH4gLnNsaWRlck1haW4gLnNsaWRlcntcclxuICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MDBweCwgMHB4KTtcclxufVxyXG5pbnB1dFtpZD1cInNsaWRlcjNcIl06Y2hlY2tlZCB+IC5zbGlkZXJCYXIgbGFiZWxbZm9yPVwic2xpZGVyM1wiXXtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk3LCAxOTQsIDE5LCAuNik7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5uZXdze1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICAudG9wTmV3cyB1bHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLnRvcE5ld3MgbGkgLm5ld3NJbWd7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzMzMzMzMztcclxuICAgICAgICB3aWR0aDogMzgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOTBweDtcclxuICAgIH1cclxuICAgIC50b3BOZXdzIGxpe1xyXG4gICAgICAgIHdpZHRoOiA0MjBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG4gICAgLnRvcE5ld3MgbGkgLm5ld3NUZXh0e1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIC5zbGlkZXJNYWlue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnRvcE5ld3MgLnNsaWRlckJhcntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBBbmltYWNpb24gKi9cclxuXHJcbkBrZXlmcmFtZXMgYXV0b1NsaWRle1xyXG4gICAgMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgICAzMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgICA0MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1MHB4LCAwKTtcclxuICAgIH1cclxuICAgIDcwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzUwcHgsIDApO1xyXG4gICAgfVxyXG4gICAgODAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MDBweCwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MDBweCwgMCk7XHJcbiAgICB9XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGFydGljbGVTdHlsZXMgPSBjc3NgXHJcbmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYXJ0aWNsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZhYTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDFweDtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIDNweCByZ2IoMTk3LCAxOTQsIDE5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uYmFja3tcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG5oMXtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcbnNwYW57XHJcbiAgICBjb2xvcjogcmdiYSg4MCwgODAsIDgwLCAxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxucCB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5hcnRpY2xle1xyXG4gICAgICAgIHdpZHRoOiA5MDBweDtcclxuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCA1cHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjk5O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzAwMDAwMDk5O1xyXG4gICAgfVxyXG4gICAgLmJhY2t7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggcmdiKDE5NywgMTk0LCAxOSk7XHJcbiAgICB9XHJcbiAgICAuYmFjayBkaXZ7XHJcbiAgICAgICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmJvZHl7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjk5O1xyXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==