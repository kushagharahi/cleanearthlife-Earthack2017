webpackJsonp([0],{

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_resource__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(2);
throw new Error("Cannot find module \"App.vue\"");





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */])
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_resource__["a" /* default */])

const router = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [
  ]
})

router.beforeEach(function (to, from, next) {
  document.title = to.meta.title
  next()
})

const root = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: router,
  render: function(h){
    return h(__WEBPACK_IMPORTED_MODULE_3_App_vue___default.a)
  },
  replace: false
})

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[5]);