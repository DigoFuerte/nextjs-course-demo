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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetail.module.css */ "./components/meetups/MeetupDetail.module.css");
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Tonio\\Works\\Max\\326-onwards-to-a-bigger-project-starting-project\\components\\meetups\\MeetupDetail.js";
// Meetup Detail Component Page
// import { Fragment } from "react"


const MeetupDetail = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.image,
      alt: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
      children: props.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MeetupDetail);

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__C_8IT"
};


/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");

var _jsxFileName = "C:\\Users\\Tonio\\Works\\Max\\326-onwards-to-a-bigger-project-starting-project\\pages\\[meetupId]\\index.js";
// Meetup Details Component Page
// DYNAMIC Page




const uidDb = 'dbUser';
const pwdDb = 'pr!BRItOXechl2Esp$St';
const nameDb = 'meetups';
const uriMongoDb = `mongodb+srv://${uidDb}:${pwdDb}@cluster0.d4upq.mongodb.net/${nameDb}?retryWrites=true&w=majority`; // const MeetupDetailsPage = () => {

const MeetupDetailsPage = props => {
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
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "description",
          content: props.meetupData.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Meetup Details Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_4__["default"], {
        image: props.meetupData.image,
        title: props.meetupData.title,
        address: props.meetupData.address,
        description: props.meetupData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }, undefined)
  );
}; // when getStaticProps is used on a dynamic page (like this one)
// getStaticPaths must be provided
// BECAUSE: every instance of the dynamic page must be pre-generated
//          at build time e.g for id1,id2, ... id[n-1], id[n]


const getStaticPaths = async () => {
  //
  const mongoClient = await mongodb__WEBPACK_IMPORTED_MODULE_3__["MongoClient"].connect(uriMongoDb);
  const meetupsDb = mongoClient.db();
  const meetupsCollection = meetupsDb.collection('meetups'); // find({}, {_id: 1})
  //      {} ... empty filter criteria
  //          {_id: 1} ... only pull out the _id values

  const MDB_MEETUPS = await meetupsCollection.find({}, {
    _id: 1
  }).toArray();
  mongoClient.close();
  return {
    paths: MDB_MEETUPS.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    })),
    // [
    //   { params: {meetupId: 'm1'} },
    //   { params: {meetupId: 'm2'} },
    //   { params: {meetupId: 'm3'} },
    //   { params: {meetupId: 'm4'} },
    //   { params: {meetupId: 'm5'} },
    // ],
    fallback: false
  };
}; // fallback: false ... when paths supports all possible paths
// fallback: true  ... when paths does not supports all possible paths
//                     NextJS will try to generate the paths dynamically

const getStaticProps = async context => {
  //
  const meetupId = context.params.meetupId; // e.g. fetch data from API

  const mongoClient = await mongodb__WEBPACK_IMPORTED_MODULE_3__["MongoClient"].connect(uriMongoDb);
  const meetupsDb = mongoClient.db();
  const meetupsCollection = meetupsDb.collection('meetups'); // find({}, {_id: 1})
  //      {} ... empty filter criteria
  //          {_id: 1} ... only pull out the _id values
  // const MDB_MEETUPS = await meetupsCollection.find({}, { _id: 1 }).toArray()

  const selectedMeetup = await meetupsCollection.findOne({
    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_3__["ObjectId"])(meetupId)
  });
  mongoClient.close();
  return {
    props: {
      // meetupData: {
      //   img: "images/Kamp's_Earthship.png",
      //   id: meetupId,
      //   title: "Kamp's_Earthship",
      //   address: 'same, random, address',
      //   description: 'some random description',
      // },
      // meetupData: selectedMeetup,
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      }
    },
    revalidate: 10
  };
};
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetailsPage);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWwiLCJwcm9wcyIsImNsYXNzZXMiLCJkZXRhaWwiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwidWlkRGIiLCJwd2REYiIsIm5hbWVEYiIsInVyaU1vbmdvRGIiLCJNZWV0dXBEZXRhaWxzUGFnZSIsIm1lZXR1cERhdGEiLCJnZXRTdGF0aWNQYXRocyIsIm1vbmdvQ2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwibWVldHVwc0RiIiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJNREJfTUVFVFVQUyIsImZpbmQiLCJfaWQiLCJ0b0FycmF5IiwiY2xvc2UiLCJwYXRocyIsIm1hcCIsIm1lZXR1cCIsInBhcmFtcyIsIm1lZXR1cElkIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInNlbGVjdGVkTWVldHVwIiwiZmluZE9uZSIsIk9iamVjdElkIiwiaWQiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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TUFBTWhCLGlCQUFpQixDQUFDaUIsT0FBbEIsQ0FBMEI7QUFBRWIsT0FBRyxFQUFFYyx3REFBUSxDQUFDUCxRQUFEO0FBQWYsR0FBMUIsQ0FBN0I7QUFFQWhCLGFBQVcsQ0FBQ1csS0FBWjtBQUVBLFNBQU87QUFDTHpCLFNBQUssRUFBRTtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQVksZ0JBQVUsRUFBRTtBQUNWMEIsVUFBRSxFQUFFSCxjQUFjLENBQUNaLEdBQWYsQ0FBbUJRLFFBQW5CLEVBRE07QUFFVjNCLGFBQUssRUFBRStCLGNBQWMsQ0FBQy9CLEtBRlo7QUFHVkMsZUFBTyxFQUFFOEIsY0FBYyxDQUFDOUIsT0FIZDtBQUlWRixhQUFLLEVBQUVnQyxjQUFjLENBQUNoQyxLQUpaO0FBS1ZHLG1CQUFXLEVBQUU2QixjQUFjLENBQUM3QjtBQUxsQjtBQVRQLEtBREY7QUFrQkxpQyxjQUFVLEVBQUU7QUFsQlAsR0FBUDtBQW9CRCxDQXJDTTtBQXVDUTVCLGdGQUFmLEU7Ozs7Ozs7Ozs7O0FDbkhBLG9DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL1ttZWV0dXBJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanNcIik7XG4iLCIvLyBNZWV0dXAgRGV0YWlsIENvbXBvbmVudCBQYWdlXHJcblxyXG4vLyBpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL01lZXR1cERldGFpbC5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgTWVldHVwRGV0YWlsID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxyXG4gICAgICB7LyogPGltZyBzcmM9XCJpbWFnZXMvS2FtcCdzX0VhcnRoc2hpcC5wbmdcIiBhbHQ9XCJLYW1wJ3NfRWFydGhzaGlwXCIgLz5cclxuICAgICAgPGFkZHJlc3M+c2FtZSwgcmFuZG9tLCBhZGRyZXNzPC9hZGRyZXNzPlxyXG4gICAgICA8cD5zb21lIHJhbmRvbSBkZXNjcmlwdGlvbjwvcD4gKi99XHJcbiAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gYWx0PXtwcm9wcy50aXRsZX0gLz5cclxuICAgICAgPGgyPntwcm9wcy50aXRsZX08L2gyPlxyXG4gICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XHJcbiAgICAgIDxwPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGV0YWlsXCI6IFwiTWVldHVwRGV0YWlsX2RldGFpbF9fQ184SVRcIlxufTtcbiIsIi8vIE1lZXR1cCBEZXRhaWxzIENvbXBvbmVudCBQYWdlXHJcbi8vIERZTkFNSUMgUGFnZVxyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInXHJcblxyXG5pbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwnXHJcblxyXG5jb25zdCB1aWREYiA9ICdkYlVzZXInXHJcbmNvbnN0IHB3ZERiID0gJ3ByIUJSSXRPWGVjaGwyRXNwJFN0J1xyXG5jb25zdCBuYW1lRGIgPSAnbWVldHVwcydcclxuY29uc3QgdXJpTW9uZ29EYiA9IGBtb25nb2RiK3NydjovLyR7dWlkRGJ9OiR7cHdkRGJ9QGNsdXN0ZXIwLmQ0dXBxLm1vbmdvZGIubmV0LyR7bmFtZURifT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgXHJcblxyXG4vLyBjb25zdCBNZWV0dXBEZXRhaWxzUGFnZSA9ICgpID0+IHtcclxuY29uc3QgTWVldHVwRGV0YWlsc1BhZ2UgPSAocHJvcHMpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZygnRGF0YSBmcm9tIGdldFN0YXRpY1Byb3BzJylcclxuICAvLyBjb25zb2xlLmxvZyhwcm9wcylcclxuICByZXR1cm4gKFxyXG4gICAgICAgIC8vIGltYWdlPVwiaW1hZ2VzL0thbXAnc19FYXJ0aHNoaXAucG5nXCJcclxuICAgICAgICAvLyB0aXRsZT1cIkthbXAnc19FYXJ0aHNoaXBcIlxyXG4gICAgICAgIC8vIGFkZHJlc3M9XCJzYW1lLCByYW5kb20sIGFkZHJlc3NcIlxyXG4gICAgICAgIC8vIGRlc2NyaXB0aW9uPVwic29tZSByYW5kb20gZGVzY3JpcHRpb25cIlxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17IHByb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb24gfSAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxoMT5NZWV0dXAgRGV0YWlscyBQYWdlPC9oMT5cclxuICAgICAgPE1lZXR1cERldGFpbFxyXG4gICAgICAgIGltYWdlPXtwcm9wcy5tZWV0dXBEYXRhLmltYWdlfVxyXG4gICAgICAgIHRpdGxlPXtwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfVxyXG4gICAgICAgIGFkZHJlc3M9e3Byb3BzLm1lZXR1cERhdGEuYWRkcmVzc31cclxuICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG4vLyB3aGVuIGdldFN0YXRpY1Byb3BzIGlzIHVzZWQgb24gYSBkeW5hbWljIHBhZ2UgKGxpa2UgdGhpcyBvbmUpXHJcbi8vIGdldFN0YXRpY1BhdGhzIG11c3QgYmUgcHJvdmlkZWRcclxuLy8gQkVDQVVTRTogZXZlcnkgaW5zdGFuY2Ugb2YgdGhlIGR5bmFtaWMgcGFnZSBtdXN0IGJlIHByZS1nZW5lcmF0ZWRcclxuLy8gICAgICAgICAgYXQgYnVpbGQgdGltZSBlLmcgZm9yIGlkMSxpZDIsIC4uLiBpZFtuLTFdLCBpZFtuXVxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy9cclxuICBjb25zdCBtb25nb0NsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QodXJpTW9uZ29EYilcclxuICBjb25zdCBtZWV0dXBzRGIgPSBtb25nb0NsaWVudC5kYigpXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBtZWV0dXBzRGIuY29sbGVjdGlvbignbWVldHVwcycpXHJcblxyXG4gIC8vIGZpbmQoe30sIHtfaWQ6IDF9KVxyXG4gIC8vICAgICAge30gLi4uIGVtcHR5IGZpbHRlciBjcml0ZXJpYVxyXG4gIC8vICAgICAgICAgIHtfaWQ6IDF9IC4uLiBvbmx5IHB1bGwgb3V0IHRoZSBfaWQgdmFsdWVzXHJcbiAgY29uc3QgTURCX01FRVRVUFMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KClcclxuXHJcbiAgbW9uZ29DbGllbnQuY2xvc2UoKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IE1EQl9NRUVUVVBTLm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHsgbWVldHVwSWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSB9LFxyXG4gICAgfSkpLFxyXG4gICAgLy8gW1xyXG4gICAgLy8gICB7IHBhcmFtczoge21lZXR1cElkOiAnbTEnfSB9LFxyXG4gICAgLy8gICB7IHBhcmFtczoge21lZXR1cElkOiAnbTInfSB9LFxyXG4gICAgLy8gICB7IHBhcmFtczoge21lZXR1cElkOiAnbTMnfSB9LFxyXG4gICAgLy8gICB7IHBhcmFtczoge21lZXR1cElkOiAnbTQnfSB9LFxyXG4gICAgLy8gICB7IHBhcmFtczoge21lZXR1cElkOiAnbTUnfSB9LFxyXG4gICAgLy8gXSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuLy8gZmFsbGJhY2s6IGZhbHNlIC4uLiB3aGVuIHBhdGhzIHN1cHBvcnRzIGFsbCBwb3NzaWJsZSBwYXRoc1xyXG4vLyBmYWxsYmFjazogdHJ1ZSAgLi4uIHdoZW4gcGF0aHMgZG9lcyBub3Qgc3VwcG9ydHMgYWxsIHBvc3NpYmxlIHBhdGhzXHJcbi8vICAgICAgICAgICAgICAgICAgICAgTmV4dEpTIHdpbGwgdHJ5IHRvIGdlbmVyYXRlIHRoZSBwYXRocyBkeW5hbWljYWxseVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAvL1xyXG4gIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWRcclxuXHJcbiAgLy8gZS5nLiBmZXRjaCBkYXRhIGZyb20gQVBJXHJcbiAgY29uc3QgbW9uZ29DbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVyaU1vbmdvRGIpXHJcbiAgY29uc3QgbWVldHVwc0RiID0gbW9uZ29DbGllbnQuZGIoKVxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gbWVldHVwc0RiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKVxyXG5cclxuICAvLyBmaW5kKHt9LCB7X2lkOiAxfSlcclxuICAvLyAgICAgIHt9IC4uLiBlbXB0eSBmaWx0ZXIgY3JpdGVyaWFcclxuICAvLyAgICAgICAgICB7X2lkOiAxfSAuLi4gb25seSBwdWxsIG91dCB0aGUgX2lkIHZhbHVlc1xyXG4gIC8vIGNvbnN0IE1EQl9NRUVUVVBTID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpXHJcbiAgY29uc3Qgc2VsZWN0ZWRNZWV0dXAgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kT25lKHsgX2lkOiBPYmplY3RJZChtZWV0dXBJZCkgfSlcclxuXHJcbiAgbW9uZ29DbGllbnQuY2xvc2UoKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgLy8gbWVldHVwRGF0YToge1xyXG4gICAgICAvLyAgIGltZzogXCJpbWFnZXMvS2FtcCdzX0VhcnRoc2hpcC5wbmdcIixcclxuICAgICAgLy8gICBpZDogbWVldHVwSWQsXHJcbiAgICAgIC8vICAgdGl0bGU6IFwiS2FtcCdzX0VhcnRoc2hpcFwiLFxyXG4gICAgICAvLyAgIGFkZHJlc3M6ICdzYW1lLCByYW5kb20sIGFkZHJlc3MnLFxyXG4gICAgICAvLyAgIGRlc2NyaXB0aW9uOiAnc29tZSByYW5kb20gZGVzY3JpcHRpb24nLFxyXG4gICAgICAvLyB9LFxyXG4gICAgICAvLyBtZWV0dXBEYXRhOiBzZWxlY3RlZE1lZXR1cCxcclxuICAgICAgbWVldHVwRGF0YToge1xyXG4gICAgICAgIGlkOiBzZWxlY3RlZE1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICB0aXRsZTogc2VsZWN0ZWRNZWV0dXAudGl0bGUsXHJcbiAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRNZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogc2VsZWN0ZWRNZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkTWVldHVwLmRlc2NyaXB0aW9uLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDEwLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsc1BhZ2VcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=