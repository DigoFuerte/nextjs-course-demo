webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "C:\\Users\\Tonio\\Works\\Max\\326-onwards-to-a-bigger-project-starting-project\\pages\\index.js",
    _this = undefined;

// Home Component Page

var uidDb = 'dbUser';
var pwdDb = 'pr!BRItOXechl2Esp$St';
var nameDb = 'meetups';
var uriMongoDb = "mongodb+srv://".concat(uidDb, ":").concat(pwdDb, "@cluster0.d4upq.mongodb.net/").concat(nameDb, "?retryWrites=true&w=majority"); // console.log('Home Page: 02')
// console.log(uriMongoDb)

 // import { Fragment, useEffect, useState } from 'react'

 // import Layout from '../components/layout/Layout'
// 'https://commons.wikimedia.org/wiki/File:Convection_banner_1.jpg#/media/File:Convection_banner_1.jpg',
// "https://commons.wikimedia.org/wiki/File:Kamp%27s_Earthship.png#/media/File:Kamp's_Earthship.png",
// 'https://commons.wikimedia.org/wiki/File:Earthship_Brighton_Front.jpg#/media/File:Earthship_Brighton_Front.jpg',
// 'https://commons.wikimedia.org/wiki/File:Inside_greenhouse_of_Global_model_Earthship.JPG#/media/File:Inside_greenhouse_of_Global_model_Earthship.JPG',
// 'https://commons.wikimedia.org/wiki/File:G2_Global_model_Earthship_Taos_N.M..JPG#/media/File:G2_Global_model_Earthship_Taos_N.M..JPG',
// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     image: 'images/Convection_banner.jpg',
//     title: 'Convection banner',
//     address: 'Design',
//     descriptopn: 'meetup one',
//   },
//   {
//     id: 'm2',
//     image: "images/Kamp's_Earthship.png",
//     title: "Kamp's Earthship",
//     address: 'New Mexico',
//     descriptopn: 'meetup two',
//   },
//   {
//     id: 'm3',
//     image: 'images/Earthship_Brighton_Front.jpg',
//     title: 'Brighton Earthship',
//     address: 'Brighton',
//     descriptopn: 'meetup three',
//   },
//   {
//     id: 'm4',
//     image: 'images/Inside_greenhouse_of_Global_model_Earthship.jpeg',
//     title: 'Inside greenhouse of Global model',
//     address: 'New Mexico',
//     descriptopn: 'meetup four',
//   },
//   {
//     id: 'm5',
//     image: 'images/Global_model_Earthship_Taos_N.M.jpeg',
//     title: 'Global model Earthship Taos',
//     address: 'New Mexico',
//     descriptopn: 'meetup five',
//   },
// ]
// props from the pre-render call to getStaticProps

var HomePage = function HomePage(props) {
  //#region
  //
  // const [loadedMeetups, setLoadedMeetups] = useState([])
  // the empty dependency array means the effect is run
  // on the initial render of the component
  // useEffect(() => {
  // 1. send http request to fetch meetups data
  // 2. setLoadedMeetups()
  // simulate fetching data via an http request
  // setLoadedMeetups(DUMMY_MEETUPS)
  // }, [])
  // ! NOTE: the useEffect function is run after
  // ! the component function has executed
  // therefore in the initial render of the component
  //  loadedMeetups is empty
  // then the state changes when the useEffect function is executed
  // this causes the component to be re-rendered... loadedMeetups populated
  // const testStr = 'hjhkjfghfdkgjh'
  //#endregion
  console.log('Home Page: 02');
  console.log(uriMongoDb);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "HomePage"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }, _this);
}; // runs on the server after deployment
// for every request for this component page
// better for situations where the data changes frequently... e.g every sec
// export const getServerSideProps = async (context) => {
//   // e.g fetch data from an API
//   const requestObj = context.req
//   const responseObj = context.res
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   }
// }
// Only for Component Page... NextJS looks for getStaticProps
// to produce page pre-loaded with data on the server... not client-side
// getStaticProps gets called before the component function
// NOTES: runs duriog the build process
// better for situations where the data does not changes frequently
// ADV: makes use of caching
// export async function getStaticProps() {


_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidWlkRGIiLCJwd2REYiIsIm5hbWVEYiIsInVyaU1vbmdvRGIiLCJIb21lUGFnZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQSxJQUFNQSxLQUFLLEdBQUcsUUFBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxzQkFBZDtBQUNBLElBQU1DLE1BQU0sR0FBRyxTQUFmO0FBQ0EsSUFBTUMsVUFBVSwyQkFBb0JILEtBQXBCLGNBQTZCQyxLQUE3Qix5Q0FBaUVDLE1BQWpFLGlDQUFoQixDLENBQ0E7QUFDQTs7Q0FHQTs7Q0FJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUMxQjtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixVQUFaO0FBRUEsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFHRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBUUUscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVFLEtBQUssQ0FBQ0c7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0F6Q0QsQyxDQTJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0FqRU1KLFE7O0FBMkdTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NzlhMjJkZjY5ODI0MjgyZmVmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSG9tZSBDb21wb25lbnQgUGFnZVxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInXHJcblxyXG5jb25zdCB1aWREYiA9ICdkYlVzZXInXHJcbmNvbnN0IHB3ZERiID0gJ3ByIUJSSXRPWGVjaGwyRXNwJFN0J1xyXG5jb25zdCBuYW1lRGIgPSAnbWVldHVwcydcclxuY29uc3QgdXJpTW9uZ29EYiA9IGBtb25nb2RiK3NydjovLyR7dWlkRGJ9OiR7cHdkRGJ9QGNsdXN0ZXIwLmQ0dXBxLm1vbmdvZGIubmV0LyR7bmFtZURifT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgXHJcbi8vIGNvbnNvbGUubG9nKCdIb21lIFBhZ2U6IDAyJylcclxuLy8gY29uc29sZS5sb2codXJpTW9uZ29EYilcclxuXHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCdcclxuXHJcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0J1xyXG5cclxuLy8gJ2h0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpDb252ZWN0aW9uX2Jhbm5lcl8xLmpwZyMvbWVkaWEvRmlsZTpDb252ZWN0aW9uX2Jhbm5lcl8xLmpwZycsXHJcbi8vIFwiaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9GaWxlOkthbXAlMjdzX0VhcnRoc2hpcC5wbmcjL21lZGlhL0ZpbGU6S2FtcCdzX0VhcnRoc2hpcC5wbmdcIixcclxuLy8gJ2h0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpFYXJ0aHNoaXBfQnJpZ2h0b25fRnJvbnQuanBnIy9tZWRpYS9GaWxlOkVhcnRoc2hpcF9CcmlnaHRvbl9Gcm9udC5qcGcnLFxyXG4vLyAnaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9GaWxlOkluc2lkZV9ncmVlbmhvdXNlX29mX0dsb2JhbF9tb2RlbF9FYXJ0aHNoaXAuSlBHIy9tZWRpYS9GaWxlOkluc2lkZV9ncmVlbmhvdXNlX29mX0dsb2JhbF9tb2RlbF9FYXJ0aHNoaXAuSlBHJyxcclxuLy8gJ2h0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpHMl9HbG9iYWxfbW9kZWxfRWFydGhzaGlwX1Rhb3NfTi5NLi5KUEcjL21lZGlhL0ZpbGU6RzJfR2xvYmFsX21vZGVsX0VhcnRoc2hpcF9UYW9zX04uTS4uSlBHJyxcclxuXHJcbi8vIGNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6ICdtMScsXHJcbi8vICAgICBpbWFnZTogJ2ltYWdlcy9Db252ZWN0aW9uX2Jhbm5lci5qcGcnLFxyXG4vLyAgICAgdGl0bGU6ICdDb252ZWN0aW9uIGJhbm5lcicsXHJcbi8vICAgICBhZGRyZXNzOiAnRGVzaWduJyxcclxuLy8gICAgIGRlc2NyaXB0b3BuOiAnbWVldHVwIG9uZScsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogJ20yJyxcclxuLy8gICAgIGltYWdlOiBcImltYWdlcy9LYW1wJ3NfRWFydGhzaGlwLnBuZ1wiLFxyXG4vLyAgICAgdGl0bGU6IFwiS2FtcCdzIEVhcnRoc2hpcFwiLFxyXG4vLyAgICAgYWRkcmVzczogJ05ldyBNZXhpY28nLFxyXG4vLyAgICAgZGVzY3JpcHRvcG46ICdtZWV0dXAgdHdvJyxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAnbTMnLFxyXG4vLyAgICAgaW1hZ2U6ICdpbWFnZXMvRWFydGhzaGlwX0JyaWdodG9uX0Zyb250LmpwZycsXHJcbi8vICAgICB0aXRsZTogJ0JyaWdodG9uIEVhcnRoc2hpcCcsXHJcbi8vICAgICBhZGRyZXNzOiAnQnJpZ2h0b24nLFxyXG4vLyAgICAgZGVzY3JpcHRvcG46ICdtZWV0dXAgdGhyZWUnLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6ICdtNCcsXHJcbi8vICAgICBpbWFnZTogJ2ltYWdlcy9JbnNpZGVfZ3JlZW5ob3VzZV9vZl9HbG9iYWxfbW9kZWxfRWFydGhzaGlwLmpwZWcnLFxyXG4vLyAgICAgdGl0bGU6ICdJbnNpZGUgZ3JlZW5ob3VzZSBvZiBHbG9iYWwgbW9kZWwnLFxyXG4vLyAgICAgYWRkcmVzczogJ05ldyBNZXhpY28nLFxyXG4vLyAgICAgZGVzY3JpcHRvcG46ICdtZWV0dXAgZm91cicsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogJ201JyxcclxuLy8gICAgIGltYWdlOiAnaW1hZ2VzL0dsb2JhbF9tb2RlbF9FYXJ0aHNoaXBfVGFvc19OLk0uanBlZycsXHJcbi8vICAgICB0aXRsZTogJ0dsb2JhbCBtb2RlbCBFYXJ0aHNoaXAgVGFvcycsXHJcbi8vICAgICBhZGRyZXNzOiAnTmV3IE1leGljbycsXHJcbi8vICAgICBkZXNjcmlwdG9wbjogJ21lZXR1cCBmaXZlJyxcclxuLy8gICB9LFxyXG4vLyBdXHJcblxyXG4vLyBwcm9wcyBmcm9tIHRoZSBwcmUtcmVuZGVyIGNhbGwgdG8gZ2V0U3RhdGljUHJvcHNcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgLy8jcmVnaW9uXHJcbiAgLy9cclxuXHJcbiAgLy8gY29uc3QgW2xvYWRlZE1lZXR1cHMsIHNldExvYWRlZE1lZXR1cHNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIC8vIHRoZSBlbXB0eSBkZXBlbmRlbmN5IGFycmF5IG1lYW5zIHRoZSBlZmZlY3QgaXMgcnVuXHJcbiAgLy8gb24gdGhlIGluaXRpYWwgcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vIDEuIHNlbmQgaHR0cCByZXF1ZXN0IHRvIGZldGNoIG1lZXR1cHMgZGF0YVxyXG4gIC8vIDIuIHNldExvYWRlZE1lZXR1cHMoKVxyXG5cclxuICAvLyBzaW11bGF0ZSBmZXRjaGluZyBkYXRhIHZpYSBhbiBodHRwIHJlcXVlc3RcclxuICAvLyBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpXHJcbiAgLy8gfSwgW10pXHJcbiAgLy8gISBOT1RFOiB0aGUgdXNlRWZmZWN0IGZ1bmN0aW9uIGlzIHJ1biBhZnRlclxyXG4gIC8vICEgdGhlIGNvbXBvbmVudCBmdW5jdGlvbiBoYXMgZXhlY3V0ZWRcclxuICAvLyB0aGVyZWZvcmUgaW4gdGhlIGluaXRpYWwgcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcclxuICAvLyAgbG9hZGVkTWVldHVwcyBpcyBlbXB0eVxyXG4gIC8vIHRoZW4gdGhlIHN0YXRlIGNoYW5nZXMgd2hlbiB0aGUgdXNlRWZmZWN0IGZ1bmN0aW9uIGlzIGV4ZWN1dGVkXHJcbiAgLy8gdGhpcyBjYXVzZXMgdGhlIGNvbXBvbmVudCB0byBiZSByZS1yZW5kZXJlZC4uLiBsb2FkZWRNZWV0dXBzIHBvcHVsYXRlZFxyXG5cclxuICAvLyBjb25zdCB0ZXN0U3RyID0gJ2hqaGtqZmdoZmRrZ2poJ1xyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICBjb25zb2xlLmxvZygnSG9tZSBQYWdlOiAwMicpXHJcbiAgY29uc29sZS5sb2codXJpTW9uZ29EYilcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgey8qIDxMYXlvdXQ+ICovfVxyXG4gICAgICB7LyogbW92ZWQgaW50byBfYXBwLmpzICovfVxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8aDE+SG9tZVBhZ2U8L2gxPlxyXG4gICAgICB7LyogPE1lZXR1cExpc3QgbWVldHVwcz17bG9hZGVkTWVldHVwc30gLz4gKi99XHJcbiAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+XHJcbiAgICAgIHsvKiA8L0xheW91dD4gKi99XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuLy8gcnVucyBvbiB0aGUgc2VydmVyIGFmdGVyIGRlcGxveW1lbnRcclxuLy8gZm9yIGV2ZXJ5IHJlcXVlc3QgZm9yIHRoaXMgY29tcG9uZW50IHBhZ2VcclxuLy8gYmV0dGVyIGZvciBzaXR1YXRpb25zIHdoZXJlIHRoZSBkYXRhIGNoYW5nZXMgZnJlcXVlbnRseS4uLiBlLmcgZXZlcnkgc2VjXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4vLyAgIC8vIGUuZyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcblxyXG4vLyAgIGNvbnN0IHJlcXVlc3RPYmogPSBjb250ZXh0LnJlcVxyXG4vLyAgIGNvbnN0IHJlc3BvbnNlT2JqID0gY29udGV4dC5yZXNcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbi8vICAgICB9LFxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gT25seSBmb3IgQ29tcG9uZW50IFBhZ2UuLi4gTmV4dEpTIGxvb2tzIGZvciBnZXRTdGF0aWNQcm9wc1xyXG4vLyB0byBwcm9kdWNlIHBhZ2UgcHJlLWxvYWRlZCB3aXRoIGRhdGEgb24gdGhlIHNlcnZlci4uLiBub3QgY2xpZW50LXNpZGVcclxuLy8gZ2V0U3RhdGljUHJvcHMgZ2V0cyBjYWxsZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgZnVuY3Rpb25cclxuLy8gTk9URVM6IHJ1bnMgZHVyaW9nIHRoZSBidWlsZCBwcm9jZXNzXHJcbi8vIGJldHRlciBmb3Igc2l0dWF0aW9ucyB3aGVyZSB0aGUgZGF0YSBkb2VzIG5vdCBjaGFuZ2VzIGZyZXF1ZW50bHlcclxuLy8gQURWOiBtYWtlcyB1c2Ugb2YgY2FjaGluZ1xyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAvLyBlLmcgZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSS4uLiBldGNcclxuXHJcbiAgLy8gTmV4dEpTIGFsbG93IHRoZSB1c2UgZmV0Y2ggb24gdGhlIHNlcnZlci1zaWRlXHJcbiAgLy8gQlVUIHVzaW5nIGZldGNoIGhlcmUgaXMgYSBiaXQgcmVkdW5kYW50LCBpdCBpcyBydW4gb24gdGhlIHNlcnZlclxyXG4gIC8vIGNvbnN0IERCX01FRVRVUFMgPSBhd2FpdCBmZXRjaCgnL2FwaS9tZWV0dXBzJylcclxuXHJcbiAgY29uc3QgbW9uZ29DbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVyaU1vbmdvRGIpXHJcbiAgY29uc3QgbWVldHVwc0RiID0gbW9uZ29DbGllbnQuZGIoKVxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gbWVldHVwc0RiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKVxyXG5cclxuICBjb25zdCBNREJfTUVFVFVQUyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KClcclxuICBjb25zb2xlLmxvZygnSG9tZSBQYWdlOiAwMicpXHJcbiAgY29uc29sZS5sb2coYE1lZXR1cHMgZm91bmQ6ICR7TURCX01FRVRVUFMubGVuZ3RofWApXHJcblxyXG4gIG1vbmdvQ2xpZW50LmNsb3NlKClcclxuXHJcbiAgLy8gZ2V0U3RhdGljUHJvcHMgbXVzdCBhbHdheXMgcmV0dXJuIGFuIG9iamVjdFxyXG4gIC8vIHJldmFsaWRhdGUgKG51bWJlciBpbiBzZWNvbmRzKSAuLi4gZW5hYmxlcyBpbmNyZW1lbnRhbCBzdGF0aWMgZ2VuZXJhdGlvblxyXG4gIC8vICAgIGlmIHRoZXJlIGFyZSByZXF1ZXN0cyBmb3IgdGhpcyBwYWdlIHRoZSBkYXRhIGdldHMgcmVnZW5lcmF0ZWQgb24gdGhhdCBmcmVxdWVuY3lcclxuXHJcbiAgLy8gbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuICAvLyB0aGUgY2FsbCB0byBtYXAoKSBpcyByZXF1aXJlZCBiZWNhdXNlIHRoZSBvYmplY3QgcmV0dXJuZWQgZnJvbSBNb25nb0RiXHJcbiAgLy8gaGFzIGFuIElkIG9iamVjdCB0aGF0IGNhbm5vdCBiZSBoYW5kbGVkIHdpdGhvdXQgY29kZVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBNREJfTUVFVFVQUy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbiAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogbWVldHVwLmRlc2NyaXB0aW9uLFxyXG4gICAgICB9KSksXHJcbiAgICAgIC8vIHByb3BzOiB7XHJcbiAgICAgIC8vICAgbWVldHVwczogTURCX01FRVRVUFMsXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIHJldmFsaWRhdGU6IDEwLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=