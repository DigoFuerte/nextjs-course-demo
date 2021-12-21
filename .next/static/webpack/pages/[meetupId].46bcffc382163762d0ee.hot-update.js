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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Meetup Details Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
        image: props.meetupData.image,
        title: props.meetupData.title,
        address: props.meetupData.address,
        description: props.meetupData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
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

/***/ }),

/***/ "next":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzUGFnZSIsInByb3BzIiwibWVldHVwRGF0YSIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7O0FBT0E7QUFDQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBVztBQUNuQztBQUNBO0FBQ0E7QUFBQTtBQUNNO0FBQ0E7QUFDQTtBQUNBO0FBQ0oseUVBQUMsOENBQUQ7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0UscUVBQUMsd0VBQUQ7QUFDRSxhQUFLLEVBQUVBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsS0FEMUI7QUFFRSxhQUFLLEVBQUVGLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkUsS0FGMUI7QUFHRSxlQUFPLEVBQUVILEtBQUssQ0FBQ0MsVUFBTixDQUFpQkcsT0FINUI7QUFJRSxtQkFBVyxFQUFFSixLQUFLLENBQUNDLFVBQU4sQ0FBaUJJO0FBSmhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQWtCRCxDQXJCRCxDLENBdUJBO0FBQ0E7QUFDQTtBQUNBOzs7S0ExQk1OLGlCOztBQWlHU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW21lZXR1cElkXS40NmJjZmZjMzgyMTYzNzYyZDBlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWVldHVwIERldGFpbHMgQ29tcG9uZW50IFBhZ2VcclxuLy8gRFlOQU1JQyBQYWdlXHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYidcclxuXHJcbmltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbCdcclxuXHJcbmNvbnN0IHVpZERiID0gJ2RiVXNlcidcclxuY29uc3QgcHdkRGIgPSAncHIhQlJJdE9YZWNobDJFc3AkU3QnXHJcbmNvbnN0IG5hbWVEYiA9ICdtZWV0dXBzJ1xyXG5jb25zdCB1cmlNb25nb0RiID0gYG1vbmdvZGIrc3J2Oi8vJHt1aWREYn06JHtwd2REYn1AY2x1c3RlcjAuZDR1cHEubW9uZ29kYi5uZXQvJHtuYW1lRGJ9P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWBcclxuXHJcbi8vIGNvbnN0IE1lZXR1cERldGFpbHNQYWdlID0gKCkgPT4ge1xyXG5jb25zdCBNZWV0dXBEZXRhaWxzUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKCdEYXRhIGZyb20gZ2V0U3RhdGljUHJvcHMnKVxyXG4gIC8vIGNvbnNvbGUubG9nKHByb3BzKVxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgLy8gaW1hZ2U9XCJpbWFnZXMvS2FtcCdzX0VhcnRoc2hpcC5wbmdcIlxyXG4gICAgICAgIC8vIHRpdGxlPVwiS2FtcCdzX0VhcnRoc2hpcFwiXHJcbiAgICAgICAgLy8gYWRkcmVzcz1cInNhbWUsIHJhbmRvbSwgYWRkcmVzc1wiXHJcbiAgICAgICAgLy8gZGVzY3JpcHRpb249XCJzb21lIHJhbmRvbSBkZXNjcmlwdGlvblwiXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT48L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxoMT5NZWV0dXAgRGV0YWlscyBQYWdlPC9oMT5cclxuICAgICAgPE1lZXR1cERldGFpbFxyXG4gICAgICAgIGltYWdlPXtwcm9wcy5tZWV0dXBEYXRhLmltYWdlfVxyXG4gICAgICAgIHRpdGxlPXtwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfVxyXG4gICAgICAgIGFkZHJlc3M9e3Byb3BzLm1lZXR1cERhdGEuYWRkcmVzc31cclxuICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG4vLyB3aGVuIGdldFN0YXRpY1Byb3BzIGlzIHVzZWQgb24gYSBkeW5hbWljIHBhZ2UgKGxpa2UgdGhpcyBvbmUpXHJcbi8vIGdldFN0YXRpY1BhdGhzIG11c3QgYmUgcHJvdmlkZWRcclxuLy8gQkVDQVVTRTogZXZlcnkgaW5zdGFuY2Ugb2YgdGhlIGR5bmFtaWMgcGFnZSBtdXN0IGJlIHByZS1nZW5lcmF0ZWRcclxuLy8gICAgICAgICAgYXQgYnVpbGQgdGltZSBlLmcgZm9yIGlkMSxpZDIsIC4uLiBpZFtuLTFdLCBpZFtuXVxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy9cclxuICBjb25zdCBtb25nb0NsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QodXJpTW9uZ29EYilcclxuICBjb25zdCBtZWV0dXBzRGIgPSBtb25nb0NsaWVudC5kYigpXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBtZWV0dXBzRGIuY29sbGVjdGlvbignbWVldHVwcycpXHJcblxyXG4gIC8vIGZpbmQoe30sIHtfaWQ6IDF9KVxyXG4gIC8vICAgICAge30gLi4uIGVtcHR5IGZpbHRlciBjcml0ZXJpYVxyXG4gIC8vICAgICAgICAgIHtfaWQ6IDF9IC4uLiBvbmx5IHB1bGwgb3V0IHRoZSBfaWQgdmFsdWVzXHJcbiAgY29uc3QgTURCX01FRVRVUFMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KClcclxuXHJcbiAgbW9uZ29DbGllbnQuY2xvc2UoKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IE1EQl9NRUVUVVBTLm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHsgbWVldHVwSWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSB9LFxyXG4gICAgfSkpLFxyXG4gICAgLy8gW1xyXG4gICAgLy8gICB7IHBhcmFtczoge21lZXR1cElkOiAnbTEnfSB9LFxyXG4gICAgLy8gICB7IHBhcmFtczoge21lZXR1cElkOiAnbTInfSB9LFxyXG4gICAgLy8gICB7IHBhcmFtczoge21lZXR1cElkOiAnbTMnfSB9LFxyXG4gICAgLy8gICB7IHBhcmFtczoge21lZXR1cElkOiAnbTQnfSB9LFxyXG4gICAgLy8gICB7IHBhcmFtczoge21lZXR1cElkOiAnbTUnfSB9LFxyXG4gICAgLy8gXSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuLy8gZmFsbGJhY2s6IGZhbHNlIC4uLiB3aGVuIHBhdGhzIHN1cHBvcnRzIGFsbCBwb3NzaWJsZSBwYXRoc1xyXG4vLyBmYWxsYmFjazogdHJ1ZSAgLi4uIHdoZW4gcGF0aHMgZG9lcyBub3Qgc3VwcG9ydHMgYWxsIHBvc3NpYmxlIHBhdGhzXHJcbi8vICAgICAgICAgICAgICAgICAgICAgTmV4dEpTIHdpbGwgdHJ5IHRvIGdlbmVyYXRlIHRoZSBwYXRocyBkeW5hbWljYWxseVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAvL1xyXG4gIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWRcclxuXHJcbiAgLy8gZS5nLiBmZXRjaCBkYXRhIGZyb20gQVBJXHJcbiAgY29uc3QgbW9uZ29DbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVyaU1vbmdvRGIpXHJcbiAgY29uc3QgbWVldHVwc0RiID0gbW9uZ29DbGllbnQuZGIoKVxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gbWVldHVwc0RiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKVxyXG5cclxuICAvLyBmaW5kKHt9LCB7X2lkOiAxfSlcclxuICAvLyAgICAgIHt9IC4uLiBlbXB0eSBmaWx0ZXIgY3JpdGVyaWFcclxuICAvLyAgICAgICAgICB7X2lkOiAxfSAuLi4gb25seSBwdWxsIG91dCB0aGUgX2lkIHZhbHVlc1xyXG4gIC8vIGNvbnN0IE1EQl9NRUVUVVBTID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpXHJcbiAgY29uc3Qgc2VsZWN0ZWRNZWV0dXAgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kT25lKHsgX2lkOiBPYmplY3RJZChtZWV0dXBJZCkgfSlcclxuXHJcbiAgbW9uZ29DbGllbnQuY2xvc2UoKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgLy8gbWVldHVwRGF0YToge1xyXG4gICAgICAvLyAgIGltZzogXCJpbWFnZXMvS2FtcCdzX0VhcnRoc2hpcC5wbmdcIixcclxuICAgICAgLy8gICBpZDogbWVldHVwSWQsXHJcbiAgICAgIC8vICAgdGl0bGU6IFwiS2FtcCdzX0VhcnRoc2hpcFwiLFxyXG4gICAgICAvLyAgIGFkZHJlc3M6ICdzYW1lLCByYW5kb20sIGFkZHJlc3MnLFxyXG4gICAgICAvLyAgIGRlc2NyaXB0aW9uOiAnc29tZSByYW5kb20gZGVzY3JpcHRpb24nLFxyXG4gICAgICAvLyB9LFxyXG4gICAgICAvLyBtZWV0dXBEYXRhOiBzZWxlY3RlZE1lZXR1cCxcclxuICAgICAgbWVldHVwRGF0YToge1xyXG4gICAgICAgIGlkOiBzZWxlY3RlZE1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICB0aXRsZTogc2VsZWN0ZWRNZWV0dXAudGl0bGUsXHJcbiAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRNZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogc2VsZWN0ZWRNZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkTWVldHVwLmRlc2NyaXB0aW9uLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDEwLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsc1BhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==