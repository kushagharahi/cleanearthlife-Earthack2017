webpackJsonp([0],Array(34).concat([
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ConclusionComponent.vue": 53,
	"./FooterComponent.vue": 14,
	"./HomeComponent.vue": 54,
	"./IntroComponent.vue": 55,
	"./LightsComponent.vue": 56,
	"./LoginComponent.vue": 57,
	"./MeatComponent.vue": 58,
	"./NavComponent.vue": 13,
	"./PlasticBottleComponent.vue": 59,
	"./PledgeComponent.vue": 60,
	"./PollutionComponent.vue": 61,
	"./ShareComponent.vue": 84,
	"./WaterComponent.vue": 62,
	"./profile/EnergyProfileComponent.vue": 38,
	"./profile/PollutionProfileComponent.vue": 39,
	"./profile/ProfileComponent.vue": 46,
	"./profile/WaterProfileComponent.vue": 40
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
webpackContext.id = 34;

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(48),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/components/profile/EnergyProfileComponent.vue"
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(52)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(50),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/components/profile/PollutionProfileComponent.vue"
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/components/profile/WaterProfileComponent.vue"
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
/* 41 */
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WaterProfileComponent_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WaterProfileComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__WaterProfileComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PollutionProfileComponent_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PollutionProfileComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__PollutionProfileComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EnergyProfileComponent_vue__ = __webpack_require__(38);
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
/* 43 */
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


/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			showers: 0,
			total: 0
		};
	},
	created: function created() {
		this.total = this.showers * 2.1;
	}
});

var temp = this.total * 2.1;
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
		color: 'blue',
		data: [temp]
	}, {
		name: 'Average Use',
		color: 'gray',
		data: [80]
	}]
};
var chart = $('#gal').highcharts(options);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.fullscreen {\n  width: 100%;\n  height: 100vh;\n}\n#component {\n  margin: 0 auto;\n  max-width: 800px;\n  padding-top: 60px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(51)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/components/profile/ProfileComponent.vue"
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
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(101)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(90),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/components/ConclusionComponent.vue"
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(100)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(89),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/components/HomeComponent.vue"
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(102)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(91),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/components/IntroComponent.vue"
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(104)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(93),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/components/LightsComponent.vue"
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(106)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(95),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/components/LoginComponent.vue"
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(96)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(85),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/components/MeatComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MeatComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0142a847", Component.options)
  } else {
    hotAPI.reload("data-v-0142a847", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(97)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(69),
  /* template */
  __webpack_require__(86),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/components/PlasticBottleComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PlasticBottleComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18fd6cdc", Component.options)
  } else {
    hotAPI.reload("data-v-18fd6cdc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(99)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(70),
  /* template */
  __webpack_require__(88),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/components/PledgeComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PledgeComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31b255d9", Component.options)
  } else {
    hotAPI.reload("data-v-31b255d9", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(103)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(71),
  /* template */
  __webpack_require__(92),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/components/PollutionComponent.vue"
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(98)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(72),
  /* template */
  __webpack_require__(87),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/components/WaterComponent.vue"
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
/* 63 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoginComponent_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoginComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__LoginComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IntroComponent_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IntroComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__IntroComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NavComponent_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NavComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NavComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HomeComponent_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HomeComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__HomeComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WaterComponent_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WaterComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__WaterComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PollutionComponent_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PollutionComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__PollutionComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ConclusionComponent_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ConclusionComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ConclusionComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__LightsComponent_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__LightsComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__LightsComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PlasticBottleComponent_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PlasticBottleComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__PlasticBottleComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__MeatComponent_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__MeatComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__MeatComponent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__PledgeComponent_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__PledgeComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__PledgeComponent_vue__);
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
  components: { NavComponent: __WEBPACK_IMPORTED_MODULE_2__NavComponent_vue___default.a, HomeComponent: __WEBPACK_IMPORTED_MODULE_3__HomeComponent_vue___default.a, LoginComponent: __WEBPACK_IMPORTED_MODULE_0__LoginComponent_vue___default.a, IntroComponent: __WEBPACK_IMPORTED_MODULE_1__IntroComponent_vue___default.a, PollutionComponent: __WEBPACK_IMPORTED_MODULE_5__PollutionComponent_vue___default.a, WaterComponent: __WEBPACK_IMPORTED_MODULE_4__WaterComponent_vue___default.a, ConclusionComponent: __WEBPACK_IMPORTED_MODULE_6__ConclusionComponent_vue___default.a, LightsComponent: __WEBPACK_IMPORTED_MODULE_7__LightsComponent_vue___default.a, PlasticBottleComponent: __WEBPACK_IMPORTED_MODULE_8__PlasticBottleComponent_vue___default.a, MeatComponent: __WEBPACK_IMPORTED_MODULE_9__MeatComponent_vue___default.a, PledgeComponent: __WEBPACK_IMPORTED_MODULE_10__PledgeComponent_vue___default.a },
  methods: {
    scroll: function scroll(id) {
      this.$SmoothScroll(document.getElementById(id));
    }
  }
});

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
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			fbData: {}
		};
	},
	created: function created() {
		var vm = this;
		firebase.database().ref('Pledge/').on('value', function (data) {
			vm.fbData = data.val();
		});
	}
});

/***/ }),
/* 66 */
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


/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			traditionalBulb: 2
		};
	}
});

/***/ }),
/* 67 */
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
/* 68 */
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
			meals: 1,
			cowWeight: 1000,
			cowLife: 540,
			cowMethane: 250,
			poundPerMeal: .5
		};
	},
	methods: {
		totalCow: function totalCow() {
			return this.cowLife * this.cowMethane * (this.poundPerMeal / this.cowWeight) * this.meals;
		}
	}
});

/***/ }),
/* 69 */
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
    data: function data() {
        return {
            numRefills: 6
        };
    }
});

/***/ }),
/* 70 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			showerMinutes: 2,
			milesReduced: 2,
			lightReplace: 2,
			bottlesReduced: 2,
			meatReduced: 2,
			pledgeMade: false,
			fbData: {}
		};
	},
	created: function created() {},
	methods: {
		postData: function postData() {
			var vm = this;
			firebase.database().ref('Pledge/').transaction(function (data) {
				vm.pledgeMade = true;
				data.showerMinutes += vm.showerMinutes;
				data.milesReduced += vm.milesReduced;
				data.lightReplace += vm.lightReplace;
				data.bottlesReduced += vm.bottlesReduced;
				data.meatReduced += vm.meatReduced;
				data.usersPledged += 1;
				vm.fbData = data;
				return data;
			});
		}
	}
});

/***/ }),
/* 71 */
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
			distance: 2,
			mpg: 25
		};
	}
});

/***/ }),
/* 72 */
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n#child {\n  display: inline-block;\n  vertical-align: top;\n}\n", ""]);

// exports


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.fullscreen {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.bottom_aligner {\n  display: inline-block;\n  align-self: flex-end;\n  margin-top: auto;\n}\n#component {\n  margin: 0 auto;\n  max-width: 800px;\n  padding-top: 60px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(105)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(94),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/kusha/Documents/projects/Earthack2017/app/src/scripts/components/ShareComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ShareComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c1735c4e", Component.options)
  } else {
    hotAPI.reload("data-v-c1735c4e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i', {
    staticClass: "fa fa-cutlery",
    staticStyle: {
      "font-size": "10em"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('h2', [_vm._v("Reduce Your Meat Consumption")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('p', [_vm._v("If you reduced the amount of meat you consume each week by "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.meals),
      expression: "meals"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2"
    },
    domProps: {
      "value": (_vm.meals)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.meals = $event.target.value
      }
    }
  }), _vm._v(" meals, you would reduce your impact on methane emissions in a day by "), _c('b', [_vm._v(_vm._s(_vm.totalCow()))]), _vm._v(" liters")]), _vm._v(" "), _c('p', [_vm._v("...in a week "), _c('b', [_vm._v(_vm._s((_vm.totalCow() * 7).toFixed(1)))]), _vm._v(" liters")]), _vm._v(" "), _c('p', [_vm._v("...in a month "), _c('b', [_vm._v(_vm._s((_vm.totalCow() * 31).toFixed(1)))]), _vm._v(" liters")]), _vm._v(" "), _c('p', [_vm._v("...in a year a whopping "), _c('b', [_vm._v(_vm._s((_vm.totalCow() * 365).toFixed(1)))]), _vm._v(" liters!!")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("Methane from cattle accounts for "), _c('b', [_vm._v("14.5")]), _vm._v(" and "), _c('b', [_vm._v("18")]), _vm._v(" percent of the total greenhouse gas emissions")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0142a847", module.exports)
  }
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i', {
    staticClass: "fa fa-tint",
    staticStyle: {
      "font-size": "10em"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('h2', [_vm._v("Reusable Water Bottles!")]), _vm._v(" "), _c('p', [_vm._v("Roughly only 20% of plastic bottles are recycled in the US.")]), _vm._v(" "), _c('p', [_vm._v("For "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.numRefills),
      expression: "numRefills"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2"
    },
    domProps: {
      "value": (_vm.numRefills)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.numRefills = $event.target.value
      }
    }
  }), _vm._v(" refills of a 32oz standard water bottle, you would be saving "), _c('b', [_vm._v(_vm._s(Math.ceil(_vm.numRefills * 2 * .8)) + " plastic bottles from the landfill.")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-18fd6cdc", module.exports)
  }
}

/***/ }),
/* 87 */
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i', {
    staticClass: "fa fa-handshake-o",
    staticStyle: {
      "font-size": "10em"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), (!_vm.pledgeMade) ? _c('span', [_c('h1', [_vm._v("Make the Pledge!")]), _vm._v(" "), _c('p', [_vm._v("I will commit to:")]), _vm._v(" "), _c('p', [_vm._v("showering "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.showerMinutes),
      expression: "showerMinutes"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2",
      "disabled": _vm.pledgeMade
    },
    domProps: {
      "value": (_vm.showerMinutes)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.showerMinutes = $event.target.value
      }
    }
  }), _vm._v(" minutes less a day")]), _vm._v(" "), _c('p', [_vm._v("driving   "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.milesReduced),
      expression: "milesReduced"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2",
      "disabled": _vm.pledgeMade
    },
    domProps: {
      "value": (_vm.milesReduced)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.milesReduced = $event.target.value
      }
    }
  }), _vm._v(" miles less a day")]), _vm._v(" "), _c('p', [_vm._v("replacing "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.lightReplace),
      expression: "lightReplace"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2",
      "disabled": _vm.pledgeMade
    },
    domProps: {
      "value": (_vm.lightReplace)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.lightReplace = $event.target.value
      }
    }
  }), _vm._v(" traditional light bulbs")]), _vm._v(" "), _c('p', [_vm._v("using     "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.bottlesReduced),
      expression: "bottlesReduced"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2",
      "disabled": _vm.pledgeMade
    },
    domProps: {
      "value": (_vm.bottlesReduced)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.bottlesReduced = $event.target.value
      }
    }
  }), _vm._v(" disposable water bottles less a week")]), _vm._v(" "), _c('p', [_vm._v("eating \t "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.meatReduced),
      expression: "meatReduced"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2",
      "disabled": _vm.pledgeMade
    },
    domProps: {
      "value": (_vm.meatReduced)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.meatReduced = $event.target.value
      }
    }
  }), _vm._v(" less meals with meat a week")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "button",
      "value": "Make the Pledge!",
      "disabled": _vm.pledgeMade
    },
    on: {
      "click": function($event) {
        _vm.postData()
      }
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.pledgeMade) ? _c('span', [_c('h2', [_vm._v("Thanks for making the pledge!! You and " + _vm._s(_vm.fbData.usersPledged) + " others have committed to:")]), _vm._v(" "), _c('p', [_vm._v("Using " + _vm._s((_vm.fbData.showerMinutes * 2.1).toFixed(1)) + " gallons when showering per day!")]), _vm._v(" "), _c('p', [_vm._v("Reducing car pollution by " + _vm._s((_vm.fbData.milesReduced / 25 * 19.5).toFixed(1)) + " pounds!")]), _vm._v(" "), _c('p', [_vm._v("Saving $" + _vm._s(_vm.fbData.lightReplace * 100) + " a year on energy!")]), _vm._v(" "), _c('p', [_vm._v("Using " + _vm._s(_vm.fbData.bottlesReduced) + " less disposible plastic bottles per week!")]), _vm._v(" "), _c('p', [_vm._v("Reducing methane emissions by " + _vm._s((540 * 250 * (.5 / 1000) * _vm.fbData.meatReduced).toFixed(1)) + " liters a day!")])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-31b255d9", module.exports)
  }
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "content"
    }
  }, [_c('div', {
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
  }, [_c('intro-component')], 1), _vm._v(" "), _c('div', {
    staticClass: "bottom_aligner"
  }, [_c('a', {
    attrs: {
      "href": "#water"
    },
    on: {
      "click": function($event) {
        _vm.scroll("water")
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-down",
    staticStyle: {
      "font-size": "7em"
    }
  })])])]), _vm._v(" "), _c('div', {
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
  }, [_c('water-component')], 1), _vm._v(" "), _c('div', {
    staticClass: "bottom_aligner"
  }, [_c('a', {
    attrs: {
      "href": "#pollution"
    },
    on: {
      "click": function($event) {
        _vm.scroll("pollution")
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-down",
    staticStyle: {
      "font-size": "7em"
    }
  })])])]), _vm._v(" "), _c('div', {
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
  }, [_c('pollution-component')], 1), _vm._v(" "), _c('div', {
    staticClass: "bottom_aligner"
  }, [_c('a', {
    attrs: {
      "href": "#lights"
    },
    on: {
      "click": function($event) {
        _vm.scroll("lights")
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-down",
    staticStyle: {
      "font-size": "7em"
    }
  })])])]), _vm._v(" "), _c('div', {
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
  }, [_c('lights-component')], 1), _vm._v(" "), _c('div', {
    staticClass: "bottom_aligner"
  }, [_c('a', {
    attrs: {
      "href": "#plastic"
    },
    on: {
      "click": function($event) {
        _vm.scroll("plasticBottle")
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-down",
    staticStyle: {
      "font-size": "7em"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "fullscreen",
    staticStyle: {
      "background-color": "cadetblue"
    },
    attrs: {
      "id": "plasticBottle"
    }
  }, [_c('div', {
    attrs: {
      "id": "component"
    }
  }, [_c('plastic-bottle-component')], 1), _vm._v(" "), _c('div', {
    staticClass: "bottom_aligner"
  }, [_c('a', {
    attrs: {
      "href": "#meat"
    },
    on: {
      "click": function($event) {
        _vm.scroll("meat")
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-down",
    staticStyle: {
      "font-size": "7em"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "fullscreen",
    staticStyle: {
      "background-color": "indianred"
    },
    attrs: {
      "id": "meat"
    }
  }, [_c('div', {
    attrs: {
      "id": "component"
    }
  }, [_c('meat-component')], 1), _vm._v(" "), _c('div', {
    staticClass: "bottom_aligner"
  }, [_c('a', {
    attrs: {
      "href": "#pledge"
    },
    on: {
      "click": function($event) {
        _vm.scroll("pledge")
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-down",
    staticStyle: {
      "font-size": "7em"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "fullscreen",
    staticStyle: {
      "background-color": "mediumseagreen"
    },
    attrs: {
      "id": "pledge"
    }
  }, [_c('div', {
    attrs: {
      "id": "component"
    }
  }, [_c('pledge-component')], 1), _vm._v(" "), _c('div', {
    staticClass: "bottom_aligner"
  }, [_c('a', {
    attrs: {
      "href": "#conclusion"
    },
    on: {
      "click": function($event) {
        _vm.scroll("conclusion")
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-down",
    staticStyle: {
      "font-size": "7em"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "fullscreen",
    staticStyle: {
      "background-color": "#7c4dff"
    },
    attrs: {
      "id": "conclusion"
    }
  }, [_c('div', {
    attrs: {
      "id": "component"
    }
  }, [_c('conclusion-component')], 1), _vm._v(" "), _c('div', {
    staticClass: "bottom_aligner"
  }, [_c('a', {
    attrs: {
      "href": "#intro"
    },
    on: {
      "click": function($event) {
        _vm.scroll("intro")
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-down",
    staticStyle: {
      "font-size": "7em"
    }
  })])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-37ee27b3", module.exports)
  }
}

/***/ }),
/* 90 */
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "col-one"
  }, [_c('i', {
    staticClass: "fa fa-globe",
    staticStyle: {
      "font-size": "10em"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('h2', [_vm._v("CleanEarth.Life - A little change goes far")]), _vm._v(" "), _c('p', [_vm._v("So far, " + _vm._s(_vm.fbData.usersPledged) + " people have pledged to:")]), _vm._v(" "), _c('p', [_vm._v("Using " + _vm._s((_vm.fbData.showerMinutes * 2.1).toFixed(1)) + " gallons less when showering per day!")]), _vm._v(" "), _c('p', [_vm._v("Reducing car pollution by " + _vm._s((_vm.fbData.milesReduced / 25 * 19.5).toFixed(1)) + " pounds per day!")]), _vm._v(" "), _c('p', [_vm._v("Saving $" + _vm._s(_vm.fbData.lightReplace * 100) + " a year on energy!")]), _vm._v(" "), _c('p', [_vm._v("Using " + _vm._s(_vm.fbData.bottlesReduced) + " less disposible plastic bottles per week!")]), _vm._v(" "), _c('p', [_vm._v("Reducing methane emissions by " + _vm._s((540 * 250 * (.5 / 1000) * _vm.fbData.meatReduced).toFixed(1)) + " liters a day!")]), _vm._v(" "), _c('p', [_vm._v("Want to get involved? Scroll down!")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-660c086c", module.exports)
  }
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i', {
    staticClass: "fa fa-car",
    staticStyle: {
      "font-size": "10em"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('h1', [_vm._v("Reduce Car Emissions")]), _vm._v(" "), _c('p', [_vm._v("Drive more conservatively to reduce amount of fuel that you use")]), _vm._v(" "), _c('p', [_vm._v("If you reduced your daily commute by "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.distance),
      expression: "distance"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2"
    },
    domProps: {
      "value": (_vm.distance)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.distance = $event.target.value
      }
    }
  }), _vm._v(" miles per day in a car that averaged "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.mpg),
      expression: "mpg"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2"
    },
    domProps: {
      "value": (_vm.mpg)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.mpg = $event.target.value
      }
    }
  }), _vm._v(" city miles per gallon, you would save a daily amount of "), _c('b', [_vm._v(_vm._s(((_vm.distance / _vm.mpg) * 19.5).toFixed(1)) + " pounds")]), _vm._v(" of pollution")]), _vm._v(" "), _c('p', [_vm._v("...in a week "), _c('b', [_vm._v(_vm._s(((_vm.distance / _vm.mpg) * 19.5 * 7).toFixed(1)))]), _vm._v(" pounds")]), _vm._v(" "), _c('p', [_vm._v("...in a month "), _c('b', [_vm._v(_vm._s(((_vm.distance / _vm.mpg) * 19.5 * 31).toFixed(1)))]), _vm._v(" pounds")]), _vm._v(" "), _c('p', [_vm._v("...in a year a whopping "), _c('b', [_vm._v(_vm._s(((_vm.distance / _vm.mpg) * 19.5 * 365).toFixed(1)))]), _vm._v(" pounds!!")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-71f5216e", module.exports)
  }
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i', {
    staticClass: "fa fa-lightbulb-o",
    staticStyle: {
      "font-size": "10em"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('h2', [_vm._v("Energy Efficient Lighting")]), _vm._v(" "), _c('p', [_vm._v("Replacing traditional lights with energy efficient lighting can save 25%-80% less energy and can last 3-25 times longer (energy.gov)")]), _vm._v(" "), _c('p', [_vm._v("For every "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.traditionalBulb),
      expression: "traditionalBulb"
    }],
    staticStyle: {
      "width": "20px"
    },
    attrs: {
      "maxlength": "2"
    },
    domProps: {
      "value": (_vm.traditionalBulb)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.traditionalBulb = $event.target.value
      }
    }
  }), _vm._v(" traditional light bulbs (60w Incandecent) replaced with energy efficient bulbs (10w LED), you save nearly "), _c('b', [_vm._v("$" + _vm._s(_vm.traditionalBulb * 100) + " a year!!")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-81987016", module.exports)
  }
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "a2a_kit a2a_kit_size_32 a2a_default_style"
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c1735c4e", module.exports)
  }
}

/***/ }),
/* 95 */
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("16bc48fd", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0142a847\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MeatComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0142a847\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MeatComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("f2896f14", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-18fd6cdc\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PlasticBottleComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-18fd6cdc\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PlasticBottleComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("46b39a15", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-31b255d9\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PledgeComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-31b255d9\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PledgeComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6f4fa857", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-c1735c4e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ShareComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-c1735c4e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ShareComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
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