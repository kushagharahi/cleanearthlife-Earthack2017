webpackJsonp([1],{

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./EnergyProfileComponent.vue": 37,
	"./PollutionProfileComponent.vue": 38,
	"./ProfileComponent.vue": 45,
	"./WaterProfileComponent.vue": 39
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

/***/ 37:
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

/***/ 38:
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

/***/ 39:
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

/***/ 40:
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

/***/ 41:
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

/***/ 42:
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

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.fullscreen {\n  width: 100%;\n  height: 100vh;\n}\n#component {\n  margin: 0 auto;\n  max-width: 800px;\n  padding-top: 60px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 45:
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

/***/ 46:
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

/***/ 47:
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

/***/ 48:
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

/***/ 49:
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

/***/ 50:
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

/***/ 51:
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

/***/ })

});