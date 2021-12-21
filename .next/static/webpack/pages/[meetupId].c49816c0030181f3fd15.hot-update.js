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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: props.meetupData.title
        }, void 0, false, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzUGFnZSIsInByb3BzIiwibWVldHVwRGF0YSIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7O0FBT0E7QUFDQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBVztBQUNuQztBQUNBO0FBQ0E7QUFBQTtBQUNNO0FBQ0E7QUFDQTtBQUNBO0FBQ0oseUVBQUMsOENBQUQ7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFBLCtCQUNFO0FBQUEsb0JBQVNBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRSxxRUFBQyx3RUFBRDtBQUNFLGFBQUssRUFBRUYsS0FBSyxDQUFDQyxVQUFOLENBQWlCRSxLQUQxQjtBQUVFLGFBQUssRUFBRUgsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxLQUYxQjtBQUdFLGVBQU8sRUFBRUYsS0FBSyxDQUFDQyxVQUFOLENBQWlCRyxPQUg1QjtBQUlFLG1CQUFXLEVBQUVKLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkk7QUFKaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBa0JELENBckJELEMsQ0F1QkE7QUFDQTtBQUNBO0FBQ0E7OztLQTFCTU4saUI7O0FBaUdTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbWVldHVwSWRdLmM0OTgxNmMwMDMwMTgxZjNmZDE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNZWV0dXAgRGV0YWlscyBDb21wb25lbnQgUGFnZVxyXG4vLyBEWU5BTUlDIFBhZ2VcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJ1xyXG5cclxuaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsJ1xyXG5cclxuY29uc3QgdWlkRGIgPSAnZGJVc2VyJ1xyXG5jb25zdCBwd2REYiA9ICdwciFCUkl0T1hlY2hsMkVzcCRTdCdcclxuY29uc3QgbmFtZURiID0gJ21lZXR1cHMnXHJcbmNvbnN0IHVyaU1vbmdvRGIgPSBgbW9uZ29kYitzcnY6Ly8ke3VpZERifToke3B3ZERifUBjbHVzdGVyMC5kNHVwcS5tb25nb2RiLm5ldC8ke25hbWVEYn0/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YFxyXG5cclxuLy8gY29uc3QgTWVldHVwRGV0YWlsc1BhZ2UgPSAoKSA9PiB7XHJcbmNvbnN0IE1lZXR1cERldGFpbHNQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coJ0RhdGEgZnJvbSBnZXRTdGF0aWNQcm9wcycpXHJcbiAgLy8gY29uc29sZS5sb2cocHJvcHMpXHJcbiAgcmV0dXJuIChcclxuICAgICAgICAvLyBpbWFnZT1cImltYWdlcy9LYW1wJ3NfRWFydGhzaGlwLnBuZ1wiXHJcbiAgICAgICAgLy8gdGl0bGU9XCJLYW1wJ3NfRWFydGhzaGlwXCJcclxuICAgICAgICAvLyBhZGRyZXNzPVwic2FtZSwgcmFuZG9tLCBhZGRyZXNzXCJcclxuICAgICAgICAvLyBkZXNjcmlwdGlvbj1cInNvbWUgcmFuZG9tIGRlc2NyaXB0aW9uXCJcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnsgcHJvcHMubWVldHVwRGF0YS50aXRsZSB9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8aDE+TWVldHVwIERldGFpbHMgUGFnZTwvaDE+XHJcbiAgICAgIDxNZWV0dXBEZXRhaWxcclxuICAgICAgICBpbWFnZT17cHJvcHMubWVldHVwRGF0YS5pbWFnZX1cclxuICAgICAgICB0aXRsZT17cHJvcHMubWVldHVwRGF0YS50aXRsZX1cclxuICAgICAgICBhZGRyZXNzPXtwcm9wcy5tZWV0dXBEYXRhLmFkZHJlc3N9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgIC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuLy8gd2hlbiBnZXRTdGF0aWNQcm9wcyBpcyB1c2VkIG9uIGEgZHluYW1pYyBwYWdlIChsaWtlIHRoaXMgb25lKVxyXG4vLyBnZXRTdGF0aWNQYXRocyBtdXN0IGJlIHByb3ZpZGVkXHJcbi8vIEJFQ0FVU0U6IGV2ZXJ5IGluc3RhbmNlIG9mIHRoZSBkeW5hbWljIHBhZ2UgbXVzdCBiZSBwcmUtZ2VuZXJhdGVkXHJcbi8vICAgICAgICAgIGF0IGJ1aWxkIHRpbWUgZS5nIGZvciBpZDEsaWQyLCAuLi4gaWRbbi0xXSwgaWRbbl1cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vXHJcbiAgY29uc3QgbW9uZ29DbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVyaU1vbmdvRGIpXHJcbiAgY29uc3QgbWVldHVwc0RiID0gbW9uZ29DbGllbnQuZGIoKVxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gbWVldHVwc0RiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKVxyXG5cclxuICAvLyBmaW5kKHt9LCB7X2lkOiAxfSlcclxuICAvLyAgICAgIHt9IC4uLiBlbXB0eSBmaWx0ZXIgY3JpdGVyaWFcclxuICAvLyAgICAgICAgICB7X2lkOiAxfSAuLi4gb25seSBwdWxsIG91dCB0aGUgX2lkIHZhbHVlc1xyXG4gIGNvbnN0IE1EQl9NRUVUVVBTID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpXHJcblxyXG4gIG1vbmdvQ2xpZW50LmNsb3NlKClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBNREJfTUVFVFVQUy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgICAgcGFyYW1zOiB7IG1lZXR1cElkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCkgfSxcclxuICAgIH0pKSxcclxuICAgIC8vIFtcclxuICAgIC8vICAgeyBwYXJhbXM6IHttZWV0dXBJZDogJ20xJ30gfSxcclxuICAgIC8vICAgeyBwYXJhbXM6IHttZWV0dXBJZDogJ20yJ30gfSxcclxuICAgIC8vICAgeyBwYXJhbXM6IHttZWV0dXBJZDogJ20zJ30gfSxcclxuICAgIC8vICAgeyBwYXJhbXM6IHttZWV0dXBJZDogJ200J30gfSxcclxuICAgIC8vICAgeyBwYXJhbXM6IHttZWV0dXBJZDogJ201J30gfSxcclxuICAgIC8vIF0sXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfVxyXG59XHJcbi8vIGZhbGxiYWNrOiBmYWxzZSAuLi4gd2hlbiBwYXRocyBzdXBwb3J0cyBhbGwgcG9zc2libGUgcGF0aHNcclxuLy8gZmFsbGJhY2s6IHRydWUgIC4uLiB3aGVuIHBhdGhzIGRvZXMgbm90IHN1cHBvcnRzIGFsbCBwb3NzaWJsZSBwYXRoc1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIE5leHRKUyB3aWxsIHRyeSB0byBnZW5lcmF0ZSB0aGUgcGF0aHMgZHluYW1pY2FsbHlcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgLy9cclxuICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkXHJcblxyXG4gIC8vIGUuZy4gZmV0Y2ggZGF0YSBmcm9tIEFQSVxyXG4gIGNvbnN0IG1vbmdvQ2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCh1cmlNb25nb0RiKVxyXG4gIGNvbnN0IG1lZXR1cHNEYiA9IG1vbmdvQ2xpZW50LmRiKClcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IG1lZXR1cHNEYi5jb2xsZWN0aW9uKCdtZWV0dXBzJylcclxuXHJcbiAgLy8gZmluZCh7fSwge19pZDogMX0pXHJcbiAgLy8gICAgICB7fSAuLi4gZW1wdHkgZmlsdGVyIGNyaXRlcmlhXHJcbiAgLy8gICAgICAgICAge19pZDogMX0gLi4uIG9ubHkgcHVsbCBvdXQgdGhlIF9pZCB2YWx1ZXNcclxuICAvLyBjb25zdCBNREJfTUVFVFVQUyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoe30sIHsgX2lkOiAxIH0pLnRvQXJyYXkoKVxyXG4gIGNvbnN0IHNlbGVjdGVkTWVldHVwID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZE9uZSh7IF9pZDogT2JqZWN0SWQobWVldHVwSWQpIH0pXHJcblxyXG4gIG1vbmdvQ2xpZW50LmNsb3NlKClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIC8vIG1lZXR1cERhdGE6IHtcclxuICAgICAgLy8gICBpbWc6IFwiaW1hZ2VzL0thbXAnc19FYXJ0aHNoaXAucG5nXCIsXHJcbiAgICAgIC8vICAgaWQ6IG1lZXR1cElkLFxyXG4gICAgICAvLyAgIHRpdGxlOiBcIkthbXAnc19FYXJ0aHNoaXBcIixcclxuICAgICAgLy8gICBhZGRyZXNzOiAnc2FtZSwgcmFuZG9tLCBhZGRyZXNzJyxcclxuICAgICAgLy8gICBkZXNjcmlwdGlvbjogJ3NvbWUgcmFuZG9tIGRlc2NyaXB0aW9uJyxcclxuICAgICAgLy8gfSxcclxuICAgICAgLy8gbWVldHVwRGF0YTogc2VsZWN0ZWRNZWV0dXAsXHJcbiAgICAgIG1lZXR1cERhdGE6IHtcclxuICAgICAgICBpZDogc2VsZWN0ZWRNZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgdGl0bGU6IHNlbGVjdGVkTWVldHVwLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6IHNlbGVjdGVkTWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IHNlbGVjdGVkTWVldHVwLmltYWdlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3RlZE1lZXR1cC5kZXNjcmlwdGlvbixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxMCxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHNQYWdlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=