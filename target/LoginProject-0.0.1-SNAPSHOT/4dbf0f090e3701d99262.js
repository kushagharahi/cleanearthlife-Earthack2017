webpackJsonp([0],Array(32).concat([function(t,e,n){function a(t){return n(i(t))}function i(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var o={"./ConclusionComponent.vue":51,"./FooterComponent.vue":12,"./HomeComponent.vue":52,"./IntroComponent.vue":53,"./LightsComponent.vue":54,"./LoginComponent.vue":55,"./MeatComponent.vue":56,"./NavComponent.vue":11,"./PlasticBottleComponent.vue":57,"./PledgeComponent.vue":58,"./PollutionComponent.vue":59,"./ShareComponent.vue":82,"./WaterComponent.vue":60,"./profile/EnergyProfileComponent.vue":36,"./profile/PollutionProfileComponent.vue":37,"./profile/ProfileComponent.vue":44,"./profile/WaterProfileComponent.vue":38};a.keys=function(){return Object.keys(o)},a.resolve=i,t.exports=a,a.id=32},,,,function(t,e,n){var a=n(0)(null,n(46),null,null);t.exports=a.exports},function(t,e,n){n(50);var a=n(0)(n(39),n(48),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(41),n(45),null,null);t.exports=a.exports},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(38),i=n.n(a),o=n(37),s=n.n(o),l=n(36),r=n.n(l);e.default={name:"profile",components:{WaterProfileComponent:i.a,PollutionProfileComponent:s.a,EnergyProfileComponent:r.a},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{showers:0,total:0}},created:function(){this.total=2.1*this.showers}};var a=2.1*this.total,i={chart:{type:"column"},title:{text:"Water Usage"},xAxis:{categories:[""]},yAxis:{min:0,title:{text:"Gallons (G)"}},plotOptions:{column:{pointPadding:.2,borderWidth:0}},series:[{name:"Your Use",color:"blue",data:[a]},{name:"Average Use",color:"gray",data:[80]}]};$("#gal").highcharts(i)},function(t,e,n){e=t.exports=n(1)(void 0),e.push([t.i,".fullscreen{width:100%;height:100vh}#component{margin:0 auto;max-width:800px;padding-top:60px;padding-left:20px;padding-right:20px}",""])},function(t,e,n){e=t.exports=n(1)(void 0),e.push([t.i,"",""])},function(t,e,n){n(49);var a=n(0)(n(40),n(47),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-panel w3-blue"},[n("h1",{staticClass:"w3-padding-32"},[t._v("Water")]),t._v(" "),n("div",{staticClass:"w3-row"},[n("div",{staticClass:"w3-col l6"},[t._v("\n\n\t\t\t\t\tShowers per Day: "),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.showers,expression:"showers"}],staticStyle:{width:"100%"},attrs:{maxlength:"2"},domProps:{value:t.showers},on:{input:function(e){e.target.composing||(t.showers=e.target.value)}}}),n("br"),t._v("\n\t\t\t\t\tTime spent per shower: "),n("br"),t._v(" "),n("input",{staticClass:"w3-input",attrs:{type:"number",name:"tshowered"}}),t._v(" "),n("br"),t._v("\n\t\t\t\t\tTimes toilet flushed: "),n("br"),t._v(" "),n("input",{staticClass:"w3-input",attrs:{type:"number",name:"tflushed"}}),t._v(" "),n("br"),t._v(" \n\t\t\t\t\tTimes washer used: "),n("br"),t._v(" "),n("input",{staticClass:"w3-input",attrs:{type:"number",name:"twasher"}}),t._v(" "),n("br")]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-col l6"},[n("div",{attrs:{id:"gal"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-panel w3-blue"},[n("h1",{},[t._v("Energy")]),t._v(" "),n("br"),t._v(" "),n("h3",[t._v("Check all of the following that apply")]),t._v(" "),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"AC",name:"electric",value:"AC"}}),t._v(" AC\n\t"),n("input",{attrs:{type:"checkbox",id:"LM",name:"electric",value:"LM"}}),t._v(" Laundry Machine\n\t"),n("input",{attrs:{type:"checkbox",id:"WH",name:"electric",value:"WH"}}),t._v(" Water Heater\n\t"),n("input",{attrs:{type:"checkbox",id:"R",name:"electric",value:"R"}}),t._v(" Refrigerator\n\t"),n("input",{attrs:{type:"checkbox",id:"TV",name:"electric",value:"TV"}}),t._v(" TV\n\t"),n("input",{attrs:{type:"checkbox",id:"L",name:"electric",value:"L"}}),t._v(" Laptop\n\t"),n("input",{attrs:{type:"checkbox",id:"CP",name:"electric",value:"CP"}}),t._v(" Cell Phone\n\t"),n("input",{attrs:{type:"checkbox",id:"C",name:"electric",value:"C"}}),t._v(" Console\n\t"),n("input",{attrs:{type:"checkbox",id:"T",name:"electric",value:"T"}}),t._v(" Toaster\n\t"),n("input",{attrs:{type:"checkbox",id:"M",name:"electric",value:"M"}}),t._v(" Microwave\n\t"),n("input",{attrs:{type:"checkbox",id:"CM",name:"electric",value:"CM"}}),t._v(" Coffee Maker\n\t"),n("input",{attrs:{type:"checkbox",id:"D",name:"electric",value:"D"}}),t._v(" Desktop\n\t"),n("input",{attrs:{type:"checkbox",id:"B",name:"electric",value:"B"}}),t._v(" Incandescent Bulbs\n")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Welcome")]),t._v(" "),t._m(0),t._v(" "),n("form",{attrs:{action:"/calculate",method:"post"}},[n("div",{staticClass:"fullscreen",staticStyle:{"background-color":"#00b0ff"},attrs:{id:"water"}},[n("div",{attrs:{id:"component"}},[n("water-profile-component")],1)]),t._v(" "),n("div",{staticClass:"fullscreen",staticStyle:{"background-color":"#bdbdbd"},attrs:{id:"water"}},[n("div",{attrs:{id:"component"}},[n("pollution-profile-component")],1)]),t._v(" "),n("div",{staticClass:"fullscreen",staticStyle:{"background-color":"#ffea00"},attrs:{id:"water"}},[n("div",{attrs:{id:"component"}},[n("energy-profile-component")],1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{action:"/logout",method:"post"}},[n("button",[t._v("Log Out")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-panel w3-green"},[n("h1",{staticClass:"w3-padding-32"},[t._v("Pollution")]),t._v("\n\tHighway MPG:"),n("br"),t._v(" "),n("input",{attrs:{type:"number",name:"hmpg"}}),t._v(" "),n("br"),t._v("\n\tCity MPG:"),n("br"),t._v(" "),n("input",{attrs:{type:"number",name:"cmpg"}}),t._v(" "),n("br"),t._v("\n\tDaily Commute:"),n("br"),t._v(" "),n("input",{attrs:{type:"number",name:"miles"}})])}]}},function(t,e,n){var a=n(42);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(2)("45a8bc4e",a,!0)},function(t,e,n){var a=n(43);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(2)("a02e8988",a,!0)},function(t,e,n){n(99);var a=n(0)(n(61),n(88),null,null);t.exports=a.exports},function(t,e,n){n(98);var a=n(0)(n(62),n(87),null,null);t.exports=a.exports},function(t,e,n){n(100);var a=n(0)(n(63),n(89),null,null);t.exports=a.exports},function(t,e,n){n(102);var a=n(0)(n(64),n(91),null,null);t.exports=a.exports},function(t,e,n){n(104);var a=n(0)(n(65),n(93),null,null);t.exports=a.exports},function(t,e,n){n(94);var a=n(0)(n(66),n(83),null,null);t.exports=a.exports},function(t,e,n){n(95);var a=n(0)(n(67),n(84),null,null);t.exports=a.exports},function(t,e,n){n(97);var a=n(0)(n(68),n(86),null,null);t.exports=a.exports},function(t,e,n){n(101);var a=n(0)(n(69),n(90),null,null);t.exports=a.exports},function(t,e,n){n(96);var a=n(0)(n(70),n(85),null,null);t.exports=a.exports},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(55),i=n.n(a),o=n(53),s=n.n(o),l=n(11),r=n.n(l),c=n(52),u=n.n(c),d=n(60),v=n.n(d),p=n(59),f=n.n(p),m=n(51),_=n.n(m),h=n(54),g=n.n(h),b=n(57),y=n.n(b),x=n(56),w=n.n(x),C=n(58),R=n.n(C);e.default={components:{NavComponent:r.a,HomeComponent:u.a,LoginComponent:i.a,IntroComponent:s.a,PollutionComponent:f.a,WaterComponent:v.a,ConclusionComponent:_.a,LightsComponent:g.a,PlasticBottleComponent:y.a,MeatComponent:w.a,PledgeComponent:R.a},methods:{scroll:function(t){this.$SmoothScroll(document.getElementById(t))}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{fbData:{}}},created:function(){var t=this;firebase.database().ref("Pledge/").on("value",function(e){t.fbData=e.val()})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{traditionalBulb:2}}}},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{meals:1,cowWeight:1e3,cowLife:540,cowMethane:250,poundPerMeal:.5}},methods:{totalCow:function(){return this.cowLife*this.cowMethane*(this.poundPerMeal/this.cowWeight)*this.meals}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{numRefills:6}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{showerMinutes:2,milesReduced:2,lightReplace:2,bottlesReduced:2,meatReduced:2,pledgeMade:!1,fbData:{}}},created:function(){},methods:{postData:function(){var t=this;firebase.database().ref("Pledge/").transaction(function(e){return t.pledgeMade=!0,e.showerMinutes+=t.showerMinutes,e.milesReduced+=t.milesReduced,e.lightReplace+=t.lightReplace,e.bottlesReduced+=t.bottlesReduced,e.meatReduced+=t.meatReduced,e.usersPledged+=1,t.fbData=e,e})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{distance:2,mpg:25}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{minutes:2,waterSaved:0}},created:function(){this.waterSaved=2.1*this.minutes},watch:{minutes:function(t,e){this.waterSaved=(2.1*this.minutes).toFixed(1)}}}},function(t,e,n){e=t.exports=n(1)(void 0),e.push([t.i,"",""])},function(t,e,n){e=t.exports=n(1)(void 0),e.push([t.i,"",""])},function(t,e,n){e=t.exports=n(1)(void 0),e.push([t.i,"#child{display:inline-block;vertical-align:top}",""])},function(t,e,n){e=t.exports=n(1)(void 0),e.push([t.i,"",""])},function(t,e,n){e=t.exports=n(1)(void 0),e.push([t.i,".fullscreen{width:100%;height:100vh;display:flex;justify-content:center;align-items:center}.bottom_aligner{display:inline-block;align-self:flex-end;margin-top:auto}#component{margin:0 auto;max-width:800px;padding-top:60px;padding-left:20px;padding-right:20px}",""])},function(t,e,n){e=t.exports=n(1)(void 0),e.push([t.i,"",""])},function(t,e,n){e=t.exports=n(1)(void 0),e.push([t.i,"",""])},function(t,e,n){e=t.exports=n(1)(void 0),e.push([t.i,"",""])},function(t,e,n){e=t.exports=n(1)(void 0),e.push([t.i,"",""])},function(t,e,n){e=t.exports=n(1)(void 0),e.push([t.i,"",""])},function(t,e,n){e=t.exports=n(1)(void 0),e.push([t.i,"",""])},function(t,e,n){n(103);var a=n(0)(null,n(92),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fa fa-cutlery",staticStyle:{"font-size":"10em"},attrs:{"aria-hidden":"true"}}),t._v(" "),n("h1",[t._v("Reduce Your Meat Consumption")]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v("If you reduced the amount of meat you consume each week by "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.meals,expression:"meals"}],staticStyle:{width:"20px"},attrs:{maxlength:"2"},domProps:{value:t.meals},on:{input:function(e){e.target.composing||(t.meals=e.target.value)}}}),t._v(" meals, you would reduce your impact on methane emissions in a day by "),n("b",[t._v(t._s(t.totalCow()))]),t._v(" liters")]),t._v(" "),n("p",[t._v("...in a week "),n("b",[t._v(t._s((7*t.totalCow()).toFixed(1)))]),t._v(" liters")]),t._v(" "),n("p",[t._v("...in a month "),n("b",[t._v(t._s((31*t.totalCow()).toFixed(1)))]),t._v(" liters")]),t._v(" "),n("p",[t._v("...in a year a whopping "),n("b",[t._v(t._s((365*t.totalCow()).toFixed(1)))]),t._v(" liters!!")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Methane from cattle accounts for "),n("b",[t._v("14.5")]),t._v(" and "),n("b",[t._v("18")]),t._v(" percent of the total greenhouse gas emissions")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fa fa-tint",staticStyle:{"font-size":"10em"},attrs:{"aria-hidden":"true"}}),t._v(" "),n("h2",[t._v("Reusable Water Bottles!")]),t._v(" "),n("p",[t._v("Roughly only 20% of plastic bottles are recycled in the US.")]),t._v(" "),n("p",[t._v("For "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.numRefills,expression:"numRefills"}],staticStyle:{width:"20px"},attrs:{maxlength:"2"},domProps:{value:t.numRefills},on:{input:function(e){e.target.composing||(t.numRefills=e.target.value)}}}),t._v(" refills of a 32oz standard water bottle, you would be saving "),n("b",[t._v(t._s(Math.ceil(2*t.numRefills*.8))+" plastic bottles from the landfill.")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fa fa-shower",staticStyle:{"font-size":"10em"},attrs:{"aria-hidden":"true"}}),t._v(" "),n("h2",[t._v("Take Shorter Showers")]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v("If you showered "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.minutes,expression:"minutes"}],staticStyle:{width:"20px"},attrs:{maxlength:"2"},domProps:{value:t.minutes},on:{input:function(e){e.target.composing||(t.minutes=e.target.value)}}}),t._v(" minutes less a day, you would save "),n("b",[t._v(t._s(t.waterSaved)+" gallons")]),t._v(" a shower.")]),t._v(" "),n("p",[t._v("...in a week "),n("b",[t._v(t._s((7*t.waterSaved).toFixed(1))+" ")]),t._v("gallons")]),t._v(" "),n("p",[t._v("...in a month "),n("b",[t._v(t._s((31*t.waterSaved).toFixed(1)))]),t._v(" gallons")]),t._v(" "),n("p",[t._v("...in a year a whopping "),n("b",[t._v(t._s((365*t.waterSaved).toFixed(1)))]),t._v(" gallons!!")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("In an average home, showers have the third largest water usage, after toilets and washing machines. On average each shower uses "),n("b",[t._v("17.2 gallons")]),t._v(" over "),n("b",[t._v("8 minutes")]),t._v(".")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fa fa-handshake-o",staticStyle:{"font-size":"10em"},attrs:{"aria-hidden":"true"}}),t._v(" "),t.pledgeMade?t._e():n("span",[n("h1",[t._v("Make the Pledge!")]),t._v(" "),n("p",[t._v("I will commit to:")]),t._v(" "),n("p",[t._v("showering "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.showerMinutes,expression:"showerMinutes"}],staticStyle:{width:"20px"},attrs:{maxlength:"2",disabled:t.pledgeMade},domProps:{value:t.showerMinutes},on:{input:function(e){e.target.composing||(t.showerMinutes=e.target.value)}}}),t._v(" minutes less a day")]),t._v(" "),n("p",[t._v("driving   "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.milesReduced,expression:"milesReduced"}],staticStyle:{width:"20px"},attrs:{maxlength:"2",disabled:t.pledgeMade},domProps:{value:t.milesReduced},on:{input:function(e){e.target.composing||(t.milesReduced=e.target.value)}}}),t._v(" miles less a day")]),t._v(" "),n("p",[t._v("replacing "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lightReplace,expression:"lightReplace"}],staticStyle:{width:"20px"},attrs:{maxlength:"2",disabled:t.pledgeMade},domProps:{value:t.lightReplace},on:{input:function(e){e.target.composing||(t.lightReplace=e.target.value)}}}),t._v(" traditional light bulbs")]),t._v(" "),n("p",[t._v("using     "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.bottlesReduced,expression:"bottlesReduced"}],staticStyle:{width:"20px"},attrs:{maxlength:"2",disabled:t.pledgeMade},domProps:{value:t.bottlesReduced},on:{input:function(e){e.target.composing||(t.bottlesReduced=e.target.value)}}}),t._v(" disposable water bottles less a week")]),t._v(" "),n("p",[t._v("eating \t "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.meatReduced,expression:"meatReduced"}],staticStyle:{width:"20px"},attrs:{maxlength:"2",disabled:t.pledgeMade},domProps:{value:t.meatReduced},on:{input:function(e){e.target.composing||(t.meatReduced=e.target.value)}}}),t._v(" less meals with meat a week")]),t._v(" "),n("input",{attrs:{type:"button",value:"Make the Pledge!",disabled:t.pledgeMade},on:{click:function(e){t.postData()}}})]),t._v(" "),t.pledgeMade?n("span",[n("h2",[t._v("Thanks for making the pledge!! You and "+t._s(t.fbData.usersPledged)+" others have committed to:")]),t._v(" "),n("p",[t._v("Using "+t._s((2.1*t.fbData.showerMinutes).toFixed(1))+" gallons when showering per day!")]),t._v(" "),n("p",[t._v("Reducing car pollution by "+t._s((t.fbData.milesReduced/25*19.5).toFixed(1))+" pounds!")]),t._v(" "),n("p",[t._v("Saving $"+t._s(100*t.fbData.lightReplace)+" a year on energy!")]),t._v(" "),n("p",[t._v("Using "+t._s(t.fbData.bottlesReduced)+" less disposible plastic bottles per week!")]),t._v(" "),n("p",[t._v("Reducing methane emissions by "+t._s((67.5*t.fbData.meatReduced).toFixed(1))+" liters a day!")])]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"content"}},[n("div",{staticClass:"fullscreen",staticStyle:{"background-color":"#00e676"},attrs:{id:"intro"}},[n("div",{attrs:{id:"component"}},[n("intro-component")],1),t._v(" "),n("div",{staticClass:"bottom_aligner"},[n("a",{attrs:{href:"#water"},on:{click:function(e){t.scroll("water")}}},[n("i",{staticClass:"fa fa-angle-down",staticStyle:{"font-size":"7em"}})])])]),t._v(" "),n("div",{staticClass:"fullscreen",staticStyle:{"background-color":"#00b0ff"},attrs:{id:"water"}},[n("div",{attrs:{id:"component"}},[n("water-component")],1),t._v(" "),n("div",{staticClass:"bottom_aligner"},[n("a",{attrs:{href:"#pollution"},on:{click:function(e){t.scroll("pollution")}}},[n("i",{staticClass:"fa fa-angle-down",staticStyle:{"font-size":"7em"}})])])]),t._v(" "),n("div",{staticClass:"fullscreen",staticStyle:{"background-color":"#bdbdbd"},attrs:{id:"pollution"}},[n("div",{attrs:{id:"component"}},[n("pollution-component")],1),t._v(" "),n("div",{staticClass:"bottom_aligner"},[n("a",{attrs:{href:"#lights"},on:{click:function(e){t.scroll("lights")}}},[n("i",{staticClass:"fa fa-angle-down",staticStyle:{"font-size":"7em"}})])])]),t._v(" "),n("div",{staticClass:"fullscreen",staticStyle:{"background-color":"#ffea00"},attrs:{id:"lights"}},[n("div",{attrs:{id:"component"}},[n("lights-component")],1),t._v(" "),n("div",{staticClass:"bottom_aligner"},[n("a",{attrs:{href:"#plastic"},on:{click:function(e){t.scroll("plasticBottle")}}},[n("i",{staticClass:"fa fa-angle-down",staticStyle:{"font-size":"7em"}})])])]),t._v(" "),n("div",{staticClass:"fullscreen",staticStyle:{"background-color":"cadetblue"},attrs:{id:"plasticBottle"}},[n("div",{attrs:{id:"component"}},[n("plastic-bottle-component")],1),t._v(" "),n("div",{staticClass:"bottom_aligner"},[n("a",{attrs:{href:"#meat"},on:{click:function(e){t.scroll("meat")}}},[n("i",{staticClass:"fa fa-angle-down",staticStyle:{"font-size":"7em"}})])])]),t._v(" "),n("div",{staticClass:"fullscreen",staticStyle:{"background-color":"indianred"},attrs:{id:"meat"}},[n("div",{attrs:{id:"component"}},[n("meat-component")],1),t._v(" "),n("div",{staticClass:"bottom_aligner"},[n("a",{attrs:{href:"#pledge"},on:{click:function(e){t.scroll("pledge")}}},[n("i",{staticClass:"fa fa-angle-down",staticStyle:{"font-size":"7em"}})])])]),t._v(" "),n("div",{staticClass:"fullscreen",staticStyle:{"background-color":"mediumseagreen"},attrs:{id:"pledge"}},[n("div",{attrs:{id:"component"}},[n("pledge-component")],1),t._v(" "),n("div",{staticClass:"bottom_aligner"},[n("a",{attrs:{href:"#conclusion"},on:{click:function(e){t.scroll("conclusion")}}},[n("i",{staticClass:"fa fa-angle-down",staticStyle:{"font-size":"7em"}})])])]),t._v(" "),n("div",{staticClass:"fullscreen",staticStyle:{"background-color":"#7c4dff"},attrs:{id:"conclusion"}},[n("div",{attrs:{id:"component"}},[n("conclusion-component")],1),t._v(" "),n("div",{staticClass:"bottom_aligner"},[n("a",{attrs:{href:"#intro"},on:{click:function(e){t.scroll("intro")}}},[n("i",{staticClass:"fa fa-angle-down",staticStyle:{"font-size":"7em"}})])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fa fa-tree",staticStyle:{"font-size":"10em"},attrs:{"aria-hidden":"true"}}),t._v(" "),n("p",[t._v("Meaningful yet small steps towards reducing your individual environmental impact can lead to real, measurable and positive change for the planet. Changing a habit or two, educating yourself and making smarter choices - a little bit at a time is really all that it takes.")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"col-one"},[n("i",{staticClass:"fa fa-globe",staticStyle:{"font-size":"10em"},attrs:{"aria-hidden":"true"}}),t._v(" "),n("h1",[t._v("CleanEarth.Life - A little change goes far")]),t._v(" "),n("h4",[t._v("So far, "+t._s(t.fbData.usersPledged)+" people have pledged to:")]),t._v(" "),n("p",[t._v("Using "+t._s((2.1*t.fbData.showerMinutes).toFixed(1))+" gallons less when showering per day!")]),t._v(" "),n("p",[t._v("Reducing car pollution by "+t._s((t.fbData.milesReduced/25*19.5).toFixed(1))+" pounds per day!")]),t._v(" "),n("p",[t._v("Saving $"+t._s(100*t.fbData.lightReplace)+" a year on energy!")]),t._v(" "),n("p",[t._v("Using "+t._s(t.fbData.bottlesReduced)+" less disposible plastic bottles per week!")]),t._v(" "),n("p",[t._v("Reducing methane emissions by "+t._s((67.5*t.fbData.meatReduced).toFixed(1))+" liters a day!")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("Want to get involved? Scroll down!")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fa fa-car",staticStyle:{"font-size":"10em"},attrs:{"aria-hidden":"true"}}),t._v(" "),n("h1",[t._v("Reduce Car Emissions")]),t._v(" "),n("p",[t._v("Drive more conservatively to reduce amount of fuel that you use")]),t._v(" "),n("p",[t._v("If you reduced your daily commute by "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.distance,expression:"distance"}],staticStyle:{width:"20px"},attrs:{maxlength:"2"},domProps:{value:t.distance},on:{input:function(e){e.target.composing||(t.distance=e.target.value)}}}),t._v(" miles per day in a car that averaged "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mpg,expression:"mpg"}],staticStyle:{width:"20px"},attrs:{maxlength:"2"},domProps:{value:t.mpg},on:{input:function(e){e.target.composing||(t.mpg=e.target.value)}}}),t._v(" city miles per gallon, you would save a daily amount of "),n("b",[t._v(t._s((t.distance/t.mpg*19.5).toFixed(1))+" pounds")]),t._v(" of pollution")]),t._v(" "),n("p",[t._v("...in a week "),n("b",[t._v(t._s((t.distance/t.mpg*19.5*7).toFixed(1)))]),t._v(" pounds")]),t._v(" "),n("p",[t._v("...in a month "),n("b",[t._v(t._s((t.distance/t.mpg*19.5*31).toFixed(1)))]),t._v(" pounds")]),t._v(" "),n("p",[t._v("...in a year a whopping "),n("b",[t._v(t._s((t.distance/t.mpg*19.5*365).toFixed(1)))]),t._v(" pounds!!")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fa fa-lightbulb-o",staticStyle:{"font-size":"10em"},attrs:{"aria-hidden":"true"}}),t._v(" "),n("h2",[t._v("Energy Efficient Lighting")]),t._v(" "),n("p",[t._v("Replacing traditional lights with energy efficient lighting can save 25%-80% less energy and can last 3-25 times longer (energy.gov)")]),t._v(" "),n("p",[t._v("For every "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.traditionalBulb,expression:"traditionalBulb"}],staticStyle:{width:"20px"},attrs:{maxlength:"2"},domProps:{value:t.traditionalBulb},on:{input:function(e){e.target.composing||(t.traditionalBulb=e.target.value)}}}),t._v(" traditional light bulbs (60w Incandecent) replaced with energy efficient bulbs (10w LED), you save nearly "),n("b",[t._v("$"+t._s(100*t.traditionalBulb)+" a year!!")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"a2a_kit a2a_kit_size_32 a2a_default_style"})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form"},[n("div",{attrs:{id:"login"}},[n("h1",[t._v("Welcome Back!")]),t._v(" "),n("form",{attrs:{action:"/login",method:"post"}},[n("div",{staticClass:"field-wrap"},[n("label",[t._v("\n\t\t\t\t\tUsername"),n("span",{staticClass:"req"},[t._v("*")])]),t._v(" "),n("input",{attrs:{type:"text",required:"",autocomplete:"off",name:"username"}})]),t._v(" "),n("div",{staticClass:"field-wrap"},[n("label",[t._v("\n\t\t\t\t\tPassword"),n("span",{staticClass:"req"},[t._v("*")])]),t._v(" "),n("input",{attrs:{type:"password",required:"",autocomplete:"off",name:"password"}})]),t._v(" "),n("p",{staticClass:"forgot"},[n("a",{attrs:{href:"/signup"}},[t._v("Need an Account?")])]),t._v(" "),n("button",{staticClass:"button button-block"},[t._v("Log In")])])])])}]}},function(t,e,n){var a=n(71);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(2)("4c5f976c",a,!0)},function(t,e,n){var a=n(72);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(2)("6df6c3c9",a,!0)},function(t,e,n){var a=n(73);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(2)("748d2f12",a,!0)},function(t,e,n){var a=n(74);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(2)("d70c33bc",a,!0)},function(t,e,n){var a=n(75);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(2)("58adeeff",a,!0)},function(t,e,n){var a=n(76);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(2)("01484a9e",a,!0)},function(t,e,n){var a=n(77);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(2)("993ec510",a,!0)},function(t,e,n){var a=n(78);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(2)("c2d2c2b2",a,!0)},function(t,e,n){var a=n(79);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(2)("6b237d79",a,!0)},function(t,e,n){var a=n(80);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(2)("0eb926aa",a,!0)},function(t,e,n){var a=n(81);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(2)("283c4f57",a,!0)}]));