webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");


var _jsxFileName = "C:\\Users\\Tonio\\Works\\Max\\326-onwards-to-a-bigger-project-starting-project\\pages\\[meetupId]\\index.js",
    _this = undefined;

// Meetup Details Component Page
// DYNAMIC Page




// const MeetupDetailsPage = () => {
var MeetupDetailsPage = function MeetupDetailsPage(props) {
  // console.log('Data from getStaticProps')
  // console.log(props)
  return (
    /*#__PURE__*/
    // image="images/Kamp's_Earthship.png"
    // title="Kamp's_Earthship"
    // address="same, random, address"
    // description="some random description"
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: props.meetupData.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "",
          children: props.meetupData.decription
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Meetup Details Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
        image: props.meetupData.image,
        title: props.meetupData.title,
        address: props.meetupData.address,
        description: props.meetupData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }, _this)
  );
}; // when getStaticProps is used on a dynamic page (like this one)
// getStaticPaths must be provided
// BECAUSE: every instance of the dynamic page must be pre-generated
//          at build time e.g for id1,id2, ... id[n-1], id[n]


_c = MeetupDetailsPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetailsPage);

var _c;

$RefreshReg$(_c, "MeetupDetailsPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzUGFnZSIsInByb3BzIiwibWVldHVwRGF0YSIsInRpdGxlIiwiZGVjcmlwdGlvbiIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUlBOztBQU9BO0FBQ0EsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQUE7QUFDTTtBQUNBO0FBQ0E7QUFDQTtBQUNKLHlFQUFDLDhDQUFEO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSxnQ0FDRTtBQUFBLG9CQUFRQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFNLGNBQUksRUFBQyxFQUFYO0FBQUEsb0JBQWdCRixLQUFLLENBQUNDLFVBQU4sQ0FBaUJFO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBTUUscUVBQUMsd0VBQUQ7QUFDRSxhQUFLLEVBQUVILEtBQUssQ0FBQ0MsVUFBTixDQUFpQkcsS0FEMUI7QUFFRSxhQUFLLEVBQUVKLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsS0FGMUI7QUFHRSxlQUFPLEVBQUVGLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkksT0FINUI7QUFJRSxtQkFBVyxFQUFFTCxLQUFLLENBQUNDLFVBQU4sQ0FBaUJLO0FBSmhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQW1CRCxDQXRCRCxDLENBd0JBO0FBQ0E7QUFDQTtBQUNBOzs7S0EzQk1QLGlCOztBQWtHU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW21lZXR1cElkXS4xZWE4N2I1ZjljYmZiOWQyMzYwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWVldHVwIERldGFpbHMgQ29tcG9uZW50IFBhZ2VcclxuLy8gRFlOQU1JQyBQYWdlXHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYidcclxuXHJcbmltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbCdcclxuXHJcbmNvbnN0IHVpZERiID0gJ2RiVXNlcidcclxuY29uc3QgcHdkRGIgPSAncHIhQlJJdE9YZWNobDJFc3AkU3QnXHJcbmNvbnN0IG5hbWVEYiA9ICdtZWV0dXBzJ1xyXG5jb25zdCB1cmlNb25nb0RiID0gYG1vbmdvZGIrc3J2Oi8vJHt1aWREYn06JHtwd2REYn1AY2x1c3RlcjAuZDR1cHEubW9uZ29kYi5uZXQvJHtuYW1lRGJ9P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWBcclxuXHJcbi8vIGNvbnN0IE1lZXR1cERldGFpbHNQYWdlID0gKCkgPT4ge1xyXG5jb25zdCBNZWV0dXBEZXRhaWxzUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKCdEYXRhIGZyb20gZ2V0U3RhdGljUHJvcHMnKVxyXG4gIC8vIGNvbnNvbGUubG9nKHByb3BzKVxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgLy8gaW1hZ2U9XCJpbWFnZXMvS2FtcCdzX0VhcnRoc2hpcC5wbmdcIlxyXG4gICAgICAgIC8vIHRpdGxlPVwiS2FtcCdzX0VhcnRoc2hpcFwiXHJcbiAgICAgICAgLy8gYWRkcmVzcz1cInNhbWUsIHJhbmRvbSwgYWRkcmVzc1wiXHJcbiAgICAgICAgLy8gZGVzY3JpcHRpb249XCJzb21lIHJhbmRvbSBkZXNjcmlwdGlvblwiXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57cHJvcHMubWVldHVwRGF0YS50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9Jyc+eyBwcm9wcy5tZWV0dXBEYXRhLmRlY3JpcHRpb24gfTwvbWV0YT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8aDE+TWVldHVwIERldGFpbHMgUGFnZTwvaDE+XHJcbiAgICAgIDxNZWV0dXBEZXRhaWxcclxuICAgICAgICBpbWFnZT17cHJvcHMubWVldHVwRGF0YS5pbWFnZX1cclxuICAgICAgICB0aXRsZT17cHJvcHMubWVldHVwRGF0YS50aXRsZX1cclxuICAgICAgICBhZGRyZXNzPXtwcm9wcy5tZWV0dXBEYXRhLmFkZHJlc3N9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgIC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuLy8gd2hlbiBnZXRTdGF0aWNQcm9wcyBpcyB1c2VkIG9uIGEgZHluYW1pYyBwYWdlIChsaWtlIHRoaXMgb25lKVxyXG4vLyBnZXRTdGF0aWNQYXRocyBtdXN0IGJlIHByb3ZpZGVkXHJcbi8vIEJFQ0FVU0U6IGV2ZXJ5IGluc3RhbmNlIG9mIHRoZSBkeW5hbWljIHBhZ2UgbXVzdCBiZSBwcmUtZ2VuZXJhdGVkXHJcbi8vICAgICAgICAgIGF0IGJ1aWxkIHRpbWUgZS5nIGZvciBpZDEsaWQyLCAuLi4gaWRbbi0xXSwgaWRbbl1cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vXHJcbiAgY29uc3QgbW9uZ29DbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVyaU1vbmdvRGIpXHJcbiAgY29uc3QgbWVldHVwc0RiID0gbW9uZ29DbGllbnQuZGIoKVxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gbWVldHVwc0RiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKVxyXG5cclxuICAvLyBmaW5kKHt9LCB7X2lkOiAxfSlcclxuICAvLyAgICAgIHt9IC4uLiBlbXB0eSBmaWx0ZXIgY3JpdGVyaWFcclxuICAvLyAgICAgICAgICB7X2lkOiAxfSAuLi4gb25seSBwdWxsIG91dCB0aGUgX2lkIHZhbHVlc1xyXG4gIGNvbnN0IE1EQl9NRUVUVVBTID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpXHJcblxyXG4gIG1vbmdvQ2xpZW50LmNsb3NlKClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBNREJfTUVFVFVQUy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgICAgcGFyYW1zOiB7IG1lZXR1cElkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCkgfSxcclxuICAgIH0pKSxcclxuICAgIC8vIFtcclxuICAgIC8vICAgeyBwYXJhbXM6IHttZWV0dXBJZDogJ20xJ30gfSxcclxuICAgIC8vICAgeyBwYXJhbXM6IHttZWV0dXBJZDogJ20yJ30gfSxcclxuICAgIC8vICAgeyBwYXJhbXM6IHttZWV0dXBJZDogJ20zJ30gfSxcclxuICAgIC8vICAgeyBwYXJhbXM6IHttZWV0dXBJZDogJ200J30gfSxcclxuICAgIC8vICAgeyBwYXJhbXM6IHttZWV0dXBJZDogJ201J30gfSxcclxuICAgIC8vIF0sXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfVxyXG59XHJcbi8vIGZhbGxiYWNrOiBmYWxzZSAuLi4gd2hlbiBwYXRocyBzdXBwb3J0cyBhbGwgcG9zc2libGUgcGF0aHNcclxuLy8gZmFsbGJhY2s6IHRydWUgIC4uLiB3aGVuIHBhdGhzIGRvZXMgbm90IHN1cHBvcnRzIGFsbCBwb3NzaWJsZSBwYXRoc1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIE5leHRKUyB3aWxsIHRyeSB0byBnZW5lcmF0ZSB0aGUgcGF0aHMgZHluYW1pY2FsbHlcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgLy9cclxuICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkXHJcblxyXG4gIC8vIGUuZy4gZmV0Y2ggZGF0YSBmcm9tIEFQSVxyXG4gIGNvbnN0IG1vbmdvQ2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCh1cmlNb25nb0RiKVxyXG4gIGNvbnN0IG1lZXR1cHNEYiA9IG1vbmdvQ2xpZW50LmRiKClcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IG1lZXR1cHNEYi5jb2xsZWN0aW9uKCdtZWV0dXBzJylcclxuXHJcbiAgLy8gZmluZCh7fSwge19pZDogMX0pXHJcbiAgLy8gICAgICB7fSAuLi4gZW1wdHkgZmlsdGVyIGNyaXRlcmlhXHJcbiAgLy8gICAgICAgICAge19pZDogMX0gLi4uIG9ubHkgcHVsbCBvdXQgdGhlIF9pZCB2YWx1ZXNcclxuICAvLyBjb25zdCBNREJfTUVFVFVQUyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoe30sIHsgX2lkOiAxIH0pLnRvQXJyYXkoKVxyXG4gIGNvbnN0IHNlbGVjdGVkTWVldHVwID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZE9uZSh7IF9pZDogT2JqZWN0SWQobWVldHVwSWQpIH0pXHJcblxyXG4gIG1vbmdvQ2xpZW50LmNsb3NlKClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIC8vIG1lZXR1cERhdGE6IHtcclxuICAgICAgLy8gICBpbWc6IFwiaW1hZ2VzL0thbXAnc19FYXJ0aHNoaXAucG5nXCIsXHJcbiAgICAgIC8vICAgaWQ6IG1lZXR1cElkLFxyXG4gICAgICAvLyAgIHRpdGxlOiBcIkthbXAnc19FYXJ0aHNoaXBcIixcclxuICAgICAgLy8gICBhZGRyZXNzOiAnc2FtZSwgcmFuZG9tLCBhZGRyZXNzJyxcclxuICAgICAgLy8gICBkZXNjcmlwdGlvbjogJ3NvbWUgcmFuZG9tIGRlc2NyaXB0aW9uJyxcclxuICAgICAgLy8gfSxcclxuICAgICAgLy8gbWVldHVwRGF0YTogc2VsZWN0ZWRNZWV0dXAsXHJcbiAgICAgIG1lZXR1cERhdGE6IHtcclxuICAgICAgICBpZDogc2VsZWN0ZWRNZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgdGl0bGU6IHNlbGVjdGVkTWVldHVwLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6IHNlbGVjdGVkTWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IHNlbGVjdGVkTWVldHVwLmltYWdlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3RlZE1lZXR1cC5kZXNjcmlwdGlvbixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxMCxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHNQYWdlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=