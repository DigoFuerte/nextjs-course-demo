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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupItem.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupItem.module.css */ "./components/meetups/MeetupItem.module.css");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Tonio\\Works\\Max\\326-onwards-to-a-bigger-project-starting-project\\components\\meetups\\MeetupItem.js";




const MeetupItem = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const showDetailsHandler = () => {
    router.push(`/${props.id}`);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.image,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.image,
          alt: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
          children: props.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: showDetailsHandler,
          children: "Show Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MeetupItem);

/***/ }),

/***/ "./components/meetups/MeetupItem.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupItem.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "MeetupItem_item__3siMU",
	"image": "MeetupItem_image__13rAP",
	"content": "MeetupItem_content__3uEkT",
	"actions": "MeetupItem_actions__LvT9B"
};


/***/ }),

/***/ "./components/meetups/MeetupList.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MeetupItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupItem */ "./components/meetups/MeetupItem.js");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupList.module.css */ "./components/meetups/MeetupList.module.css");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Tonio\\Works\\Max\\326-onwards-to-a-bigger-project-starting-project\\components\\meetups\\MeetupList.js";



function MeetupList(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,
    children: props.meetups.map(meetup => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MeetupItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: meetup.id,
      image: meetup.image,
      title: meetup.title,
      address: meetup.address
    }, meetup.id, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MeetupList);

/***/ }),

/***/ "./components/meetups/MeetupList.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupList.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "MeetupList_list__1iafn"
};


/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/ui/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Tonio\\Works\\Max\\326-onwards-to-a-bigger-project-starting-project\\components\\ui\\Card.js";


function Card(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

var _jsxFileName = "C:\\Users\\Tonio\\Works\\Max\\326-onwards-to-a-bigger-project-starting-project\\pages\\index.js";
// Home Component Page


const uidDb = 'dbUser';
const pwdDb = 'pr!BRItOXechl2Esp$St';
const nameDb = 'meetups';
const uriMongoDb = `mongodb+srv://${uidDb}:${pwdDb}@cluster0.d4upq.mongodb.net/${nameDb}?retryWrites=true&w=majority`; // console.log('Home Page: 02')
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

const HomePage = props => {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Browse a list of React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "HomePage"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }, undefined);
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


const getStaticProps = async () => {
  // e.g fetch data from an API... etc
  // NextJS allow the use fetch on the server-side
  // BUT using fetch here is a bit redundant, it is run on the server
  // const DB_MEETUPS = await fetch('/api/meetups')
  const mongoClient = await mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect(uriMongoDb);
  const meetupsDb = mongoClient.db();
  const meetupsCollection = meetupsDb.collection('meetups');
  const MDB_MEETUPS = await meetupsCollection.find().toArray();
  console.log('Home Page: 02');
  console.log(`Meetups found: ${MDB_MEETUPS.length}`);
  mongoClient.close(); // getStaticProps must always return an object
  // revalidate (number in seconds) ... enables incremental static generation
  //    if there are requests for this page the data gets regenerated on that frequency
  // meetups: DUMMY_MEETUPS,
  // the call to map() is required because the object returned from MongoDb
  // has an Id object that cannot be handled without code

  return {
    props: {
      meetups: MDB_MEETUPS.map(meetup => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description
      })),
      // props: {
      //   meetups: MDB_MEETUPS,
      // },
      revalidate: 10
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIk1lZXR1cEl0ZW0iLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3dEZXRhaWxzSGFuZGxlciIsInB1c2giLCJpZCIsImNsYXNzZXMiLCJpdGVtIiwiaW1hZ2UiLCJ0aXRsZSIsImNvbnRlbnQiLCJhZGRyZXNzIiwiYWN0aW9ucyIsIk1lZXR1cExpc3QiLCJsaXN0IiwibWVldHVwcyIsIm1hcCIsIm1lZXR1cCIsIkNhcmQiLCJjYXJkIiwiY2hpbGRyZW4iLCJ1aWREYiIsInB3ZERiIiwibmFtZURiIiwidXJpTW9uZ29EYiIsIkhvbWVQYWdlIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRpY1Byb3BzIiwibW9uZ29DbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJtZWV0dXBzRGIiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsIk1EQl9NRUVUVVBTIiwiZmluZCIsInRvQXJyYXkiLCJsZW5ndGgiLCJjbG9zZSIsIl9pZCIsInRvU3RyaW5nIiwiZGVzY3JpcHRpb24iLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxHQUFJQyxLQUFELElBQVc7QUFFNUIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxRQUFNQyxrQkFBa0IsR0FBRyxNQUFNO0FBQy9CRixVQUFNLENBQUNHLElBQVAsQ0FBYSxJQUFHSixLQUFLLENBQUNLLEVBQUcsRUFBekI7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUksYUFBUyxFQUFFQyw2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LEdBQVIsQ0FBWSxlQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFhLGtCQUFpQlMsV0FBVyxDQUFDRyxNQUFPLEVBQWpEO0FBRUFWLGFBQVcsQ0FBQ1csS0FBWixHQWZ3QyxDQWlCeEM7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLFNBQU87QUFDTHhDLFNBQUssRUFBRTtBQUNMZSxhQUFPLEVBQUVxQixXQUFXLENBQUNwQixHQUFaLENBQWlCQyxNQUFELEtBQWE7QUFDcENaLFVBQUUsRUFBRVksTUFBTSxDQUFDd0IsR0FBUCxDQUFXQyxRQUFYLEVBRGdDO0FBRXBDakMsYUFBSyxFQUFFUSxNQUFNLENBQUNSLEtBRnNCO0FBR3BDRSxlQUFPLEVBQUVNLE1BQU0sQ0FBQ04sT0FIb0I7QUFJcENILGFBQUssRUFBRVMsTUFBTSxDQUFDVCxLQUpzQjtBQUtwQ21DLG1CQUFXLEVBQUUxQixNQUFNLENBQUMwQjtBQUxnQixPQUFiLENBQWhCLENBREo7QUFRTDtBQUNBO0FBQ0E7QUFDQUMsZ0JBQVUsRUFBRTtBQVhQO0FBREYsR0FBUDtBQWVELENBdkNNO0FBeUNRbkIsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUM3S0Esb0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IENhcmQgZnJvbSAnLi4vdWkvQ2FyZCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL01lZXR1cEl0ZW0ubW9kdWxlLmNzcyc7XG5cbmNvbnN0IE1lZXR1cEl0ZW0gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHNob3dEZXRhaWxzSGFuZGxlciA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChgLyR7cHJvcHMuaWR9YClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgIDxDYXJkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgPGgzPntwcm9wcy50aXRsZX08L2gzPlxuICAgICAgICAgIDxhZGRyZXNzPntwcm9wcy5hZGRyZXNzfTwvYWRkcmVzcz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0RldGFpbHNIYW5kbGVyfT5TaG93IERldGFpbHM8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwSXRlbTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIml0ZW1cIjogXCJNZWV0dXBJdGVtX2l0ZW1fXzNzaU1VXCIsXG5cdFwiaW1hZ2VcIjogXCJNZWV0dXBJdGVtX2ltYWdlX18xM3JBUFwiLFxuXHRcImNvbnRlbnRcIjogXCJNZWV0dXBJdGVtX2NvbnRlbnRfXzN1RWtUXCIsXG5cdFwiYWN0aW9uc1wiOiBcIk1lZXR1cEl0ZW1fYWN0aW9uc19fTHZUOUJcIlxufTtcbiIsImltcG9ydCBNZWV0dXBJdGVtIGZyb20gJy4vTWVldHVwSXRlbSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL01lZXR1cExpc3QubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIE1lZXR1cExpc3QocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAge3Byb3BzLm1lZXR1cHMubWFwKChtZWV0dXApID0+IChcbiAgICAgICAgPE1lZXR1cEl0ZW1cbiAgICAgICAgICBrZXk9e21lZXR1cC5pZH1cbiAgICAgICAgICBpZD17bWVldHVwLmlkfVxuICAgICAgICAgIGltYWdlPXttZWV0dXAuaW1hZ2V9XG4gICAgICAgICAgdGl0bGU9e21lZXR1cC50aXRsZX1cbiAgICAgICAgICBhZGRyZXNzPXttZWV0dXAuYWRkcmVzc31cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cExpc3Q7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaXN0XCI6IFwiTWVldHVwTGlzdF9saXN0X18xaWFmblwiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9DYXJkLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBDYXJkKHByb3BzKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcIkNhcmRfY2FyZF9fM0tTTE9cIlxufTtcbiIsIi8vIEhvbWUgQ29tcG9uZW50IFBhZ2VcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xyXG5cclxuY29uc3QgdWlkRGIgPSAnZGJVc2VyJ1xyXG5jb25zdCBwd2REYiA9ICdwciFCUkl0T1hlY2hsMkVzcCRTdCdcclxuY29uc3QgbmFtZURiID0gJ21lZXR1cHMnXHJcbmNvbnN0IHVyaU1vbmdvRGIgPSBgbW9uZ29kYitzcnY6Ly8ke3VpZERifToke3B3ZERifUBjbHVzdGVyMC5kNHVwcS5tb25nb2RiLm5ldC8ke25hbWVEYn0/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YFxyXG4vLyBjb25zb2xlLmxvZygnSG9tZSBQYWdlOiAwMicpXHJcbi8vIGNvbnNvbGUubG9nKHVyaU1vbmdvRGIpXHJcblxyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnXHJcblxyXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCdcclxuXHJcbi8vICdodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0ZpbGU6Q29udmVjdGlvbl9iYW5uZXJfMS5qcGcjL21lZGlhL0ZpbGU6Q29udmVjdGlvbl9iYW5uZXJfMS5qcGcnLFxyXG4vLyBcImh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpLYW1wJTI3c19FYXJ0aHNoaXAucG5nIy9tZWRpYS9GaWxlOkthbXAnc19FYXJ0aHNoaXAucG5nXCIsXHJcbi8vICdodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0ZpbGU6RWFydGhzaGlwX0JyaWdodG9uX0Zyb250LmpwZyMvbWVkaWEvRmlsZTpFYXJ0aHNoaXBfQnJpZ2h0b25fRnJvbnQuanBnJyxcclxuLy8gJ2h0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpJbnNpZGVfZ3JlZW5ob3VzZV9vZl9HbG9iYWxfbW9kZWxfRWFydGhzaGlwLkpQRyMvbWVkaWEvRmlsZTpJbnNpZGVfZ3JlZW5ob3VzZV9vZl9HbG9iYWxfbW9kZWxfRWFydGhzaGlwLkpQRycsXHJcbi8vICdodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0ZpbGU6RzJfR2xvYmFsX21vZGVsX0VhcnRoc2hpcF9UYW9zX04uTS4uSlBHIy9tZWRpYS9GaWxlOkcyX0dsb2JhbF9tb2RlbF9FYXJ0aHNoaXBfVGFvc19OLk0uLkpQRycsXHJcblxyXG4vLyBjb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAnbTEnLFxyXG4vLyAgICAgaW1hZ2U6ICdpbWFnZXMvQ29udmVjdGlvbl9iYW5uZXIuanBnJyxcclxuLy8gICAgIHRpdGxlOiAnQ29udmVjdGlvbiBiYW5uZXInLFxyXG4vLyAgICAgYWRkcmVzczogJ0Rlc2lnbicsXHJcbi8vICAgICBkZXNjcmlwdG9wbjogJ21lZXR1cCBvbmUnLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6ICdtMicsXHJcbi8vICAgICBpbWFnZTogXCJpbWFnZXMvS2FtcCdzX0VhcnRoc2hpcC5wbmdcIixcclxuLy8gICAgIHRpdGxlOiBcIkthbXAncyBFYXJ0aHNoaXBcIixcclxuLy8gICAgIGFkZHJlc3M6ICdOZXcgTWV4aWNvJyxcclxuLy8gICAgIGRlc2NyaXB0b3BuOiAnbWVldHVwIHR3bycsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogJ20zJyxcclxuLy8gICAgIGltYWdlOiAnaW1hZ2VzL0VhcnRoc2hpcF9CcmlnaHRvbl9Gcm9udC5qcGcnLFxyXG4vLyAgICAgdGl0bGU6ICdCcmlnaHRvbiBFYXJ0aHNoaXAnLFxyXG4vLyAgICAgYWRkcmVzczogJ0JyaWdodG9uJyxcclxuLy8gICAgIGRlc2NyaXB0b3BuOiAnbWVldHVwIHRocmVlJyxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAnbTQnLFxyXG4vLyAgICAgaW1hZ2U6ICdpbWFnZXMvSW5zaWRlX2dyZWVuaG91c2Vfb2ZfR2xvYmFsX21vZGVsX0VhcnRoc2hpcC5qcGVnJyxcclxuLy8gICAgIHRpdGxlOiAnSW5zaWRlIGdyZWVuaG91c2Ugb2YgR2xvYmFsIG1vZGVsJyxcclxuLy8gICAgIGFkZHJlc3M6ICdOZXcgTWV4aWNvJyxcclxuLy8gICAgIGRlc2NyaXB0b3BuOiAnbWVldHVwIGZvdXInLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6ICdtNScsXHJcbi8vICAgICBpbWFnZTogJ2ltYWdlcy9HbG9iYWxfbW9kZWxfRWFydGhzaGlwX1Rhb3NfTi5NLmpwZWcnLFxyXG4vLyAgICAgdGl0bGU6ICdHbG9iYWwgbW9kZWwgRWFydGhzaGlwIFRhb3MnLFxyXG4vLyAgICAgYWRkcmVzczogJ05ldyBNZXhpY28nLFxyXG4vLyAgICAgZGVzY3JpcHRvcG46ICdtZWV0dXAgZml2ZScsXHJcbi8vICAgfSxcclxuLy8gXVxyXG5cclxuLy8gcHJvcHMgZnJvbSB0aGUgcHJlLXJlbmRlciBjYWxsIHRvIGdldFN0YXRpY1Byb3BzXHJcblxyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIC8vI3JlZ2lvblxyXG4gIC8vXHJcblxyXG4gIC8vIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAvLyB0aGUgZW1wdHkgZGVwZW5kZW5jeSBhcnJheSBtZWFucyB0aGUgZWZmZWN0IGlzIHJ1blxyXG4gIC8vIG9uIHRoZSBpbml0aWFsIHJlbmRlciBvZiB0aGUgY29tcG9uZW50XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAxLiBzZW5kIGh0dHAgcmVxdWVzdCB0byBmZXRjaCBtZWV0dXBzIGRhdGFcclxuICAvLyAyLiBzZXRMb2FkZWRNZWV0dXBzKClcclxuXHJcbiAgLy8gc2ltdWxhdGUgZmV0Y2hpbmcgZGF0YSB2aWEgYW4gaHR0cCByZXF1ZXN0XHJcbiAgLy8gc2V0TG9hZGVkTWVldHVwcyhEVU1NWV9NRUVUVVBTKVxyXG4gIC8vIH0sIFtdKVxyXG4gIC8vICEgTk9URTogdGhlIHVzZUVmZmVjdCBmdW5jdGlvbiBpcyBydW4gYWZ0ZXJcclxuICAvLyAhIHRoZSBjb21wb25lbnQgZnVuY3Rpb24gaGFzIGV4ZWN1dGVkXHJcbiAgLy8gdGhlcmVmb3JlIGluIHRoZSBpbml0aWFsIHJlbmRlciBvZiB0aGUgY29tcG9uZW50XHJcbiAgLy8gIGxvYWRlZE1lZXR1cHMgaXMgZW1wdHlcclxuICAvLyB0aGVuIHRoZSBzdGF0ZSBjaGFuZ2VzIHdoZW4gdGhlIHVzZUVmZmVjdCBmdW5jdGlvbiBpcyBleGVjdXRlZFxyXG4gIC8vIHRoaXMgY2F1c2VzIHRoZSBjb21wb25lbnQgdG8gYmUgcmUtcmVuZGVyZWQuLi4gbG9hZGVkTWVldHVwcyBwb3B1bGF0ZWRcclxuXHJcbiAgLy8gY29uc3QgdGVzdFN0ciA9ICdoamhramZnaGZka2dqaCdcclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgY29uc29sZS5sb2coJ0hvbWUgUGFnZTogMDInKVxyXG4gIGNvbnNvbGUubG9nKHVyaU1vbmdvRGIpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIHsvKiA8TGF5b3V0PiAqL31cclxuICAgICAgey8qIG1vdmVkIGludG8gX2FwcC5qcyAqL31cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlJlYWN0IE1lZXR1cHM8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdCcm93c2UgYSBsaXN0IG9mIFJlYWN0IE1lZXR1cHMnIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGgxPkhvbWVQYWdlPC9oMT5cclxuICAgICAgey8qIDxNZWV0dXBMaXN0IG1lZXR1cHM9e2xvYWRlZE1lZXR1cHN9IC8+ICovfVxyXG4gICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxyXG4gICAgICB7LyogPC9MYXlvdXQ+ICovfVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbi8vIHJ1bnMgb24gdGhlIHNlcnZlciBhZnRlciBkZXBsb3ltZW50XHJcbi8vIGZvciBldmVyeSByZXF1ZXN0IGZvciB0aGlzIGNvbXBvbmVudCBwYWdlXHJcbi8vIGJldHRlciBmb3Igc2l0dWF0aW9ucyB3aGVyZSB0aGUgZGF0YSBjaGFuZ2VzIGZyZXF1ZW50bHkuLi4gZS5nIGV2ZXJ5IHNlY1xyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuLy8gICAvLyBlLmcgZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxyXG5cclxuLy8gICBjb25zdCByZXF1ZXN0T2JqID0gY29udGV4dC5yZXFcclxuLy8gICBjb25zdCByZXNwb25zZU9iaiA9IGNvbnRleHQucmVzXHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxyXG4vLyAgICAgfSxcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIE9ubHkgZm9yIENvbXBvbmVudCBQYWdlLi4uIE5leHRKUyBsb29rcyBmb3IgZ2V0U3RhdGljUHJvcHNcclxuLy8gdG8gcHJvZHVjZSBwYWdlIHByZS1sb2FkZWQgd2l0aCBkYXRhIG9uIHRoZSBzZXJ2ZXIuLi4gbm90IGNsaWVudC1zaWRlXHJcbi8vIGdldFN0YXRpY1Byb3BzIGdldHMgY2FsbGVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGZ1bmN0aW9uXHJcbi8vIE5PVEVTOiBydW5zIGR1cmlvZyB0aGUgYnVpbGQgcHJvY2Vzc1xyXG4vLyBiZXR0ZXIgZm9yIHNpdHVhdGlvbnMgd2hlcmUgdGhlIGRhdGEgZG9lcyBub3QgY2hhbmdlcyBmcmVxdWVudGx5XHJcbi8vIEFEVjogbWFrZXMgdXNlIG9mIGNhY2hpbmdcclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gZS5nIGZldGNoIGRhdGEgZnJvbSBhbiBBUEkuLi4gZXRjXHJcblxyXG4gIC8vIE5leHRKUyBhbGxvdyB0aGUgdXNlIGZldGNoIG9uIHRoZSBzZXJ2ZXItc2lkZVxyXG4gIC8vIEJVVCB1c2luZyBmZXRjaCBoZXJlIGlzIGEgYml0IHJlZHVuZGFudCwgaXQgaXMgcnVuIG9uIHRoZSBzZXJ2ZXJcclxuICAvLyBjb25zdCBEQl9NRUVUVVBTID0gYXdhaXQgZmV0Y2goJy9hcGkvbWVldHVwcycpXHJcblxyXG4gIGNvbnN0IG1vbmdvQ2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCh1cmlNb25nb0RiKVxyXG4gIGNvbnN0IG1lZXR1cHNEYiA9IG1vbmdvQ2xpZW50LmRiKClcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IG1lZXR1cHNEYi5jb2xsZWN0aW9uKCdtZWV0dXBzJylcclxuXHJcbiAgY29uc3QgTURCX01FRVRVUFMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpXHJcbiAgY29uc29sZS5sb2coJ0hvbWUgUGFnZTogMDInKVxyXG4gIGNvbnNvbGUubG9nKGBNZWV0dXBzIGZvdW5kOiAke01EQl9NRUVUVVBTLmxlbmd0aH1gKVxyXG5cclxuICBtb25nb0NsaWVudC5jbG9zZSgpXHJcblxyXG4gIC8vIGdldFN0YXRpY1Byb3BzIG11c3QgYWx3YXlzIHJldHVybiBhbiBvYmplY3RcclxuICAvLyByZXZhbGlkYXRlIChudW1iZXIgaW4gc2Vjb25kcykgLi4uIGVuYWJsZXMgaW5jcmVtZW50YWwgc3RhdGljIGdlbmVyYXRpb25cclxuICAvLyAgICBpZiB0aGVyZSBhcmUgcmVxdWVzdHMgZm9yIHRoaXMgcGFnZSB0aGUgZGF0YSBnZXRzIHJlZ2VuZXJhdGVkIG9uIHRoYXQgZnJlcXVlbmN5XHJcblxyXG4gIC8vIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbiAgLy8gdGhlIGNhbGwgdG8gbWFwKCkgaXMgcmVxdWlyZWQgYmVjYXVzZSB0aGUgb2JqZWN0IHJldHVybmVkIGZyb20gTW9uZ29EYlxyXG4gIC8vIGhhcyBhbiBJZCBvYmplY3QgdGhhdCBjYW5ub3QgYmUgaGFuZGxlZCB3aXRob3V0IGNvZGVcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogTURCX01FRVRVUFMubWFwKChtZWV0dXApID0+ICh7XHJcbiAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IG1lZXR1cC5kZXNjcmlwdGlvbixcclxuICAgICAgfSkpLFxyXG4gICAgICAvLyBwcm9wczoge1xyXG4gICAgICAvLyAgIG1lZXR1cHM6IE1EQl9NRUVUVVBTLFxyXG4gICAgICAvLyB9LFxyXG4gICAgICByZXZhbGlkYXRlOiAxMCxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==