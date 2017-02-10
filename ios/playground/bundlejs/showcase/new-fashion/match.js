/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(244)
	var __weex_template__ = __webpack_require__(285)
	var __weex_style__ = __webpack_require__(286)
	var __weex_script__ = __webpack_require__(287)

	__weex_define__('@weex-component/e4f94096a035d75578fa1eb2d8967b5f', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/e4f94096a035d75578fa1eb2d8967b5f',undefined,undefined)

/***/ },

/***/ 242:
/***/ function(module, exports) {

	module.exports = {
	  "type": "image",
	  "style": {
	    "width": function () {return this.width},
	    "height": function () {return this.height}
	  },
	  "attr": {
	    "src": function () {return this.src},
	    "imageQuality": function () {return this.quality}
	  },
	  "events": {
	    "click": "_clickHandler"
	  }
	}

/***/ },

/***/ 243:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    quality: 'normal',
	    width: 0,
	    height: 0,
	    src: '',
	    href: '',
	    spmc: 0,
	    spmd: 0
	  }},
	  methods: {
	    ready: function ready() {},
	    _clickHandler: function _clickHandler() {
	      this.$call('modal', 'toast', {
	        message: 'click',
	        duration: 1
	      });
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(242)
	var __weex_script__ = __webpack_require__(243)

	__weex_define__('@weex-component/banner', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})


/***/ },

/***/ 285:
/***/ function(module, exports) {

	module.exports = {
	  "type": "container",
	  "children": [
	    {
	      "type": "image",
	      "shown": function () {return this.ds.floorTitle},
	      "classList": [
	        "title"
	      ],
	      "attr": {
	        "src": function () {return this.ds.floorTitle}
	      }
	    },
	    {
	      "type": "container",
	      "classList": [
	        "tm-banner"
	      ],
	      "shown": function () {return this.ds.isShowTmSpecBanner&&this.ds.tmSpecBanner&&this.isTM},
	      "children": [
	        {
	          "type": "banner",
	          "attr": {
	            "width": function () {return this.NUMBER_750},
	            "height": function () {return this.NUMBER_200},
	            "src": function () {return this.ds.tmSpecBanner.img},
	            "href": function () {return this.ds.tmSpecBanner.url}
	          }
	        }
	      ]
	    },
	    {
	      "type": "container",
	      "repeat": function () {return this.ds.bannerItems},
	      "style": {
	        "flexDirection": "row",
	        "marginBottom": function () {return this.NUMBER_4}
	      },
	      "children": [
	        {
	          "type": "container",
	          "style": {
	            "marginRight": function () {return this.NUMBER_4}
	          },
	          "children": [
	            {
	              "type": "banner",
	              "attr": {
	                "width": function () {return this.NUMBER_373},
	                "height": function () {return this.NUMBER_240},
	                "src": function () {return this.leftImg},
	                "href": function () {return this.leftUrl}
	              }
	            }
	          ]
	        },
	        {
	          "type": "container",
	          "children": [
	            {
	              "type": "banner",
	              "attr": {
	                "width": function () {return this.NUMBER_373},
	                "height": function () {return this.NUMBER_240},
	                "src": function () {return this.rightImg},
	                "href": function () {return this.rightUrl}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 286:
/***/ function(module, exports) {

	module.exports = {
	  "title": {
	    "width": 750,
	    "height": 100
	  },
	  "tm-banner": {
	    "bottom": 4
	  }
	}

/***/ },

/***/ 287:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	  data: function () {return {
	    NUMBER_750: 750,
	    NUMBER_373: 373,
	    NUMBER_240: 240,
	    NUMBER_200: 200,
	    NUMBER_4: 4
	  }},
	  methods: {
	    ready: function ready() {
	      var self = this;
	      self._initEnv();
	      self._addBannerIndex();
	    },
	    _initEnv: function _initEnv() {
	      var self = this;
	      self.isTM = self._app.IS_TM;
	    },
	    _addBannerIndex: function _addBannerIndex() {
	      var self = this;
	      var ds = self.ds;
	      if (!ds || !ds.bannerItems) return;
	      for (var i = 0; i < ds.bannerItems.length; i++) {
	        ds.bannerItems[i].index = i;
	      }
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });