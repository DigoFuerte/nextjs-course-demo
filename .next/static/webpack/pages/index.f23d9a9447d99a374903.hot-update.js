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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
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
      lineNumber: 102,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidWlkRGIiLCJwd2REYiIsIm5hbWVEYiIsInVyaU1vbmdvRGIiLCJIb21lUGFnZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQSxJQUFNQSxLQUFLLEdBQUcsUUFBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxzQkFBZDtBQUNBLElBQU1DLE1BQU0sR0FBRyxTQUFmO0FBQ0EsSUFBTUMsVUFBVSwyQkFBb0JILEtBQXBCLGNBQTZCQyxLQUE3Qix5Q0FBaUVDLE1BQWpFLGlDQUFoQixDLENBQ0E7QUFDQTs7Q0FHQTs7Q0FJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUMxQjtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixVQUFaO0FBRUEsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFHRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVNFLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFRSxLQUFLLENBQUNHO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBMUNELEMsQ0E0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0tBbEVNSixROztBQTRHU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjIzZDlhOTQ0N2Q5OWEzNzQ5MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEhvbWUgQ29tcG9uZW50IFBhZ2VcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xyXG5cclxuY29uc3QgdWlkRGIgPSAnZGJVc2VyJ1xyXG5jb25zdCBwd2REYiA9ICdwciFCUkl0T1hlY2hsMkVzcCRTdCdcclxuY29uc3QgbmFtZURiID0gJ21lZXR1cHMnXHJcbmNvbnN0IHVyaU1vbmdvRGIgPSBgbW9uZ29kYitzcnY6Ly8ke3VpZERifToke3B3ZERifUBjbHVzdGVyMC5kNHVwcS5tb25nb2RiLm5ldC8ke25hbWVEYn0/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YFxyXG4vLyBjb25zb2xlLmxvZygnSG9tZSBQYWdlOiAwMicpXHJcbi8vIGNvbnNvbGUubG9nKHVyaU1vbmdvRGIpXHJcblxyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnXHJcblxyXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCdcclxuXHJcbi8vICdodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0ZpbGU6Q29udmVjdGlvbl9iYW5uZXJfMS5qcGcjL21lZGlhL0ZpbGU6Q29udmVjdGlvbl9iYW5uZXJfMS5qcGcnLFxyXG4vLyBcImh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpLYW1wJTI3c19FYXJ0aHNoaXAucG5nIy9tZWRpYS9GaWxlOkthbXAnc19FYXJ0aHNoaXAucG5nXCIsXHJcbi8vICdodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0ZpbGU6RWFydGhzaGlwX0JyaWdodG9uX0Zyb250LmpwZyMvbWVkaWEvRmlsZTpFYXJ0aHNoaXBfQnJpZ2h0b25fRnJvbnQuanBnJyxcclxuLy8gJ2h0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpJbnNpZGVfZ3JlZW5ob3VzZV9vZl9HbG9iYWxfbW9kZWxfRWFydGhzaGlwLkpQRyMvbWVkaWEvRmlsZTpJbnNpZGVfZ3JlZW5ob3VzZV9vZl9HbG9iYWxfbW9kZWxfRWFydGhzaGlwLkpQRycsXHJcbi8vICdodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0ZpbGU6RzJfR2xvYmFsX21vZGVsX0VhcnRoc2hpcF9UYW9zX04uTS4uSlBHIy9tZWRpYS9GaWxlOkcyX0dsb2JhbF9tb2RlbF9FYXJ0aHNoaXBfVGFvc19OLk0uLkpQRycsXHJcblxyXG4vLyBjb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAnbTEnLFxyXG4vLyAgICAgaW1hZ2U6ICdpbWFnZXMvQ29udmVjdGlvbl9iYW5uZXIuanBnJyxcclxuLy8gICAgIHRpdGxlOiAnQ29udmVjdGlvbiBiYW5uZXInLFxyXG4vLyAgICAgYWRkcmVzczogJ0Rlc2lnbicsXHJcbi8vICAgICBkZXNjcmlwdG9wbjogJ21lZXR1cCBvbmUnLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6ICdtMicsXHJcbi8vICAgICBpbWFnZTogXCJpbWFnZXMvS2FtcCdzX0VhcnRoc2hpcC5wbmdcIixcclxuLy8gICAgIHRpdGxlOiBcIkthbXAncyBFYXJ0aHNoaXBcIixcclxuLy8gICAgIGFkZHJlc3M6ICdOZXcgTWV4aWNvJyxcclxuLy8gICAgIGRlc2NyaXB0b3BuOiAnbWVldHVwIHR3bycsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogJ20zJyxcclxuLy8gICAgIGltYWdlOiAnaW1hZ2VzL0VhcnRoc2hpcF9CcmlnaHRvbl9Gcm9udC5qcGcnLFxyXG4vLyAgICAgdGl0bGU6ICdCcmlnaHRvbiBFYXJ0aHNoaXAnLFxyXG4vLyAgICAgYWRkcmVzczogJ0JyaWdodG9uJyxcclxuLy8gICAgIGRlc2NyaXB0b3BuOiAnbWVldHVwIHRocmVlJyxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAnbTQnLFxyXG4vLyAgICAgaW1hZ2U6ICdpbWFnZXMvSW5zaWRlX2dyZWVuaG91c2Vfb2ZfR2xvYmFsX21vZGVsX0VhcnRoc2hpcC5qcGVnJyxcclxuLy8gICAgIHRpdGxlOiAnSW5zaWRlIGdyZWVuaG91c2Ugb2YgR2xvYmFsIG1vZGVsJyxcclxuLy8gICAgIGFkZHJlc3M6ICdOZXcgTWV4aWNvJyxcclxuLy8gICAgIGRlc2NyaXB0b3BuOiAnbWVldHVwIGZvdXInLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6ICdtNScsXHJcbi8vICAgICBpbWFnZTogJ2ltYWdlcy9HbG9iYWxfbW9kZWxfRWFydGhzaGlwX1Rhb3NfTi5NLmpwZWcnLFxyXG4vLyAgICAgdGl0bGU6ICdHbG9iYWwgbW9kZWwgRWFydGhzaGlwIFRhb3MnLFxyXG4vLyAgICAgYWRkcmVzczogJ05ldyBNZXhpY28nLFxyXG4vLyAgICAgZGVzY3JpcHRvcG46ICdtZWV0dXAgZml2ZScsXHJcbi8vICAgfSxcclxuLy8gXVxyXG5cclxuLy8gcHJvcHMgZnJvbSB0aGUgcHJlLXJlbmRlciBjYWxsIHRvIGdldFN0YXRpY1Byb3BzXHJcblxyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIC8vI3JlZ2lvblxyXG4gIC8vXHJcblxyXG4gIC8vIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAvLyB0aGUgZW1wdHkgZGVwZW5kZW5jeSBhcnJheSBtZWFucyB0aGUgZWZmZWN0IGlzIHJ1blxyXG4gIC8vIG9uIHRoZSBpbml0aWFsIHJlbmRlciBvZiB0aGUgY29tcG9uZW50XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAxLiBzZW5kIGh0dHAgcmVxdWVzdCB0byBmZXRjaCBtZWV0dXBzIGRhdGFcclxuICAvLyAyLiBzZXRMb2FkZWRNZWV0dXBzKClcclxuXHJcbiAgLy8gc2ltdWxhdGUgZmV0Y2hpbmcgZGF0YSB2aWEgYW4gaHR0cCByZXF1ZXN0XHJcbiAgLy8gc2V0TG9hZGVkTWVldHVwcyhEVU1NWV9NRUVUVVBTKVxyXG4gIC8vIH0sIFtdKVxyXG4gIC8vICEgTk9URTogdGhlIHVzZUVmZmVjdCBmdW5jdGlvbiBpcyBydW4gYWZ0ZXJcclxuICAvLyAhIHRoZSBjb21wb25lbnQgZnVuY3Rpb24gaGFzIGV4ZWN1dGVkXHJcbiAgLy8gdGhlcmVmb3JlIGluIHRoZSBpbml0aWFsIHJlbmRlciBvZiB0aGUgY29tcG9uZW50XHJcbiAgLy8gIGxvYWRlZE1lZXR1cHMgaXMgZW1wdHlcclxuICAvLyB0aGVuIHRoZSBzdGF0ZSBjaGFuZ2VzIHdoZW4gdGhlIHVzZUVmZmVjdCBmdW5jdGlvbiBpcyBleGVjdXRlZFxyXG4gIC8vIHRoaXMgY2F1c2VzIHRoZSBjb21wb25lbnQgdG8gYmUgcmUtcmVuZGVyZWQuLi4gbG9hZGVkTWVldHVwcyBwb3B1bGF0ZWRcclxuXHJcbiAgLy8gY29uc3QgdGVzdFN0ciA9ICdoamhramZnaGZka2dqaCdcclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgY29uc29sZS5sb2coJ0hvbWUgUGFnZTogMDInKVxyXG4gIGNvbnNvbGUubG9nKHVyaU1vbmdvRGIpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIHsvKiA8TGF5b3V0PiAqL31cclxuICAgICAgey8qIG1vdmVkIGludG8gX2FwcC5qcyAqL31cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlJlYWN0IE1lZXR1cHM8L3RpdGxlPlxyXG4gICAgICAgIFxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxoMT5Ib21lUGFnZTwvaDE+XHJcbiAgICAgIHsvKiA8TWVldHVwTGlzdCBtZWV0dXBzPXtsb2FkZWRNZWV0dXBzfSAvPiAqL31cclxuICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz5cclxuICAgICAgey8qIDwvTGF5b3V0PiAqL31cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBydW5zIG9uIHRoZSBzZXJ2ZXIgYWZ0ZXIgZGVwbG95bWVudFxyXG4vLyBmb3IgZXZlcnkgcmVxdWVzdCBmb3IgdGhpcyBjb21wb25lbnQgcGFnZVxyXG4vLyBiZXR0ZXIgZm9yIHNpdHVhdGlvbnMgd2hlcmUgdGhlIGRhdGEgY2hhbmdlcyBmcmVxdWVudGx5Li4uIGUuZyBldmVyeSBzZWNcclxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbi8vICAgLy8gZS5nIGZldGNoIGRhdGEgZnJvbSBhbiBBUElcclxuXHJcbi8vICAgY29uc3QgcmVxdWVzdE9iaiA9IGNvbnRleHQucmVxXHJcbi8vICAgY29uc3QgcmVzcG9uc2VPYmogPSBjb250ZXh0LnJlc1xyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuLy8gICAgIH0sXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBPbmx5IGZvciBDb21wb25lbnQgUGFnZS4uLiBOZXh0SlMgbG9va3MgZm9yIGdldFN0YXRpY1Byb3BzXHJcbi8vIHRvIHByb2R1Y2UgcGFnZSBwcmUtbG9hZGVkIHdpdGggZGF0YSBvbiB0aGUgc2VydmVyLi4uIG5vdCBjbGllbnQtc2lkZVxyXG4vLyBnZXRTdGF0aWNQcm9wcyBnZXRzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBmdW5jdGlvblxyXG4vLyBOT1RFUzogcnVucyBkdXJpb2cgdGhlIGJ1aWxkIHByb2Nlc3NcclxuLy8gYmV0dGVyIGZvciBzaXR1YXRpb25zIHdoZXJlIHRoZSBkYXRhIGRvZXMgbm90IGNoYW5nZXMgZnJlcXVlbnRseVxyXG4vLyBBRFY6IG1ha2VzIHVzZSBvZiBjYWNoaW5nXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vIGUuZyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJLi4uIGV0Y1xyXG5cclxuICAvLyBOZXh0SlMgYWxsb3cgdGhlIHVzZSBmZXRjaCBvbiB0aGUgc2VydmVyLXNpZGVcclxuICAvLyBCVVQgdXNpbmcgZmV0Y2ggaGVyZSBpcyBhIGJpdCByZWR1bmRhbnQsIGl0IGlzIHJ1biBvbiB0aGUgc2VydmVyXHJcbiAgLy8gY29uc3QgREJfTUVFVFVQUyA9IGF3YWl0IGZldGNoKCcvYXBpL21lZXR1cHMnKVxyXG5cclxuICBjb25zdCBtb25nb0NsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QodXJpTW9uZ29EYilcclxuICBjb25zdCBtZWV0dXBzRGIgPSBtb25nb0NsaWVudC5kYigpXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBtZWV0dXBzRGIuY29sbGVjdGlvbignbWVldHVwcycpXHJcblxyXG4gIGNvbnN0IE1EQl9NRUVUVVBTID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKVxyXG4gIGNvbnNvbGUubG9nKCdIb21lIFBhZ2U6IDAyJylcclxuICBjb25zb2xlLmxvZyhgTWVldHVwcyBmb3VuZDogJHtNREJfTUVFVFVQUy5sZW5ndGh9YClcclxuXHJcbiAgbW9uZ29DbGllbnQuY2xvc2UoKVxyXG5cclxuICAvLyBnZXRTdGF0aWNQcm9wcyBtdXN0IGFsd2F5cyByZXR1cm4gYW4gb2JqZWN0XHJcbiAgLy8gcmV2YWxpZGF0ZSAobnVtYmVyIGluIHNlY29uZHMpIC4uLiBlbmFibGVzIGluY3JlbWVudGFsIHN0YXRpYyBnZW5lcmF0aW9uXHJcbiAgLy8gICAgaWYgdGhlcmUgYXJlIHJlcXVlc3RzIGZvciB0aGlzIHBhZ2UgdGhlIGRhdGEgZ2V0cyByZWdlbmVyYXRlZCBvbiB0aGF0IGZyZXF1ZW5jeVxyXG5cclxuICAvLyBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxyXG4gIC8vIHRoZSBjYWxsIHRvIG1hcCgpIGlzIHJlcXVpcmVkIGJlY2F1c2UgdGhlIG9iamVjdCByZXR1cm5lZCBmcm9tIE1vbmdvRGJcclxuICAvLyBoYXMgYW4gSWQgb2JqZWN0IHRoYXQgY2Fubm90IGJlIGhhbmRsZWQgd2l0aG91dCBjb2RlXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IE1EQl9NRUVUVVBTLm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBtZWV0dXAuZGVzY3JpcHRpb24sXHJcbiAgICAgIH0pKSxcclxuICAgICAgLy8gcHJvcHM6IHtcclxuICAgICAgLy8gICBtZWV0dXBzOiBNREJfTUVFVFVQUyxcclxuICAgICAgLy8gfSxcclxuICAgICAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==