webpackJsonp([0],Array(33).concat([
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ConclusionComponent.vue": 52,
	"./FooterComponent.vue": 13,
	"./HomeComponent.vue": 53,
	"./IntroComponent.vue": 54,
	"./LightsComponent.vue": 55,
	"./LoginComponent.vue": 56,
	"./NavComponent.vue": 12,
	"./PollutionComponent.vue": 57,
	"./WaterComponent.vue": 58,
	"./profile/EnergyProfileComponent.vue": 37,
	"./profile/PollutionProfileComponent.vue": 38,
	"./profile/ProfileComponent.vue": 45,
	"./profile/WaterProfileComponent.vue": 39
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 33;

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(47),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\rkark\\Documents\\Projects\\JavaLoginTemplate\\LoginProject\\app\\src\\scripts\\components\\profile\\EnergyProfileComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] EnergyProfileComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f4b651d", Component.options)
  } else {
    hotAPI.reload("data-v-1f4b651d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(51)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\rkark\\Documents\\Projects\\JavaLoginTemplate\\LoginProject\\app\\src\\scripts\\components\\profile\\PollutionProfileComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PollutionProfileComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-981986e6", Component.options)
  } else {
    hotAPI.reload("data-v-981986e6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(46),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\rkark\\Documents\\Projects\\JavaLoginTemplate\\LoginProject\\app\\src\\scripts\\components\\profile\\WaterProfileComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] WaterProfileComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12a113fa", Component.options)
  } else {
    hotAPI.reload("data-v-12a113fa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports) {

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

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WaterProfileComponent_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WaterProfileComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__WaterProfileComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PollutionProfileComponent_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PollutionProfileComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__PollutionProfileComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EnergyProfileComponent_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EnergyProfileComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__EnergyProfileComponent_vue__);
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
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'profile',
  components: { WaterProfileComponent: __WEBPACK_IMPORTED_MODULE_0__WaterProfileComponent_vue___default.a, PollutionProfileComponent: __WEBPACK_IMPORTED_MODULE_1__PollutionProfileComponent_vue___default.a, EnergyProfileComponent: __WEBPACK_IMPORTED_MODULE_2__EnergyProfileComponent_vue___default.a },
  methods: {}
});

/***/ }),
/* 42 */
/***/ (function(module, exports) {

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

var temp = total;
var options = {
	chart: {
		type: 'column'
	},
	title: {
		text: 'Water Usage'
	},
	xAxis: {
		categories: ['']
	},
	yAxis: {
		min: 0,
		title: {
			text: "Gallons (G)"
		}
	},
	plotOptions: {
		column: {
			pointPadding: 0.2,
			borderWidth: 0
		}
	},
	series: [{
		name: 'Your Use',
		color: color,
		data: [temp]
	}, {
		name: 'Average Use',
		color: 'gray',
		data: [80]
	}]
};
var chart = $('#gal').highcharts(options);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.fullscreen {\n  width: 100%;\n  height: 100vh;\n}\n#component {\n  margin: 0 auto;\n  max-width: 800px;\n  padding-top: 60px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(50)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(48),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\rkark\\Documents\\Projects\\JavaLoginTemplate\\LoginProject\\app\\src\\scripts\\components\\profile\\ProfileComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProfileComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ec0ed35", Component.options)
  } else {
    hotAPI.reload("data-v-7ec0ed35", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "w3-panel w3-blue"
  }, [_c('h1', {
    staticClass: "w3-padding-32"
  }, [_vm._v("Water")]), _vm._v(" "), _c('div', {
    staticClass: "w3-row"
  }, [_c('div', {
    staticClass: "w3-col l6"
  }, [_vm._v("\n\n\t\t\t\t\tShowers per Day: "), _c('br'), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.showers),
      expression: "showers"
    }],
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "maxlength": "2"
    },
    domProps: {
      "value": (_vm.showers)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.showers = $event.target.value
      }
    }
  }), _c('br'), _vm._v("\n\t\t\t\t\tTime spent per shower: "), _c('br'), _vm._v(" "), _c('input', {
    staticClass: "w3-input",
    attrs: {
      "type": "number",
      "name": "tshowered"
    }
  }), _vm._v(" "), _c('br'), _vm._v("\n\t\t\t\t\tTimes toilet flushed: "), _c('br'), _vm._v(" "), _c('input', {
    staticClass: "w3-input",
    attrs: {
      "type": "number",
      "name": "tflushed"
    }
  }), _vm._v(" "), _c('br'), _vm._v(" \n\t\t\t\t\tTimes washer used: "), _c('br'), _vm._v(" "), _c('input', {
    staticClass: "w3-input",
    attrs: {
      "type": "number",
      "name": "twasher"
    }
  }), _vm._v(" "), _c('br')]), _vm._v(" "), _vm._m(0)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "w3-col l6"
  }, [_c('div', {
    attrs: {
      "id": "gal"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-12a113fa", module.exports)
  }
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "w3-panel w3-blue"
  }, [_c('h1', {}, [_vm._v("Energy")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_vm._v("Check all of the following that apply")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('input', {
    attrs: {
      "type": "checkbox",
      "id": "AC",
      "name": "electric",
      "value": "AC"
    }
  }), _vm._v(" AC\n\t"), _c('input', {
    attrs: {
      "type": "checkbox",
      "id": "LM",
      "name": "electric",
      "value": "LM"
    }
  }), _vm._v(" Laundry Machine\n\t"), _c('input', {
    attrs: {
      "type": "checkbox",
      "id": "WH",
      "name": "electric",
      "value": "WH"
    }
  }), _vm._v(" Water Heater\n\t"), _c('input', {
    attrs: {
      "type": "checkbox",
      "id": "R",
      "name": "electric",
      "value": "R"
    }
  }), _vm._v(" Refrigerator\n\t"), _c('input', {
    attrs: {
      "type": "checkbox",
      "id": "TV",
      "name": "electric",
      "value": "TV"
    }
  }), _vm._v(" TV\n\t"), _c('input', {
    attrs: {
      "type": "checkbox",
      "id": "L",
      "name": "electric",
      "value": "L"
    }
  }), _vm._v(" Laptop\n\t"), _c('input', {
    attrs: {
      "type": "checkbox",
      "id": "CP",
      "name": "electric",
      "value": "CP"
    }
  }), _vm._v(" Cell Phone\n\t"), _c('input', {
    attrs: {
      "type": "checkbox",
      "id": "C",
      "name": "electric",
      "value": "C"
    }
  }), _vm._v(" Console\n\t"), _c('input', {
    attrs: {
      "type": "checkbox",
      "id": "T",
      "name": "electric",
      "value": "T"
    }
  }), _vm._v(" Toaster\n\t"), _c('input', {
    attrs: {
      "type": "checkbox",
      "id": "M",
      "name": "electric",
      "value": "M"
    }
  }), _vm._v(" Microwave\n\t"), _c('input', {
    attrs: {
      "type": "checkbox",
      "id": "CM",
      "name": "electric",
      "value": "CM"
    }
  }), _vm._v(" Coffee Maker\n\t"), _c('input', {
    attrs: {
      "type": "checkbox",
      "id": "D",
      "name": "electric",
      "value": "D"
    }
  }), _vm._v(" Desktop\n\t"), _c('input', {
    attrs: {
      "type": "checkbox",
      "id": "B",
      "name": "electric",
      "value": "B"
    }
  }), _vm._v(" Incandescent Bulbs\n")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1f4b651d", module.exports)
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Welcome")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('form', {
    attrs: {
      "action": "/calculate",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "fullscreen",
    staticStyle: {
      "background-color": "#00b0ff"
    },
    attrs: {
      "id": "water"
    }
  }, [_c('div', {
    attrs: {
      "id": "component"
    }
  }, [_c('water-profile-component')], 1)]), _vm._v(" "), _c('div', {
    staticClass: "fullscreen",
    staticStyle: {
      "background-color": "#bdbdbd"
    },
    attrs: {
      "id": "water"
    }
  }, [_c('div', {
    attrs: {
      "id": "component"
    }
  }, [_c('pollution-profile-component')], 1)]), _vm._v(" "), _c('div', {
    staticClass: "fullscreen",
    staticStyle: {
      "background-color": "#ffea00"
    },
    attrs: {
      "id": "water"
    }
  }, [_c('div', {
    attrs: {
      "id": "component"
    }
  }, [_c('energy-profile-component')], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    attrs: {
      "action": "/logout",
      "method": "post"
    }
  }, [_c('button', [_vm._v("Log Out")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7ec0ed35", module.exports)
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "w3-panel w3-green"
  }, [_c('h1', {
    staticClass: "w3-padding-32"
  }, [_vm._v("Pollution")]), _vm._v("\n\tHighway MPG:"), _c('br'), _vm._v(" "), _c('input', {
    attrs: {
      "type": "number",
      "name": "hmpg"
    }
  }), _vm._v(" "), _c('br'), _vm._v("\n\tCity MPG:"), _c('br'), _vm._v(" "), _c('input', {
    attrs: {
      "type": "number",
      "name": "cmpg"
    }
  }), _vm._v(" "), _c('br'), _vm._v("\n\tDaily Commute:"), _c('br'), _vm._v(" "), _c('input', {
    attrs: {
      "type": "number",
      "name": "miles"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-981986e6", module.exports)
  }
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0f6556da", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7ec0ed35\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProfileComponent.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7ec0ed35\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProfileComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6b00d17d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-981986e6\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PollutionProfileComponent.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-981986e6\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PollutionProfileComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(82)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(75),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\rkark\\Documents\\Projects\\JavaLoginTemplate\\LoginProject\\app\\src\\scripts\\components\\ConclusionComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ConclusionComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ca0f0b3", Component.options)
  } else {
    hotAPI.reload("data-v-4ca0f0b3", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(81)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(74),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\rkark\\Documents\\Projects\\JavaLoginTemplate\\LoginProject\\app\\src\\scripts\\components\\HomeComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HomeComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37ee27b3", Component.options)
  } else {
    hotAPI.reload("data-v-37ee27b3", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(83)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(76),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\rkark\\Documents\\Projects\\JavaLoginTemplate\\LoginProject\\app\\src\\scripts\\components\\IntroComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] IntroComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-660c086c", Component.options)
  } else {
    hotAPI.reload("data-v-660c086c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(85)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(78),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\rkark\\Documents\\Projects\\JavaLoginTemplate\\LoginProject\\app\\src\\scripts\\components\\LightsComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] LightsComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-81987016", Component.options)
  } else {
    hotAPI.reload("data-v-81987016", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(86)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(79),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\rkark\\Documents\\Projects\\JavaLoginTemplate\\LoginProject\\app\\src\\scripts\\components\\LoginComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] LoginComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f5227ae2", Component.options)
  } else {
    hotAPI.reload("data-v-f5227ae2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(84)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(77),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\rkark\\Documents\\Projects\\JavaLoginTemplate\\LoginProject\\app\\src\\scripts\\components\\PollutionComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PollutionComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-71f5216e", Component.options)
  } else {
    hotAPI.reload("data-v-71f5216e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(80)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(73),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\rkark\\Documents\\Projects\\JavaLoginTemplate\\LoginProject\\app\\src\\scripts\\components\\WaterComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] WaterComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22db17a1", Component.options)
  } else {
    hotAPI.reload("data-v-22db17a1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 59 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoginComponent_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoginComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__LoginComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IntroComponent_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IntroComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__IntroComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NavComponent_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NavComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NavComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HomeComponent_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HomeComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__HomeComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WaterComponent_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WaterComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__WaterComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PollutionComponent_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PollutionComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__PollutionComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ConclusionComponent_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ConclusionComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ConclusionComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__LightsComponent_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__LightsComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__LightsComponent_vue__);
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
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["default"] = ({
  components: { NavComponent: __WEBPACK_IMPORTED_MODULE_2__NavComponent_vue___default.a, HomeComponent: __WEBPACK_IMPORTED_MODULE_3__HomeComponent_vue___default.a, LoginComponent: __WEBPACK_IMPORTED_MODULE_0__LoginComponent_vue___default.a, IntroComponent: __WEBPACK_IMPORTED_MODULE_1__IntroComponent_vue___default.a, PollutionComponent: __WEBPACK_IMPORTED_MODULE_5__PollutionComponent_vue___default.a, WaterComponent: __WEBPACK_IMPORTED_MODULE_4__WaterComponent_vue___default.a, ConclusionComponent: __WEBPACK_IMPORTED_MODULE_6__ConclusionComponent_vue___default.a, LightsComponent: __WEBPACK_IMPORTED_MODULE_7__LightsComponent_vue___default.a },
  methods: {
    scroll: function scroll(id) {
      this.$SmoothScroll(document.getElementById(id));
    }
  }
});

/***/ }),
/* 61 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//

/***/ }),
/* 62 */
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


/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {}
});

/***/ }),
/* 63 */
/***/ (function(module, exports) {

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
//
//

/***/ }),
/* 64 */
/***/ (function(module, exports) {

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

/***/ }),
/* 65 */
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      minutes: 2,
      waterSaved: 0
    };
  },
  created: function created() {
    this.waterSaved = this.minutes * 2.1;
  },
  watch: {
    'minutes': function minutes(to, from) {
      this.waterSaved = (this.minutes * 2.1).toFixed(1);
    }
  }
});

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n#child {\n  display: inline-block;\n  vertical-align: top;\n}\n", ""]);

// exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.fullscreen {\n  width: 100%;\n  height: 100vh;\n}\n#component {\n  margin: 0 auto;\n  max-width: 800px;\n  padding-top: 60px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.button-link {\n  padding: 10px 15px;\n  background: #4479BA;\n  color: #FFF;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n  border: solid 1px #20538D;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);\n  -webkit-transition-duration: 0.2s;\n  -moz-transition-duration: 0.2s;\n  transition-duration: 0.2s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.button-link:hover {\n  background: #356094;\n  border: solid 1px #2A4E77;\n  text-decoration: none;\n}\n.button-link:active {\n  -webkit-box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6);\n  -moz-box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6);\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6);\n  background: #2E5481;\n  border: solid 1px #203E5F;\n}\n", ""]);

// exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i', {
    staticClass: "fa fa-shower",
    staticStyle: {
      "font-size": "10em"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('h2', [_vm._v("Take Shorter Showers")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('p', [_vm._v("If you showered "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.minutes),
      expression: "minutes"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2"
    },
    domProps: {
      "value": (_vm.minutes)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.minutes = $event.target.value
      }
    }
  }), _vm._v(" minutes less a day, you would save "), _c('b', [_vm._v(_vm._s(_vm.waterSaved) + " gallons")]), _vm._v(" a shower.")]), _vm._v(" "), _c('p', [_vm._v("...in a week "), _c('b', [_vm._v(_vm._s((_vm.waterSaved * 7).toFixed(1)) + " ")]), _vm._v("gallons")]), _vm._v(" "), _c('p', [_vm._v("...in a month "), _c('b', [_vm._v(_vm._s((_vm.waterSaved * 31).toFixed(1)))]), _vm._v(" gallons")]), _vm._v(" "), _c('p', [_vm._v("...in a year a whopping "), _c('b', [_vm._v(_vm._s((_vm.waterSaved * 365).toFixed(1)))]), _vm._v(" gallons!!")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("In an average home, showers have the third largest water usage, after toilets and washing machines. On average each shower uses "), _c('b', [_vm._v("17.2 gallons")]), _vm._v(" over "), _c('b', [_vm._v("8 minutes")]), _vm._v(".")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-22db17a1", module.exports)
  }
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "content"
    }
  }, [_c('router-link', {
    attrs: {
      "to": "/profile"
    }
  }, [_vm._v("Go to Profile")]), _vm._v(" "), _c('div', {
    staticClass: "fullscreen",
    staticStyle: {
      "background-color": "#00e676"
    },
    attrs: {
      "id": "intro"
    }
  }, [_c('div', {
    attrs: {
      "id": "component"
    }
  }, [_c('intro-component'), _vm._v(" "), _c('a', {
    staticClass: "button-link",
    on: {
      "click": function($event) {
        _vm.scroll("water")
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-down"
  }), _vm._v(" Next")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "fullscreen",
    staticStyle: {
      "background-color": "#00b0ff"
    },
    attrs: {
      "id": "water"
    }
  }, [_c('div', {
    attrs: {
      "id": "component"
    }
  }, [_c('water-component'), _vm._v(" "), _c('a', {
    staticClass: "button-link",
    on: {
      "click": function($event) {
        _vm.scroll("pollution")
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-down"
  }), _vm._v(" Next")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "fullscreen",
    staticStyle: {
      "background-color": "#bdbdbd"
    },
    attrs: {
      "id": "pollution"
    }
  }, [_c('div', {
    attrs: {
      "id": "component"
    }
  }, [_c('pollution-component'), _vm._v(" "), _c('a', {
    staticClass: "button-link",
    on: {
      "click": function($event) {
        _vm.scroll("lights")
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-down"
  }), _vm._v(" Next")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "fullscreen",
    staticStyle: {
      "background-color": "#ffea00"
    },
    attrs: {
      "id": "lights"
    }
  }, [_c('div', {
    attrs: {
      "id": "component"
    }
  }, [_c('lights-component'), _vm._v(" "), _c('a', {
    staticClass: "button-link",
    on: {
      "click": function($event) {
        _vm.scroll("conclusion")
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-down"
  }), _vm._v(" Next")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "fullscreen",
    staticStyle: {
      "background-color": "#651fff"
    },
    attrs: {
      "id": "conclusion"
    }
  }, [_c('div', {
    attrs: {
      "id": "component"
    }
  }, [_c('conclusion-component'), _vm._v(" "), _c('a', {
    staticClass: "button-link",
    on: {
      "click": function($event) {
        _vm.scroll("intro")
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-up"
  }), _vm._v(" Back to Top")])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-37ee27b3", module.exports)
  }
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i', {
    staticClass: "fa fa-tree",
    staticStyle: {
      "font-size": "10em"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('p', [_vm._v("Meaningful yet small steps towards reducing your individual environmental impact can lead to real, measurable and positive change for the planet. Changing a habit or two, educating yourself and making smarter choices - a little bit at a time is really all that it takes.")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4ca0f0b3", module.exports)
  }
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i', {
    staticClass: "fa fa-globe",
    staticStyle: {
      "font-size": "10em"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('h1', [_vm._v("Cleanearth.life")]), _vm._v(" "), _c('h2', [_vm._v("Measure your individual ecological footprint, and explore ways you can reduce your impact on the environment.")]), _vm._v(" "), _c('p', [_vm._v("A common misconception is that your individual impact on the environment is negligible. That is false. A single person can make a huge difference with just a few small habit changes. Scroll down to see how you can help save the environment!")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-660c086c", module.exports)
  }
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Measure you Environmental Footprint")]), _vm._v(" "), _c('h3', [_vm._v("Steps Toward Positive Remedies")]), _vm._v(" "), _c('p', [_vm._v("Many positive changes have been instituted and others are constantly being researched and implemented to remedy the world's pollution crisis.")]), _vm._v(" "), _c('h3', [_vm._v("What You Can Do")]), _vm._v(" "), _c('p', [_vm._v("Some of the things that you can do to help create a greener world and leave a smaller footprint include:")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-71f5216e", module.exports)
  }
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i', {
    staticClass: "fa fa-lightbulb-o",
    staticStyle: {
      "font-size": "10em"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('h2', [_vm._v("Energy Efficient Lighting")]), _vm._v(" "), _c('p', [_vm._v("When comparing traditional lightbulbs (incandescents) energy efficient lighting such as LED lightbulbs can save 25%-80% less energy and can last 3-25 times longer (energy.gov). Not only does this happier environment, it can also lead to a happier wallet.")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-81987016", module.exports)
  }
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form"
  }, [_c('div', {
    attrs: {
      "id": "login"
    }
  }, [_c('h1', [_vm._v("Welcome Back!")]), _vm._v(" "), _c('form', {
    attrs: {
      "action": "/login",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "field-wrap"
  }, [_c('label', [_vm._v("\n\t\t\t\t\tUsername"), _c('span', {
    staticClass: "req"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text",
      "required": "",
      "autocomplete": "off",
      "name": "username"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "field-wrap"
  }, [_c('label', [_vm._v("\n\t\t\t\t\tPassword"), _c('span', {
    staticClass: "req"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "password",
      "required": "",
      "autocomplete": "off",
      "name": "password"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "forgot"
  }, [_c('a', {
    attrs: {
      "href": "/signup"
    }
  }, [_vm._v("Need an Account?")])]), _vm._v(" "), _c('button', {
    staticClass: "button button-block"
  }, [_vm._v("Log In")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f5227ae2", module.exports)
  }
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("264fea24", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-22db17a1\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./WaterComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-22db17a1\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./WaterComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("d4cbf89c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-37ee27b3\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomeComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-37ee27b3\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomeComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("525e65de", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4ca0f0b3\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ConclusionComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4ca0f0b3\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ConclusionComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("13f71f25", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-660c086c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./IntroComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-660c086c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./IntroComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("30eafc58", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-71f5216e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PollutionComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-71f5216e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PollutionComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1d5d316c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-81987016\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LightsComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-81987016\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LightsComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("ee5a5df8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f5227ae2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoginComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f5227ae2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoginComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })
]));