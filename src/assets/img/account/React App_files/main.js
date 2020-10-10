(this["webpackJsonpecommerce"] = this["webpackJsonpecommerce"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".material-icons {\n  display: inline-flex;\n  vertical-align: top;\n}\n\nnav ul a.btn, nav ul a.btn-floating {\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-top: 0;\n}\n\n/* used to center social image in account button (header)*/\n.center-profile-image {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n\n/* .btn{\n  border: 1px solid #d50000;\n} */\n\n.valign-wrapper { /* vertical align fix: materialize css*/\n  flex-wrap: wrap;\n}\n\n/*chrome search bar fix*/\nnav .nav-wrapper form, nav .nav-wrapper form .input-field{\n  height: 56px !important; \n}\n\n/* .input-field label {\n  -webkit-transform: translateY(0px) !important;\n  transform: translateY(0px) !important;\n} */\n\n@media only screen and (min-width: 601px) {\n  nav .nav-wrapper form, nav .nav-wrapper form .input-field{\n    height: 64px !important; \n  }\n}\n/*chrome search bar fix*/\n\n/* Placeholder color*/\n\n::placeholder { /* Most modern browsers support this now. */\n color:    #263238;\n opacity:  1;\n}\n/* Placeholder color*/", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen.css":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen.css ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../../Fonts/OpenSansCondensed/OpenSansCondensed-Light.ttf */ "./src/Fonts/OpenSansCondensed/OpenSansCondensed-Light.ttf");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Open Sans Condensed Light\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.super-simple-loading-screen {\n  width: 100%;\n}\n\n/* loading dots */\n\n.super-simple-loading {\n    /* margin: 0 auto 0 auto;\n    animation: super-simple-loading-text-animation 1s infinite;\n    font-family: \"Open Sans Condensed Light\";\n    position: relative;\n    top: -1rem; */\n    position: absolute;\n    /* top: 50%; */\n    /* left: 50%; */\n    margin: auto;\n    top: 50vh;\n    bottom: 50vh;\n    left: 0;\n    right: 0;\n    /* transform: translate(-50%, -50%);\n    transform: -webkit-translate(-50%, -50%);\n    transform: -moz-translate(-50%, -50%);\n    transform: -ms-translate(-50%, -50%); */\n    color:darkred;\n}\n  \n@keyframes super-simple-loading-text-animation {\n  0%, 20% {\n    color: rgba(0,0,0,0);\n    text-shadow:\n      .25em 0 0 rgba(0,0,0,0),\n      .5em 0 0 rgba(0,0,0,0);\n  }\n  40% {\n    color: white;\n    text-shadow:\n      .25em 0 0 rgba(0,0,0,0),\n      .5em 0 0 rgba(0,0,0,0);\n  }\n  60% {\n    text-shadow:\n      .25em 0 0 white,\n      .5em 0 0 rgba(0,0,0,0);\n  } \n  80%, 100% {\n    text-shadow:\n      .25em 0 0 white,\n      .5em 0 0 white;\n  }\n}\n  ", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var materialize_css_dist_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! materialize-css/dist/css/materialize.min.css */ "./node_modules/materialize-css/dist/css/materialize.min.css");
/* harmony import */ var materialize_css_dist_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var progress_tracker_src_styles_progress_tracker_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! progress-tracker/src/styles/progress-tracker.scss */ "./node_modules/progress-tracker/src/styles/progress-tracker.scss");
/* harmony import */ var progress_tracker_src_styles_progress_tracker_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(progress_tracker_src_styles_progress_tracker_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utilities_LoadingScreen_SuperSimpleLoadingScreen_SuperSimpleLoadingScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen */ "./src/Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen.js");
/* harmony import */ var _Pages_Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/Routes */ "./src/Pages/Routes.js");
/* harmony import */ var _PageBlocks_GoogleAccount_GoogleAccountInit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PageBlocks/GoogleAccount/GoogleAccountInit */ "./src/PageBlocks/GoogleAccount/GoogleAccountInit.js");
/* harmony import */ var _Globals_Config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Globals/Config */ "./src/Globals/Config.js");
/* harmony import */ var _Globals_ReduxStores_UserSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Globals/ReduxStores/UserSlice */ "./src/Globals/ReduxStores/UserSlice.js");
/* harmony import */ var _Globals_ReduxStores_AppSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Globals/ReduxStores/AppSlice */ "./src/Globals/ReduxStores/AppSlice.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Globals_PathConstants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Globals/PathConstants */ "./src/Globals/PathConstants.js");
/* harmony import */ var _Globals_Graphql_QueryTemplates_Categories__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Globals/Graphql/QueryTemplates/Categories */ "./src/Globals/Graphql/QueryTemplates/Categories.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
var _jsxFileName = "/home/madhanmurali/internship/ecommerce-git/ecommerce-1/src/App.js";

 //CSS imports

 // keep this as first css import -- do not change line pos --

 //SASS imports

 //JS imports











const Header = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./PageBlocks/Header/Header */ "./src/PageBlocks/Header/Header.js")));
const Footer = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./PageBlocks/Footer/Footer */ "./src/PageBlocks/Footer/Footer.js")));
const App = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function App({
  store
}) {
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const app = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.app);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useHistory"])();
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useLocation"])();
  const [googleAuth2, setGoogleAuth2] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [appLoggingIn, setAppLoggingIn] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [appLoading, setAppLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); //categories -- start

  const [categories, setCategories] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [getCategories, {
    loading: categoriesLoading,
    data: categoriesData,
    error: categoriesError
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_14__["useLazyQuery"])(_Globals_Graphql_QueryTemplates_Categories__WEBPACK_IMPORTED_MODULE_13__["GET_CATEGORIES"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_Globals_ReduxStores_AppSlice__WEBPACK_IMPORTED_MODULE_10__["update"])({
      loading: true
    }));
    getCategories({
      variables: {
        Authorization: Object(_Globals_Config__WEBPACK_IMPORTED_MODULE_8__["getRequestToken"])()
      }
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setCategories(categoriesData);
  }, [categoriesLoading]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (categories) dispatch(Object(_Globals_ReduxStores_AppSlice__WEBPACK_IMPORTED_MODULE_10__["update"])({
      loading: false
    }));
  }, [categories]); //Categories -- end
  //Sub Categories -- start

  const [subCategories, setSubCategories] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [getSubCategories, {
    loading: subCategoriesLoading,
    data: subCategoriesData,
    error: subCategoriesError
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_14__["useLazyQuery"])(_Globals_Graphql_QueryTemplates_Categories__WEBPACK_IMPORTED_MODULE_13__["GET_SUB_CATEGORIES"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const subCategoriesFunc = () => {
      dispatch(Object(_Globals_ReduxStores_AppSlice__WEBPACK_IMPORTED_MODULE_10__["update"])({
        loading: true
      }));
      getSubCategories({
        variables: {
          Authorization: Object(_Globals_Config__WEBPACK_IMPORTED_MODULE_8__["getRequestToken"])(),
          item_category_id: categories["getCategory"][0]["id"]
        }
      }); // Object.keys(categories["getCategoryList"]).forEach( (categoryKey) => {
      //   console.log(categoryKey)
      //   console.log(categories["getCategoryList"][categoryKey]["id"])
      //   getSubCategories( {
      //     variables: { 
      //         Authorization: getRequestToken(),
      //         item_category_id: categories["getCategoryList"][categoryKey]["id"]
      //     }
      //   });
      //   console.log(subCategoriesData, subCategoriesError);
      // });
    };

    if (categories) {
      subCategoriesFunc();
    }
  }, [categories]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setSubCategories(subCategoriesData);
  }, [subCategoriesLoading]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (subCategories) {
      console.log(subCategories, subCategoriesError);
      dispatch(Object(_Globals_ReduxStores_AppSlice__WEBPACK_IMPORTED_MODULE_10__["update"])({
        loading: false
      }));
    }
  }, [subCategories]); //Sub Categories -- end

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const previously_signed_in = localStorage.getItem(_Globals_Config__WEBPACK_IMPORTED_MODULE_8__["LOCAL_STORAGE_NAMES"].PREVIOUSLY_SIGNED_IN);
    const previous_sign_in_method = localStorage.getItem(_Globals_Config__WEBPACK_IMPORTED_MODULE_8__["LOCAL_STORAGE_NAMES"].PREVIOUS_SIGN_IN_METHOD);

    if (previously_signed_in) {
      dispatch(Object(_Globals_ReduxStores_UserSlice__WEBPACK_IMPORTED_MODULE_9__["updatePreviousState"])({
        previously_signed_in: previously_signed_in,
        previous_sign_in_method: previous_sign_in_method
      }));
      dispatch(Object(_Globals_ReduxStores_AppSlice__WEBPACK_IMPORTED_MODULE_10__["update"])({
        previously_requested_page: window.location.pathname,
        signing_in: true
      }));
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.gapi.load('auth2', function () {
      window.gapi.auth2.init({
        client_id: _Globals_Config__WEBPACK_IMPORTED_MODULE_8__["GOOGLE_CLIENT_ID"]
      }).then(function (auth2) {
        console.log("Google Auth Library loaded");
        Object(_PageBlocks_GoogleAccount_GoogleAccountInit__WEBPACK_IMPORTED_MODULE_7__["default"])(store.dispatch, auth2);
        setGoogleAuth2(auth2);
      });
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setAppLoggingIn(app.signing_in);
  }, [app.signing_in]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setAppLoading(app.loading);
    console.log(app.loading);
  }, [app.loading]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (user.signed_in) {
      if (app.previously_requested_page) {
        history.push(app.previously_requested_page);
      } else {
        history.push(_Globals_PathConstants__WEBPACK_IMPORTED_MODULE_12__["HOME"]);
      }

      dispatch(Object(_Globals_ReduxStores_AppSlice__WEBPACK_IMPORTED_MODULE_10__["update"])({
        signing_in: false
      }));
    }
  }, [user.signed_in]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (location.pathname != _Globals_PathConstants__WEBPACK_IMPORTED_MODULE_12__["SIGNIN"] && location.pathname != _Globals_PathConstants__WEBPACK_IMPORTED_MODULE_12__["SIGNUP"]) {
      dispatch(Object(_Globals_ReduxStores_AppSlice__WEBPACK_IMPORTED_MODULE_10__["update"])({
        previously_requested_page: location.pathname
      }));
    }
  }, [location]);
  const page = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Routes__WEBPACK_IMPORTED_MODULE_6__["default"], {
    user: user,
    app: app,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 19
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utilities_LoadingScreen_SuperSimpleLoadingScreen_SuperSimpleLoadingScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 29
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Globals_Config__WEBPACK_IMPORTED_MODULE_8__["GAuth2Context"].Provider, {
    value: googleAuth2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Globals_Config__WEBPACK_IMPORTED_MODULE_8__["CategoriesContext"].Provider, {
    value: categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, appLoggingIn || appLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utilities_LoadingScreen_SuperSimpleLoadingScreen_SuperSimpleLoadingScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 19
    }
  }) : page))));
});
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Fonts/OpenSansCondensed/OpenSansCondensed-Light.ttf":
/*!*****************************************************************!*\
  !*** ./src/Fonts/OpenSansCondensed/OpenSansCondensed-Light.ttf ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/OpenSansCondensed-Light.3589bddb.ttf";

/***/ }),

/***/ "./src/Globals/AuthenticateRoute.js":
/*!******************************************!*\
  !*** ./src/Globals/AuthenticateRoute.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _PathConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PathConstants */ "./src/Globals/PathConstants.js");
var _jsxFileName = "/home/madhanmurali/internship/ecommerce-git/ecommerce-1/src/Globals/AuthenticateRoute.js";




const AuthenticateRoute = props => {
  const [route, setRoute] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setRoute(props.user.signed_in ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], Object.assign({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 20
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: _PathConstants__WEBPACK_IMPORTED_MODULE_2__["SIGNIN"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 20
      }
    }));
  }, [location]);
  return route;
};

/* harmony default export */ __webpack_exports__["default"] = (AuthenticateRoute);

/***/ }),

/***/ "./src/Globals/Config.js":
/*!*******************************!*\
  !*** ./src/Globals/Config.js ***!
  \*******************************/
/*! exports provided: client, getRequestToken, getClientIp, GRAPHQL_URL, GOOGLE_CLIENT_ID, LOCAL_STORAGE_NAMES, SIGN_IN_METHOD, GAuth2Context, CategoriesContext, SubCategoriesContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequestToken", function() { return getRequestToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientIp", function() { return getClientIp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAPHQL_URL", function() { return GRAPHQL_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_CLIENT_ID", function() { return GOOGLE_CLIENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_NAMES", function() { return LOCAL_STORAGE_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_METHOD", function() { return SIGN_IN_METHOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAuth2Context", function() { return GAuth2Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesContext", function() { return CategoriesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoriesContext", function() { return SubCategoriesContext; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
//This file contains some some cofigurations and frequently used global constants


 //constants

const GRAPHQL_URL = 'https://www.healthcarecrm.vimkes.com/graphql'; // const GRAPHQL_URL = 'http://192.168.1.11:8080/graphql';

const GOOGLE_CLIENT_ID = '499502244846-qh11f356nmvglbs38cna4lnu1gc4os47.apps.googleusercontent.com';
const LOCAL_STORAGE_NAMES = {
  PREVIOUS_SIGN_IN_METHOD: "previous_sign_in_method",
  PREVIOUSLY_SIGNED_IN: "previously_signed_in"
};
const SIGN_IN_METHOD = {
  GOOGLE: "google",
  NATIVE: "native"
};
const link = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__["createHttpLink"])({
  uri: GRAPHQL_URL // credentials: 'include'

});
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"](),
  link
});

const getRequestToken = () => {
  var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

  var now = moment(new Date()).format('MMM DD YYYY h:mm');

  var sha1 = __webpack_require__(/*! sha1 */ "./node_modules/sha1/sha1.js");

  sha1 = sha1(now + "vimkes");
  return sha1;
};

const getClientIp = async () => {
  const response = await fetch('https://api.ipify.org/?format=json');
  const data = await response.json();
  return data["ip"];
};

const GAuth2Context = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])(undefined);
const CategoriesContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])(undefined);
const SubCategoriesContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])(undefined);


/***/ }),

/***/ "./src/Globals/Graphql/QueryTemplates/Categories.js":
/*!**********************************************************!*\
  !*** ./src/Globals/Graphql/QueryTemplates/Categories.js ***!
  \**********************************************************/
/*! exports provided: GET_CATEGORIES, GET_SUB_CATEGORIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES", function() { return GET_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUB_CATEGORIES", function() { return GET_SUB_CATEGORIES; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
//Categories and sub categories related queries

const GET_CATEGORIES_LIST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query GET_CATEGORIES_LIST ($Authorization: String!) {
        getCategoryList(Authorization: $Authorization) {
            id
            item_category_type
            item_category_name
            description
            branch_id
            company_id
            image_address
            message
          }
    }
`;
const GET_CATEGORIES = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query GET_CATEGORIES ($Authorization: String!) {
        getCategory(Authorization: $Authorization) {
            id
            item_category_type
            item_category_name
            description
            branch_id
            company_id
            image_address
            message
            itemSubCategory {
                id
                item_sub_category_name
                item_category_id
                description
                branch_id
                company_id
                image_address
                message
            }
          }
    }
`;
const GET_SUB_CATEGORIES = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query GET_SUB_CATEGORIES ($Authorization: String!, $item_category_id: String!) {
        getSubCategoryList(Authorization: $Authorization, item_category_id: $item_category_id) {
            id
            item_category_id
            item_sub_category_name
            description
            branch_id
            company_id
            message
            image_address
          }
    }
`;


/***/ }),

/***/ "./src/Globals/PathConstants.js":
/*!**************************************!*\
  !*** ./src/Globals/PathConstants.js ***!
  \**************************************/
/*! exports provided: HOME, PRODUCTS, PRODUCT_VIEW, SIGNIN, SIGNUP, CHECKOUT, CONTACT_US, PROFILE, SIGNED_IN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS", function() { return PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_VIEW", function() { return PRODUCT_VIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN", function() { return SIGNIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT", function() { return CHECKOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTACT_US", function() { return CONTACT_US; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE", function() { return PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNED_IN", function() { return SIGNED_IN; });
//constants --- page paths: used to check paths in Route component
//Base Paths
const HOME = "/";
const PRODUCTS = "/products";
const PRODUCT_VIEW = "/product-view";
const SIGNIN = "/signin";
const SIGNUP = "/signup";
const CHECKOUT = "/checkout";
const CONTACT_US = "/contact-us";
const PROFILE = "/profile"; //other related constants

const SIGNED_IN = "signedIn";


/***/ }),

/***/ "./src/Globals/ReduxStores/AppSlice.js":
/*!*********************************************!*\
  !*** ./src/Globals/ReduxStores/AppSlice.js ***!
  \*********************************************/
/*! exports provided: userSlice, update, reset, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSlice", function() { return userSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const userSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'app',
  initialState: {
    previously_requested_page: null,
    loading: false,
    signing_in: false
  },
  reducers: {
    update: (state, action) => {
      return { ...state,
        ...action.payload
      };
    },
    reset: state => {
      return { ...state,
        previously_requested_page: null,
        loading: false,
        signing_in: false
      };
    }
  }
});
const {
  update,
  reset
} = userSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (userSlice.reducer);

/***/ }),

/***/ "./src/Globals/ReduxStores/Store.js":
/*!******************************************!*\
  !*** ./src/Globals/ReduxStores/Store.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _UserSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSlice */ "./src/Globals/ReduxStores/UserSlice.js");
/* harmony import */ var _AppSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppSlice */ "./src/Globals/ReduxStores/AppSlice.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
  reducer: {
    user: _UserSlice__WEBPACK_IMPORTED_MODULE_1__["default"],
    app: _AppSlice__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
}));

/***/ }),

/***/ "./src/Globals/ReduxStores/UserSlice.js":
/*!**********************************************!*\
  !*** ./src/Globals/ReduxStores/UserSlice.js ***!
  \**********************************************/
/*! exports provided: userSlice, login, logout, updatePreviousState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSlice", function() { return userSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePreviousState", function() { return updatePreviousState; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const userSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'user',
  initialState: {
    social_id_type: null,
    first_name: null,
    last_name: null,
    email_id: null,
    image_address: null,
    mobile_no: null,
    authorization_token: null,
    signed_in: false,
    previous_sign_in_method: null,
    previously_signed_in: false
  },
  reducers: {
    updatePreviousState: (state, action) => {
      return { ...state,
        ...action.payload
      };
    },
    login: (state, action) => {
      return { ...state,
        ...action.payload,
        signed_in: true
      };
    },
    logout: state => {
      return { ...state,
        social_id_type: null,
        first_name: null,
        last_name: null,
        email_id: null,
        image_address: null,
        mobile_no: null,
        authorization_token: null,
        signed_in: false,
        previous_sign_in_method: null,
        previously_signed_in: false
      };
    }
  }
});
const {
  login,
  logout,
  updatePreviousState
} = userSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (userSlice.reducer);

/***/ }),

/***/ "./src/PageBlocks/GoogleAccount/GoogleAccountInit.js":
/*!***********************************************************!*\
  !*** ./src/PageBlocks/GoogleAccount/GoogleAccountInit.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Globals_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Globals/Config */ "./src/Globals/Config.js");
/* harmony import */ var _Globals_ReduxStores_AppSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Globals/ReduxStores/AppSlice */ "./src/Globals/ReduxStores/AppSlice.js");
/* harmony import */ var _Globals_ReduxStores_UserSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Globals/ReduxStores/UserSlice */ "./src/Globals/ReduxStores/UserSlice.js");




const GoogleAccountInit = (dispatchCallback, auth2) => {
  const dispatch = dispatchCallback;
  const signedIn = auth2.isSignedIn.get();
  const GOOGLE_SIGN_IN_MUTATION = `mutation LoginWithSocialID($social_id_type: String, $social_id: String, $first_name: String, $last_name: String, $email_id: String, $image_address: String, $client_ip: String, $request_token: String) {
        LoginWithSocialID(social_id_type: $social_id_type, social_id: $social_id, first_name: $first_name, last_name: $last_name, email_id: $email_id, image_address: $image_address, client_ip: $client_ip, request_token: $request_token) {
            message,
            token,
        }
    }`;

  const signInCallBack = async signedIn => {
    console.log('signInCallback', signedIn);

    if (signedIn) {
      dispatch(Object(_Globals_ReduxStores_AppSlice__WEBPACK_IMPORTED_MODULE_1__["update"])({
        signing_in: true
      }));
      const currentUser = auth2.currentUser.get();
      const profile = currentUser.getBasicProfile();
      const signInMutationVariables = {
        social_id_type: _Globals_Config__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_METHOD"].GOOGLE,
        social_id: profile.getId(),
        first_name: profile.getGivenName(),
        last_name: profile.getFamilyName(),
        email_id: profile.getEmail(),
        image_address: profile.getImageUrl(),
        client_ip: await Object(_Globals_Config__WEBPACK_IMPORTED_MODULE_0__["getClientIp"])(),
        request_token: Object(_Globals_Config__WEBPACK_IMPORTED_MODULE_0__["getRequestToken"])()
      };
      fetch(_Globals_Config__WEBPACK_IMPORTED_MODULE_0__["GRAPHQL_URL"], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          query: GOOGLE_SIGN_IN_MUTATION,
          variables: signInMutationVariables
        })
      }).then(response => response.json()).then(response => {
        console.log(response);

        if (response.data.LoginWithSocialID['message'] === "SUCCESS") {
          let token = response.data.LoginWithSocialID['token'];
          localStorage.setItem(_Globals_Config__WEBPACK_IMPORTED_MODULE_0__["LOCAL_STORAGE_NAMES"].PREVIOUS_SIGN_IN_METHOD, _Globals_Config__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_METHOD"].GOOGLE);
          localStorage.setItem(_Globals_Config__WEBPACK_IMPORTED_MODULE_0__["LOCAL_STORAGE_NAMES"].PREVIOUSLY_SIGNED_IN, true); //used to reuse signInMutationVariables with redux store

          const userState = ({
            client_ip,
            request_token,
            social_id,
            ...rest
          }) => rest;

          dispatch(Object(_Globals_ReduxStores_UserSlice__WEBPACK_IMPORTED_MODULE_2__["login"])({ ...userState(signInMutationVariables),
            authorization_token: token
          }));
        } else {
          alert("Login With Social ID error " + response.data.LoginWithSocialID['message']);
          auth2.signOut();
        }
      }).catch(err => console.log("Google Sign In Callback Error: ", err)).finally(() => {
        dispatch(Object(_Globals_ReduxStores_AppSlice__WEBPACK_IMPORTED_MODULE_1__["update"])({
          signing_in: false
        }));
      });
      console.log(signInMutationVariables);
    }
  };

  if (signedIn) {
    signInCallBack(signedIn);
    auth2.isSignedIn.listen(signInCallBack);
  } else {
    auth2.isSignedIn.listen(signInCallBack);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (GoogleAccountInit);

/***/ }),

/***/ "./src/Pages/Routes.js":
/*!*****************************!*\
  !*** ./src/Pages/Routes.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Globals_AuthenticateRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Globals/AuthenticateRoute */ "./src/Globals/AuthenticateRoute.js");
/* harmony import */ var _Globals_PathConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Globals/PathConstants */ "./src/Globals/PathConstants.js");
var _jsxFileName = "/home/madhanmurali/internship/ecommerce-git/ecommerce-1/src/Pages/Routes.js";




const Home = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(8), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ./Home/Home */ "./src/Pages/Home/Home.js")));
const Products = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./Products/Products */ "./src/Pages/Products/Products.js")));
const ProductView = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./ProductView/ProductView */ "./src/Pages/ProductView/ProductView.js")));
const SignupSM = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, /*! ./Account/signup_sm */ "./src/Pages/Account/signup_sm.js")));
const LoginSM = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, /*! ./Account/login_sm */ "./src/Pages/Account/login_sm.js")));
const CheckOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! ./checkout/checkout */ "./src/Pages/checkout/checkout.js")));
const ContactUs = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! ./ContactUs/ContactUs */ "./src/Pages/ContactUs/ContactUs.js")));
const Profile = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./Account/Profile/Profile */ "./src/Pages/Account/Profile/Profile.js"))); // const Cart=lazy( () => import('./Cart/cart') );
// const WishList=lazy( () => import('./Cart/wish') );

const Routes = ({
  user
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: _Globals_PathConstants__WEBPACK_IMPORTED_MODULE_3__["HOME"],
    component: Home,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: _Globals_PathConstants__WEBPACK_IMPORTED_MODULE_3__["PRODUCTS"],
    component: Products,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: _Globals_PathConstants__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_VIEW"],
    component: ProductView,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: _Globals_PathConstants__WEBPACK_IMPORTED_MODULE_3__["SIGNIN"],
    component: LoginSM,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: _Globals_PathConstants__WEBPACK_IMPORTED_MODULE_3__["SIGNUP"],
    component: SignupSM,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: _Globals_PathConstants__WEBPACK_IMPORTED_MODULE_3__["CHECKOUT"],
    component: CheckOut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: _Globals_PathConstants__WEBPACK_IMPORTED_MODULE_3__["CONTACT_US"],
    component: ContactUs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Globals_AuthenticateRoute__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: _Globals_PathConstants__WEBPACK_IMPORTED_MODULE_3__["PROFILE"],
    component: Profile,
    user: user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ "./src/Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen.css":
/*!*******************************************************************************************!*\
  !*** ./src/Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./SuperSimpleLoadingScreen.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./SuperSimpleLoadingScreen.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./SuperSimpleLoadingScreen.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen.js":
/*!******************************************************************************************!*\
  !*** ./src/Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SuperSimpleLoadingScreen_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuperSimpleLoadingScreen.css */ "./src/Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen.css");
/* harmony import */ var _SuperSimpleLoadingScreen_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SuperSimpleLoadingScreen_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/madhanmurali/internship/ecommerce-git/ecommerce-1/src/Utilities/LoadingScreen/SuperSimpleLoadingScreen/SuperSimpleLoadingScreen.js";



const SuperSimpleLoadingScreen = () => {
  return (
    /*#__PURE__*/
    // <div className="super-simple-loading-screen valign-wrapper">
    //     <h4 className="super-simple-loading">Loading...</h4>
    // </div>
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "super-simple-loading-screen valign-wrapper",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "preloader-wrapper big active super-simple-loading",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "spinner-layer spinner-green-only",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "circle-clipper left",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "circle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 15
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "gap-patch",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "circle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "circle-clipper right",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "circle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    })))))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (SuperSimpleLoadingScreen);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _Globals_Config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Globals/Config */ "./src/Globals/Config.js");
/* harmony import */ var _Globals_ReduxStores_Store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Globals/ReduxStores/Store */ "./src/Globals/ReduxStores/Store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/home/madhanmurali/internship/ecommerce-git/ecommerce-1/src/index.js";









react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
  client: _Globals_Config__WEBPACK_IMPORTED_MODULE_5__["client"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
  store: _Globals_ReduxStores_Store__WEBPACK_IMPORTED_MODULE_6__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_8__["default"], {
  store: _Globals_ReduxStores_Store__WEBPACK_IMPORTED_MODULE_6__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
})))), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_2__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/madhanmurali/internship/ecommerce-git/ecommerce-1/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/madhanmurali/internship/ecommerce-git/ecommerce-1/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/madhanmurali/internship/ecommerce-git/ecommerce-1/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",16]]]);
//# sourceMappingURL=main.chunk.js.map