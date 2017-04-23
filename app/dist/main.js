webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "CNAME";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "w3.css";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(30)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(27),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4142537a", Component.options)
  } else {
    hotAPI.reload("data-v-4142537a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(31)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(28),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/components/NavComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NavComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ce863d5", Component.options)
  } else {
    hotAPI.reload("data-v-4ce863d5", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(32)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(29),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/components/FooterComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FooterComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b0d1d37", Component.options)
  } else {
    hotAPI.reload("data-v-7b0d1d37", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_NavComponent_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_NavComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_NavComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_FooterComponent_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_FooterComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_FooterComponent_vue__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: { NavComponent: __WEBPACK_IMPORTED_MODULE_0__components_NavComponent_vue___default.a, FooterComponent: __WEBPACK_IMPORTED_MODULE_1__components_FooterComponent_vue___default.a }
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

//
//
//
//
//
//

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      mobilePageTitle: '',
      mobileMenu: false
    };
  },
  watch: {
    '$route': function $route(to, from) {
      this.mobilePageTitle = to.meta.title;
      if (this.mobileMenu) {
        this.mobileMenu = !this.mobileMenu;
      }
    }
  }
});

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.nav, .navMobileBG {\n  background-color: black;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\n.nav {\n  list-style: none;\n}\n.navMobileBG {\n  height: 40px;\n  margin-bottom: 0px;\n  text-align: center;\n  display: none;\n}\n.navTitle, .navLink {\n  float: left;\n  display: block;\n  color: white;\n  text-decoration: none;\n}\n.navTitle {\n  padding: 5px;\n  font-size: 20px;\n}\n.navMobileTitle {\n  margin: 5px;\n  font-size: 20px;\n  text-decoration: none;\n  display: none;\n  color: white;\n}\n.navLink {\n  padding: 10px;\n}\n.navLink:hover {\n  background-color: #808080;\n}\n.navLink.active {\n  background-color: #808080;\n}\n.navMenu[type=\"checkbox\"], .navMenu[type=checkbox] + label {\n  height: 20px;\n  width: 30px;\n  margin: 10px;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n.navMenu[type=checkbox] + label {\n  z-index: 0;\n}\n.navMenu[type=\"checkbox\"] {\n  z-index: 1;\n  opacity: 0;\n}\n.navMenu[type=checkbox] + label {\n  background: url(" + __webpack_require__(24) + ");\n  background-size: 100%;\n  display: none;\n}\n.navMenu[type=checkbox]:checked + label {\n  background: url(" + __webpack_require__(23) + ");\n  background-size: 100%;\n}\n.navMenu[type=checkbox]:checked + label + .nav {\n  display: block;\n}\n@media screen and (max-width: 600px) {\n.navMobileBG, .navMobileTitle, .navMenu[type=checkbox] + label {\n    display: inline-block;\n}\n.nav, .navTitle {\n    display: none;\n}\n.nav {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.15);\n    top: 40px;\n}\n.navLink {\n    float: none;\n}\n}\n", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n#footer {\n    margin: 0 auto;\n    max-width: 800px;\n    padding: 10px;\n    text-align: center;\n}\n\n", ""]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "imgs/close.svg?6ab99ee581a8a3cf5c60819866fdeb1f";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "imgs/menu.svg?7c8eadc15bfe4d5deb76ca50115d2a47";

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nav-component'), _vm._v(" "), _c('router-view'), _vm._v(" "), _c('footer-component')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4142537a", module.exports)
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "navMobileBG"
  }, [_c('router-link', {
    staticClass: "navMobileTitle",
    attrs: {
      "to": "/"
    }
  }, [_vm._v(_vm._s(_vm.mobilePageTitle))])], 1), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.mobileMenu),
      expression: "mobileMenu"
    }],
    staticClass: "navMenu",
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.mobileMenu) ? _vm._i(_vm.mobileMenu, null) > -1 : (_vm.mobileMenu)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.mobileMenu,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.mobileMenu = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.mobileMenu = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.mobileMenu = $$c
        }
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "navMenu"
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "nav"
  }, [_c('li', [_c('router-link', {
    staticClass: "navTitle",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("CleanEarth.Life")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    staticClass: "navLink",
    attrs: {
      "active-class": "active",
      "to": "/",
      "exact": ""
    }
  }, [_vm._v("Home")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    staticClass: "navLink",
    attrs: {
      "active-class": "active",
      "to": "/profile"
    }
  }, [_vm._v("Profile")])], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4ce863d5", module.exports)
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', {
    attrs: {
      "id": "footer"
    }
  }, [_vm._v(" Made with ❤ by "), _c('a', {
    attrs: {
      "href": "https://github.com/RKarkala",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Rohith Karkala")]), _vm._v(", "), _c('a', {
    attrs: {
      "href": "https://github.com/stephenhales",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Stephen Hales")]), _vm._v(", and "), _c('a', {
    attrs: {
      "href": "https://github.com/kushagharahi/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Kusha Gharahi")]), _vm._v(" at "), _c('a', {
    attrs: {
      "href": "http://hackdfw.com/earthack/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Earthack 2017")]), _vm._v(" in Dallas! ")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7b0d1d37", module.exports)
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2d110ecc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4142537a\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4142537a\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("a7dfc858", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4ce863d5\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4ce863d5\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("146b8bc4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7b0d1d37\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FooterComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7b0d1d37\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FooterComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_resource__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App_vue__);





var VueSmoothScroll = __webpack_require__(11);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(VueSmoothScroll);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */])
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_resource__["a" /* default */])

__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(5);

const router = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]({
	mode: 'history',
	routes: [
		{
		path: '/',
		component: view('HomeComponent'),
		meta: {title: 'CleanEarth.Life'}
		},
		{
		path: '/profile',
		component: viewProfile('ProfileComponent'),
		meta: {title: 'Find your Impact'}
	}]
});

function view (name) {
  return function (resolve) {
    __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(34)("./" + name + '.vue')]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
  }
}

function viewProfile (name) {
  return function (resolve) {
    __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(35)("./" + name + '.vue')]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
  }
}

router.beforeEach(function (to, from, next) {
	document.title = to.meta.title
	next()
});

const root = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
	el: '#app',
	router: router,
	render: function (h) {
		return h(__WEBPACK_IMPORTED_MODULE_3__App_vue___default.a)
	},
	replace: false
});

/***/ }),
/* 37 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[36]);