webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupDetail.module.css */ "./components/meetups/MeetupDetail.module.css");
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Tonio\\Works\\Max\\326-onwards-to-a-bigger-project-starting-project\\components\\meetups\\MeetupDetail.js",
    _this = undefined;

// Meetup Detail Component Page
// import { Fragment } from "react"



var MeetupDetail = function MeetupDetail(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detail,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Meetup details from React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Add new meetup to React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.image,
      alt: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
      children: props.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_c = MeetupDetail;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetail);

var _c;

$RefreshReg$(_c, "MeetupDetail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWwiLCJwcm9wcyIsImNsYXNzZXMiLCJkZXRhaWwiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCLHNCQUNFO0FBQVMsYUFBUyxFQUFFQywrREFBTyxDQUFDQyxNQUE1QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVFFO0FBQUssU0FBRyxFQUFFRixLQUFLLENBQUNHLEtBQWhCO0FBQXVCLFNBQUcsRUFBRUgsS0FBSyxDQUFDSTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFTRTtBQUFBLGdCQUFLSixLQUFLLENBQUNJO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGLGVBVUU7QUFBQSxnQkFBVUosS0FBSyxDQUFDSztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkYsZUFXRTtBQUFBLGdCQUFJTCxLQUFLLENBQUNNO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0FoQkQ7O0tBQU1QLFk7QUFrQlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1ttZWV0dXBJZF0uNzdjMGFkZDI3NTlmOTdiMDEwNTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1lZXR1cCBEZXRhaWwgQ29tcG9uZW50IFBhZ2VcclxuXHJcbi8vIGltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBNZWV0dXBEZXRhaWwgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5NZWV0dXAgZGV0YWlscyBmcm9tIFJlYWN0IE1lZXR1cHM8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdBZGQgbmV3IG1lZXR1cCB0byBSZWFjdCBNZWV0dXBzJyAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHsvKiA8aW1nIHNyYz1cImltYWdlcy9LYW1wJ3NfRWFydGhzaGlwLnBuZ1wiIGFsdD1cIkthbXAnc19FYXJ0aHNoaXBcIiAvPlxyXG4gICAgICA8YWRkcmVzcz5zYW1lLCByYW5kb20sIGFkZHJlc3M8L2FkZHJlc3M+XHJcbiAgICAgIDxwPnNvbWUgcmFuZG9tIGRlc2NyaXB0aW9uPC9wPiAqL31cclxuICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxyXG4gICAgICA8aDI+e3Byb3BzLnRpdGxlfTwvaDI+XHJcbiAgICAgIDxhZGRyZXNzPntwcm9wcy5hZGRyZXNzfTwvYWRkcmVzcz5cclxuICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbFxyXG4iXSwic291cmNlUm9vdCI6IiJ9