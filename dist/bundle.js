/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/EntityRepository.ts":
/*!*********************************!*\
  !*** ./src/EntityRepository.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityRepository": () => (/* binding */ EntityRepository)
/* harmony export */ });
var EntityRepository = /** @class */ (function () {
    function EntityRepository() {
    }
    EntityRepository.allModels = [];
    return EntityRepository;
}());



/***/ }),

/***/ "./src/ModelFactory.ts":
/*!*****************************!*\
  !*** ./src/ModelFactory.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelFactory": () => (/* binding */ ModelFactory)
/* harmony export */ });
/* harmony import */ var _models_CircleModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/CircleModel */ "./src/models/CircleModel.ts");
/* harmony import */ var _models_RectModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/RectModel */ "./src/models/RectModel.ts");
/* harmony import */ var _models_TriangleModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/TriangleModel */ "./src/models/TriangleModel.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ "./src/Utils.ts");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setup */ "./src/setup.ts");





var ModelFactory = /** @class */ (function () {
    function ModelFactory() {
    }
    ModelFactory.create = function (type) {
        switch (type) {
            case "random":
                return this.createRandomModel();
                break;
            default:
                throw new Error("Can't create circuit: " + type);
        }
    };
    ModelFactory.createRandomModel = function () {
        var speed = _Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.generateRandom(_setup__WEBPACK_IMPORTED_MODULE_4__.Setup.CONFIG.MIN_SPEED, _setup__WEBPACK_IMPORTED_MODULE_4__.Setup.CONFIG.MAX_SPEED);
        switch (_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.pickRandomFromArray(_setup__WEBPACK_IMPORTED_MODULE_4__.Setup.CONFIG.ENABLED_MODELS)) {
            case _models_CircleModel__WEBPACK_IMPORTED_MODULE_0__.CircleModel.MODEL_NAME:
                return this.createRandomCircle(speed);
                break;
            case _models_TriangleModel__WEBPACK_IMPORTED_MODULE_2__.TriangleModel.MODEL_NAME:
                return this.createRandomTriangle(speed);
                break;
            case _models_RectModel__WEBPACK_IMPORTED_MODULE_1__.RectModel.MODEL_NAME:
                return this.createRandomRect(speed);
                break;
        }
    };
    ModelFactory.createRandomCircle = function (maxSpeed) {
        var radius = _Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.generateRandom(10, 30) * _setup__WEBPACK_IMPORTED_MODULE_4__.Setup.CONFIG.SIZE_MULTIPLAYER;
        var circleStart = _setup__WEBPACK_IMPORTED_MODULE_4__.Setup.CONFIG.START_POSITION == 'random' ? this.generateStartPositionRadiusBased(Math.random() * window.innerWidth, Math.random() * window.innerHeight, radius) : _Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.middlePosition();
        var dx = (Math.random() - 0.5) * maxSpeed;
        var dy = (Math.random() - 0.5) * maxSpeed;
        return new _models_CircleModel__WEBPACK_IMPORTED_MODULE_0__.CircleModel(circleStart.x, circleStart.y, dx, dy, radius);
    };
    ModelFactory.createRandomTriangle = function (maxSpeed) {
        var sideLength = 33;
        var dx = (Math.random() - 0.5) * maxSpeed;
        var dy = (Math.random() - 0.5) * maxSpeed;
        var rectRadius = sideLength * _setup__WEBPACK_IMPORTED_MODULE_4__.Setup.CONFIG.SIZE_MULTIPLAYER;
        var rectStart = _setup__WEBPACK_IMPORTED_MODULE_4__.Setup.CONFIG.START_POSITION == 'random' ? this.generateStartPositionRadiusBased(Math.random() * window.innerWidth, Math.random() * window.innerHeight, rectRadius) : _Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.middlePosition();
        return new _models_TriangleModel__WEBPACK_IMPORTED_MODULE_2__.TriangleModel(rectStart.x, rectStart.y, dx, dy, sideLength, _setup__WEBPACK_IMPORTED_MODULE_4__.Setup.CONFIG.LINE_WIDTH);
    };
    ModelFactory.createRandomRect = function (maxSpeed) {
        var width = _Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.generateRandom(11, 100) * _setup__WEBPACK_IMPORTED_MODULE_4__.Setup.CONFIG.SIZE_MULTIPLAYER;
        var height = _Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.generateRandom(11, 100) * _setup__WEBPACK_IMPORTED_MODULE_4__.Setup.CONFIG.SIZE_MULTIPLAYER;
        var dx = (Math.random() - 0.5) * maxSpeed;
        var dy = (Math.random() - 0.5) * maxSpeed;
        var rectRadius = height < width ? width : height;
        var rectStart = _setup__WEBPACK_IMPORTED_MODULE_4__.Setup.CONFIG.START_POSITION == 'random' ? this.generateStartPositionRadiusBased(Math.random() * window.innerWidth, Math.random() * window.innerHeight, rectRadius * 2) : _Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.middlePosition();
        return new _models_RectModel__WEBPACK_IMPORTED_MODULE_1__.RectModel(rectStart.x, rectStart.y, dx, dy, width * _setup__WEBPACK_IMPORTED_MODULE_4__.Setup.CONFIG.SIZE_MULTIPLAYER, height);
    };
    ModelFactory.generateStartPositionRadiusBased = function (x, y, radius) {
        //if the circuit not fully in the browser
        if (x < 0 + radius) {
            x = 0 + radius;
        }
        else if (x > innerWidth - radius) {
            x = innerWidth - radius;
        }
        if (y < 0 + radius) {
            y = 0 + radius;
        }
        else if (y > innerHeight - radius) {
            y = innerHeight - radius;
        }
        return { x: x, y: y };
    };
    return ModelFactory;
}());



/***/ }),

/***/ "./src/Utils.ts":
/*!**********************!*\
  !*** ./src/Utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => (/* binding */ Utils)
/* harmony export */ });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.generateRandom = function (min, max) {
        var difference = max - min;
        var rand = Math.random();
        rand = Math.floor(rand * difference);
        rand = rand + min;
        return rand;
    };
    Utils.pickRandomFromArray = function (arr) {
        return arr[this.generateRandom(0, arr.length)];
    };
    Utils.middlePosition = function () {
        return { x: innerWidth / 2, y: innerHeight / 2 };
    };
    return Utils;
}());



/***/ }),

/***/ "./src/canvas/Animator.ts":
/*!********************************!*\
  !*** ./src/canvas/Animator.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animator": () => (/* binding */ Animator)
/* harmony export */ });
/* harmony import */ var _EntityRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EntityRepository */ "./src/EntityRepository.ts");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./src/canvas/Context.ts");


var Animator = /** @class */ (function () {
    function Animator() {
    }
    Animator.animate = function () {
        requestAnimationFrame(Animator.animate); //infinite loop
        _Context__WEBPACK_IMPORTED_MODULE_1__.Context.ctx.clearRect(0, 0, innerWidth, innerHeight);
        for (var i = 0; i < _EntityRepository__WEBPACK_IMPORTED_MODULE_0__.EntityRepository.allModels.length; i++) {
            _EntityRepository__WEBPACK_IMPORTED_MODULE_0__.EntityRepository.allModels[i].update(_Context__WEBPACK_IMPORTED_MODULE_1__.Context.ctx);
        }
    };
    return Animator;
}());



/***/ }),

/***/ "./src/canvas/Context.ts":
/*!*******************************!*\
  !*** ./src/canvas/Context.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../setup */ "./src/setup.ts");

var Context = /** @class */ (function () {
    function Context() {
    }
    Context.getContext = function (elementId) {
        if (elementId === void 0) { elementId = "myCanvas"; }
        var index = document.getElementById(elementId);
        index.width = window.innerWidth;
        index.height = window.innerHeight;
        var ctx = index.getContext('2d');
        if (!ctx) {
            throw new Error("Cannot get context");
        }
        if (_setup__WEBPACK_IMPORTED_MODULE_0__.Setup.CONFIG.BACKGROUND_COLOR != 'none') {
            index.style = "background: " + _setup__WEBPACK_IMPORTED_MODULE_0__.Setup.CONFIG.BACKGROUND_COLOR + ";";
        }
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, innerWidth, innerHeight);
        this.ctx = ctx;
        return ctx;
    };
    return Context;
}());



/***/ }),

/***/ "./src/models/CircleModel.ts":
/*!***********************************!*\
  !*** ./src/models/CircleModel.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircleModel": () => (/* binding */ CircleModel)
/* harmony export */ });
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../setup */ "./src/setup.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils */ "./src/Utils.ts");


var CircleModel = /** @class */ (function () {
    function CircleModel(x, y, dx, dy, radius, lineWidth) {
        if (lineWidth === void 0) { lineWidth = _setup__WEBPACK_IMPORTED_MODULE_0__.Setup.CONFIG.LINE_WIDTH; }
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.lineWidth = lineWidth;
        this.color = _Utils__WEBPACK_IMPORTED_MODULE_1__.Utils.pickRandomFromArray(_setup__WEBPACK_IMPORTED_MODULE_0__.Setup.CONFIG.COLORS);
    }
    CircleModel.prototype.draw = function (context) {
        context.lineWidth = this.lineWidth;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = this.color;
        context.stroke();
        context.lineWidth = _setup__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LINE_WIDTH;
    };
    CircleModel.prototype.update = function (context) {
        if (this.x > innerWidth - this.radius || this.x < 0 + this.radius) {
            this.dx = -this.dx;
        }
        if (this.y > innerHeight - this.radius || this.y < 0 + this.radius) {
            this.dy = -this.dy;
        }
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
        this.draw(context);
    };
    CircleModel.MODEL_NAME = 'Circle';
    return CircleModel;
}());



/***/ }),

/***/ "./src/models/RectModel.ts":
/*!*********************************!*\
  !*** ./src/models/RectModel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RectModel": () => (/* binding */ RectModel)
/* harmony export */ });
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../setup */ "./src/setup.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils */ "./src/Utils.ts");


var RectModel = /** @class */ (function () {
    function RectModel(x, y, dx, dy, width, height, lineWidth) {
        if (lineWidth === void 0) { lineWidth = _setup__WEBPACK_IMPORTED_MODULE_0__.Setup.CONFIG.LINE_WIDTH; }
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.width = width;
        this.height = height;
        this.lineWidth = lineWidth;
        this.color = _Utils__WEBPACK_IMPORTED_MODULE_1__.Utils.pickRandomFromArray(_setup__WEBPACK_IMPORTED_MODULE_0__.Setup.CONFIG.COLORS);
    }
    RectModel.prototype.draw = function (context) {
        context.beginPath();
        context.lineWidth = this.lineWidth;
        context.rect(this.x, this.y, this.width, this.height);
        context.strokeStyle = this.color;
        context.stroke();
        context.lineWidth = _setup__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LINE_WIDTH;
    };
    RectModel.prototype.update = function (context) {
        if (this.x > innerWidth - this.width || this.x < 0) {
            this.dx = -this.dx;
        }
        if (this.y > innerHeight - this.height || this.y < 0) {
            this.dy = -this.dy;
        }
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
        this.draw(context);
    };
    RectModel.MODEL_NAME = 'Rect';
    return RectModel;
}());



/***/ }),

/***/ "./src/models/TriangleModel.ts":
/*!*************************************!*\
  !*** ./src/models/TriangleModel.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TriangleModel": () => (/* binding */ TriangleModel)
/* harmony export */ });
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../setup */ "./src/setup.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils */ "./src/Utils.ts");


var TriangleModel = /** @class */ (function () {
    function TriangleModel(x, y, dx, dy, sideLength, lineWidth) {
        if (lineWidth === void 0) { lineWidth = _setup__WEBPACK_IMPORTED_MODULE_0__.Setup.CONFIG.LINE_WIDTH; }
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.sideLength = sideLength;
        this.lineWidth = lineWidth;
        this.color = _Utils__WEBPACK_IMPORTED_MODULE_1__.Utils.pickRandomFromArray(_setup__WEBPACK_IMPORTED_MODULE_0__.Setup.CONFIG.COLORS);
    }
    TriangleModel.prototype.draw = function (ctx) {
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.sideLength, this.y - this.sideLength);
        ctx.lineTo(this.x + this.sideLength * 2, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.lineWidth = _setup__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LINE_WIDTH;
    };
    TriangleModel.prototype.update = function (context) {
        if (this.x > innerWidth - this.sideLength || this.x < 0) {
            this.dx = -this.dx;
        }
        if (this.y > innerHeight - this.sideLength || this.y < 0) {
            this.dy = -this.dy;
        }
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
        this.draw(context);
    };
    TriangleModel.MODEL_NAME = 'Triangle';
    return TriangleModel;
}());



/***/ }),

/***/ "./src/setup.ts":
/*!**********************!*\
  !*** ./src/setup.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_LINE_WIDTH": () => (/* binding */ DEFAULT_LINE_WIDTH),
/* harmony export */   "Setup": () => (/* binding */ Setup)
/* harmony export */ });
var DEFAULT_LINE_WIDTH = 2;
var Setup = /** @class */ (function () {
    function Setup() {
    }
    Setup.CONFIG = {
        MODEL_NUMBERS: 11,
        COLORS: ['blue', 'red', 'green', 'black', 'yellow'],
        BACKGROUND_COLOR: 'none',
        ENABLED_MODELS: ['Triangle', 'Circle', 'Rect'],
        MIN_SPEED: 11,
        MAX_SPEED: 11,
        LINE_WIDTH: 3,
        SIZE_MULTIPLAYER: 2,
        START_POSITION: 'random'
    };
    return Setup;
}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas/Context */ "./src/canvas/Context.ts");
/* harmony import */ var _ModelFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModelFactory */ "./src/ModelFactory.ts");
/* harmony import */ var _EntityRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EntityRepository */ "./src/EntityRepository.ts");
/* harmony import */ var _canvas_Animator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas/Animator */ "./src/canvas/Animator.ts");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setup */ "./src/setup.ts");





function createShapeCanvas(htmlCanvasId, config) {
    if (htmlCanvasId === void 0) { htmlCanvasId = "myCanvas"; }
    if (config === void 0) { config = _setup__WEBPACK_IMPORTED_MODULE_4__.Setup.CONFIG; }
    _setup__WEBPACK_IMPORTED_MODULE_4__.Setup.CONFIG = Object.assign(_setup__WEBPACK_IMPORTED_MODULE_4__.Setup.CONFIG, config);
    _EntityRepository__WEBPACK_IMPORTED_MODULE_2__.EntityRepository.allModels = [];
    _canvas_Context__WEBPACK_IMPORTED_MODULE_0__.Context.getContext(htmlCanvasId);
    for (var i = 0; i < config.MODEL_NUMBERS; i++) {
        _EntityRepository__WEBPACK_IMPORTED_MODULE_2__.EntityRepository.allModels[i] = _ModelFactory__WEBPACK_IMPORTED_MODULE_1__.ModelFactory.create("random");
    }
    _canvas_Animator__WEBPACK_IMPORTED_MODULE_3__.Animator.animate();
}
window.createShapeCanvas = createShapeCanvas;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9zcmMvRW50aXR5UmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9zcmMvTW9kZWxGYWN0b3J5LnRzIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy8uL3NyYy9VdGlscy50cyIsIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9zcmMvY2FudmFzL0FuaW1hdG9yLnRzIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy8uL3NyYy9jYW52YXMvQ29udGV4dC50cyIsIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9zcmMvbW9kZWxzL0NpcmNsZU1vZGVsLnRzIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy8uL3NyYy9tb2RlbHMvUmVjdE1vZGVsLnRzIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy8uL3NyYy9tb2RlbHMvVHJpYW5nbGVNb2RlbC50cyIsIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9zcmMvc2V0dXAudHMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQUVBLENBQUM7SUFEVSwwQkFBUyxHQUFhLEVBQUUsQ0FBQztJQUNwQyx1QkFBQztDQUFBO0FBRjRCOzs7Ozs7Ozs7Ozs7Ozs7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QUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDRztBQUNRO0FBQ1Q7QUFDTjtBQUV2QyxTQUFTLGlCQUFpQixDQUFDLFlBQWlDLEVBQUUsTUFBdUM7SUFBMUUsd0RBQWlDO0lBQUUsa0NBQTJCLGdEQUFZO0lBQ2pHLGdEQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxnREFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRW5ELHlFQUEwQixHQUFHLEVBQUU7SUFDL0IsK0RBQWtCLENBQUMsWUFBWSxDQUFDO0lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzNDLHlFQUEwQixDQUFDLENBQUMsQ0FBQyxHQUFHLDhEQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2pFO0lBRUQsOERBQWdCLEVBQUU7QUFDdEIsQ0FBQztBQUVBLE1BQWMsQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJTW9kZWx9IGZyb20gXCIuL21vZGVscy9pbnRlcmZhY2VzL0lNb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgRW50aXR5UmVwb3NpdG9yeSB7XG4gICAgc3RhdGljIGFsbE1vZGVsczogSU1vZGVsW10gPSBbXTtcbn1cbiIsImltcG9ydCB7Q2lyY2xlTW9kZWx9IGZyb20gXCIuL21vZGVscy9DaXJjbGVNb2RlbFwiO1xuaW1wb3J0IHtSZWN0TW9kZWx9IGZyb20gXCIuL21vZGVscy9SZWN0TW9kZWxcIjtcbmltcG9ydCB7VHJpYW5nbGVNb2RlbH0gZnJvbSBcIi4vbW9kZWxzL1RyaWFuZ2xlTW9kZWxcIjtcbmltcG9ydCB7SU1vZGVsfSBmcm9tIFwiLi9tb2RlbHMvaW50ZXJmYWNlcy9JTW9kZWxcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQge1NldHVwfSBmcm9tIFwiLi9zZXR1cFwiO1xuXG5leHBvcnQgY2xhc3MgTW9kZWxGYWN0b3J5IHtcblxuICAgIHN0YXRpYyBjcmVhdGUodHlwZTogc3RyaW5nIHwgXCJyYW5kb21cIik6IElNb2RlbCB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcInJhbmRvbVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJhbmRvbU1vZGVsKClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGNyZWF0ZSBjaXJjdWl0OiAke3R5cGV9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZVJhbmRvbU1vZGVsKCkge1xuICAgICAgICBjb25zdCBzcGVlZCA9IFV0aWxzLmdlbmVyYXRlUmFuZG9tKFNldHVwLkNPTkZJRy5NSU5fU1BFRUQsIFNldHVwLkNPTkZJRy5NQVhfU1BFRUQpXG4gICAgICAgIHN3aXRjaCAoVXRpbHMucGlja1JhbmRvbUZyb21BcnJheShTZXR1cC5DT05GSUcuRU5BQkxFRF9NT0RFTFMpKSB7XG4gICAgICAgICAgICBjYXNlIENpcmNsZU1vZGVsLk1PREVMX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmFuZG9tQ2lyY2xlKHNwZWVkKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUcmlhbmdsZU1vZGVsLk1PREVMX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmFuZG9tVHJpYW5nbGUoc3BlZWQpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJlY3RNb2RlbC5NT0RFTF9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJhbmRvbVJlY3Qoc3BlZWQpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZVJhbmRvbUNpcmNsZShtYXhTcGVlZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IFV0aWxzLmdlbmVyYXRlUmFuZG9tKDEwLCAzMCkgKiBTZXR1cC5DT05GSUcuU0laRV9NVUxUSVBMQVlFUlxuICAgICAgICBjb25zdCBjaXJjbGVTdGFydCA9IFNldHVwLkNPTkZJRy5TVEFSVF9QT1NJVElPTiA9PSAncmFuZG9tJyA/IHRoaXMuZ2VuZXJhdGVTdGFydFBvc2l0aW9uUmFkaXVzQmFzZWQoTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lcldpZHRoLCBNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVySGVpZ2h0LCByYWRpdXMpOiBVdGlscy5taWRkbGVQb3NpdGlvbigpXG5cbiAgICAgICAgY29uc3QgZHggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBtYXhTcGVlZDtcbiAgICAgICAgY29uc3QgZHkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBtYXhTcGVlZDtcblxuICAgICAgICByZXR1cm4gbmV3IENpcmNsZU1vZGVsKGNpcmNsZVN0YXJ0LngsIGNpcmNsZVN0YXJ0LnksIGR4LCBkeSwgcmFkaXVzKVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZVJhbmRvbVRyaWFuZ2xlKG1heFNwZWVkOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2lkZUxlbmd0aCA9IDMzO1xuXG4gICAgICAgIGNvbnN0IGR4ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogbWF4U3BlZWQ7XG4gICAgICAgIGNvbnN0IGR5ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogbWF4U3BlZWQ7XG5cbiAgICAgICAgY29uc3QgcmVjdFJhZGl1czogbnVtYmVyID0gc2lkZUxlbmd0aCAqIFNldHVwLkNPTkZJRy5TSVpFX01VTFRJUExBWUVSO1xuICAgICAgICBjb25zdCByZWN0U3RhcnQgPSBTZXR1cC5DT05GSUcuU1RBUlRfUE9TSVRJT04gPT0gJ3JhbmRvbScgPyB0aGlzLmdlbmVyYXRlU3RhcnRQb3NpdGlvblJhZGl1c0Jhc2VkKE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJXaWR0aCwgTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lckhlaWdodCwgcmVjdFJhZGl1cyk6IFV0aWxzLm1pZGRsZVBvc2l0aW9uKClcbiAgICAgICAgcmV0dXJuIG5ldyBUcmlhbmdsZU1vZGVsKHJlY3RTdGFydC54LCByZWN0U3RhcnQueSwgZHgsIGR5LCBzaWRlTGVuZ3RoLCAgU2V0dXAuQ09ORklHLkxJTkVfV0lEVEgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZVJhbmRvbVJlY3QobWF4U3BlZWQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCB3aWR0aCA9IFV0aWxzLmdlbmVyYXRlUmFuZG9tKDExLCAxMDApICogU2V0dXAuQ09ORklHLlNJWkVfTVVMVElQTEFZRVI7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IFV0aWxzLmdlbmVyYXRlUmFuZG9tKDExLCAxMDApICogU2V0dXAuQ09ORklHLlNJWkVfTVVMVElQTEFZRVI7XG5cbiAgICAgICAgY29uc3QgZHggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBtYXhTcGVlZDtcbiAgICAgICAgY29uc3QgZHkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBtYXhTcGVlZDtcblxuICAgICAgICBjb25zdCByZWN0UmFkaXVzOiBudW1iZXIgPSBoZWlnaHQgPCB3aWR0aCA/IHdpZHRoIDogaGVpZ2h0O1xuICAgICAgICBjb25zdCByZWN0U3RhcnQgPSBTZXR1cC5DT05GSUcuU1RBUlRfUE9TSVRJT04gPT0gJ3JhbmRvbScgPyB0aGlzLmdlbmVyYXRlU3RhcnRQb3NpdGlvblJhZGl1c0Jhc2VkKE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJXaWR0aCwgTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lckhlaWdodCwgcmVjdFJhZGl1cyAqIDIpIDogVXRpbHMubWlkZGxlUG9zaXRpb24oKVxuICAgICAgICByZXR1cm4gbmV3IFJlY3RNb2RlbChyZWN0U3RhcnQueCwgcmVjdFN0YXJ0LnksIGR4LCBkeSwgd2lkdGggICogU2V0dXAuQ09ORklHLlNJWkVfTVVMVElQTEFZRVIsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdlbmVyYXRlU3RhcnRQb3NpdGlvblJhZGl1c0Jhc2VkKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpdXM6IG51bWJlcikge1xuICAgICAgICAvL2lmIHRoZSBjaXJjdWl0IG5vdCBmdWxseSBpbiB0aGUgYnJvd3NlclxuICAgICAgICBpZiAoeCA8IDAgKyByYWRpdXMpIHtcbiAgICAgICAgICAgIHggPSAwICsgcmFkaXVzO1xuICAgICAgICB9IGVsc2UgaWYgKHggPiBpbm5lcldpZHRoIC0gcmFkaXVzKSB7XG4gICAgICAgICAgICB4ID0gaW5uZXJXaWR0aCAtIHJhZGl1cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh5IDwgMCArIHJhZGl1cykge1xuICAgICAgICAgICAgeSA9IDAgKyByYWRpdXM7XG4gICAgICAgIH0gZWxzZSBpZiAoeSA+IGlubmVySGVpZ2h0IC0gcmFkaXVzKSB7XG4gICAgICAgICAgICB5ID0gaW5uZXJIZWlnaHQgLSByYWRpdXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt4LCB5fVxuICAgIH1cblxufVxuXG4iLCJleHBvcnQgY2xhc3MgVXRpbHMge1xuICAgIHN0YXRpYyBnZW5lcmF0ZVJhbmRvbShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGRpZmZlcmVuY2UgPSBtYXggLSBtaW47XG4gICAgICAgIGxldCByYW5kID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IocmFuZCAqIGRpZmZlcmVuY2UpO1xuICAgICAgICByYW5kID0gcmFuZCArIG1pbjtcbiAgICAgICAgcmV0dXJuIHJhbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIHBpY2tSYW5kb21Gcm9tQXJyYXk8VCA9IGFueT4oYXJyOiBUW10pOiBUe1xuICAgICAgICByZXR1cm4gYXJyW3RoaXMuZ2VuZXJhdGVSYW5kb20oMCwgYXJyLmxlbmd0aCldXG4gICAgfVxuXG4gICAgc3RhdGljIG1pZGRsZVBvc2l0aW9uKCl7XG4gICAgICAgIHJldHVybiB7eDogaW5uZXJXaWR0aCAvIDIsIHk6IGlubmVySGVpZ2h0IC8gMn1cbiAgICB9XG59IiwiaW1wb3J0IHsgRW50aXR5UmVwb3NpdG9yeSB9IGZyb20gXCIuLi9FbnRpdHlSZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiO1xuXG5leHBvcnQgY2xhc3MgQW5pbWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHN0YXRpYyBhbmltYXRlKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoQW5pbWF0b3IuYW5pbWF0ZSk7IC8vaW5maW5pdGUgbG9vcFxuXG4gICAgICAgIENvbnRleHQuY3R4LmNsZWFyUmVjdCgwLCAwLCBpbm5lcldpZHRoLCBpbm5lckhlaWdodCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBFbnRpdHlSZXBvc2l0b3J5LmFsbE1vZGVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgRW50aXR5UmVwb3NpdG9yeS5hbGxNb2RlbHNbaV0udXBkYXRlKENvbnRleHQuY3R4KTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG59XG4iLCJpbXBvcnQge1NldHVwfSBmcm9tIFwiLi4vc2V0dXBcIjtcblxuZXhwb3J0IGNsYXNzIENvbnRleHQge1xuICAgIHN0YXRpYyBjdHg6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDb250ZXh0KGVsZW1lbnRJZDogc3RyaW5nID0gXCJteUNhbnZhc1wiKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgICAgICBjb25zdCBpbmRleDogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgICAgICAgaW5kZXgud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgaW5kZXguaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgIGNvbnN0IGN0eCA9ICBpbmRleC5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICAgICAgaWYgKCFjdHgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgY29udGV4dFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChTZXR1cC5DT05GSUcuQkFDS0dST1VORF9DT0xPUiAhPSAnbm9uZScpe1xuICAgICAgICAgICAgaW5kZXguc3R5bGUgPSBgYmFja2dyb3VuZDogJHtTZXR1cC5DT05GSUcuQkFDS0dST1VORF9DT0xPUn07YFxuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KTtcblxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgcmV0dXJuIGN0eDtcbiAgICB9XG59XG4iLCJpbXBvcnQge0lNb2RlbH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9JTW9kZWxcIjtcbmltcG9ydCB7REVGQVVMVF9MSU5FX1dJRFRILCBTZXR1cH0gZnJvbSBcIi4uL3NldHVwXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vVXRpbHNcIjtcblxuXG5leHBvcnQgY2xhc3MgQ2lyY2xlTW9kZWwgaW1wbGVtZW50cyBJTW9kZWwge1xuICAgIHN0YXRpYyBNT0RFTF9OQU1FID0gJ0NpcmNsZSdcblxuICAgIGNvbG9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHg6IGFueSwgcHJpdmF0ZSB5OiBhbnksIHByaXZhdGUgZHg6IGFueSwgcHJpdmF0ZSBkeTogYW55LCBwcml2YXRlIHJhZGl1czogYW55LCBwcml2YXRlIGxpbmVXaWR0aDogbnVtYmVyID0gU2V0dXAuQ09ORklHLkxJTkVfV0lEVEgpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IFV0aWxzLnBpY2tSYW5kb21Gcm9tQXJyYXk8c3RyaW5nPihTZXR1cC5DT05GSUcuQ09MT1JTKVxuICAgIH1cblxuICAgIGRyYXcoY29udGV4dDogYW55KSB7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gREVGQVVMVF9MSU5FX1dJRFRIO1xuICAgIH1cblxuXG4gICAgdXBkYXRlKGNvbnRleHQ6IGFueSkge1xuICAgICAgICBpZiAodGhpcy54ID4gaW5uZXJXaWR0aCAtIHRoaXMucmFkaXVzIHx8IHRoaXMueCA8IDAgKyB0aGlzLnJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5keCA9IC10aGlzLmR4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnkgPiBpbm5lckhlaWdodCAtIHRoaXMucmFkaXVzIHx8IHRoaXMueSA8IDAgKyB0aGlzLnJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5keSA9IC10aGlzLmR5O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICsgdGhpcy5keDtcbiAgICAgICAgdGhpcy55ID0gdGhpcy55ICsgdGhpcy5keTtcblxuICAgICAgICB0aGlzLmRyYXcoY29udGV4dCk7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQge0lNb2RlbH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9JTW9kZWxcIjtcbmltcG9ydCB7REVGQVVMVF9MSU5FX1dJRFRILCBTZXR1cH0gZnJvbSBcIi4uL3NldHVwXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFJlY3RNb2RlbCBpbXBsZW1lbnRzIElNb2RlbCB7XG4gICAgc3RhdGljIE1PREVMX05BTUUgPSAnUmVjdCdcblxuICAgIGNvbG9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHg6IGFueSwgcHJpdmF0ZSB5OiBhbnksIHByaXZhdGUgZHg6IGFueSwgcHJpdmF0ZSBkeTogYW55LCBwcml2YXRlIHdpZHRoOiBudW1iZXIsIHByaXZhdGUgaGVpZ2h0OiBudW1iZXIsIHByaXZhdGUgbGluZVdpZHRoID0gU2V0dXAuQ09ORklHLkxJTkVfV0lEVEgpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IFV0aWxzLnBpY2tSYW5kb21Gcm9tQXJyYXk8c3RyaW5nPihTZXR1cC5DT05GSUcuQ09MT1JTKVxuICAgIH1cblxuICAgIGRyYXcoY29udGV4dDogYW55KSB7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XG4gICAgICAgIGNvbnRleHQucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBERUZBVUxUX0xJTkVfV0lEVEg7XG4gICAgfVxuXG5cbiAgICB1cGRhdGUoY29udGV4dDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnggPiBpbm5lcldpZHRoIC0gdGhpcy53aWR0aCB8fCB0aGlzLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmR4ID0gLXRoaXMuZHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueSA+IGlubmVySGVpZ2h0IC0gdGhpcy5oZWlnaHQgfHwgdGhpcy55IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keSA9IC10aGlzLmR5O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICsgdGhpcy5keDtcbiAgICAgICAgdGhpcy55ID0gdGhpcy55ICsgdGhpcy5keTtcblxuICAgICAgICB0aGlzLmRyYXcoY29udGV4dCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtJTW9kZWx9IGZyb20gXCIuL2ludGVyZmFjZXMvSU1vZGVsXCI7XG5pbXBvcnQge0RFRkFVTFRfTElORV9XSURUSCwgU2V0dXB9IGZyb20gXCIuLi9zZXR1cFwiO1xuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4uL1V0aWxzXCI7XG5cblxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlTW9kZWwgaW1wbGVtZW50cyBJTW9kZWwge1xuICAgIHN0YXRpYyBNT0RFTF9OQU1FID0gJ1RyaWFuZ2xlJ1xuXG4gICAgY29sb3I6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgeDogbnVtYmVyLCBwcml2YXRlIHk6IG51bWJlciwgcHJpdmF0ZSBkeDogYW55LCBwcml2YXRlIGR5OiBhbnksIHByaXZhdGUgc2lkZUxlbmd0aDogbnVtYmVyLCBwcml2YXRlIGxpbmVXaWR0aCA9IFNldHVwLkNPTkZJRy5MSU5FX1dJRFRIKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBVdGlscy5waWNrUmFuZG9tRnJvbUFycmF5PHN0cmluZz4oU2V0dXAuQ09ORklHLkNPTE9SUylcbiAgICB9XG5cbiAgICBkcmF3KGN0eDogYW55KSB7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnggKyB0aGlzLnNpZGVMZW5ndGgsIHRoaXMueSAtIHRoaXMuc2lkZUxlbmd0aCk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy54ICsgdGhpcy5zaWRlTGVuZ3RoICogMiwgdGhpcy55KTtcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IERFRkFVTFRfTElORV9XSURUSDtcbiAgICB9XG5cblxuICAgIHVwZGF0ZShjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMueCA+IGlubmVyV2lkdGggLSB0aGlzLnNpZGVMZW5ndGggfHwgdGhpcy54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keCA9IC10aGlzLmR4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnkgPiBpbm5lckhlaWdodCAtIHRoaXMuc2lkZUxlbmd0aCB8fCB0aGlzLnkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmR5ID0gLXRoaXMuZHk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSB0aGlzLnggKyB0aGlzLmR4O1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLmR5O1xuXG4gICAgICAgIHRoaXMuZHJhdyhjb250ZXh0KTtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgREVGQVVMVF9MSU5FX1dJRFRIID0gMlxuXG5leHBvcnQgY2xhc3MgU2V0dXAge1xuICAgc3RhdGljIENPTkZJRzogSUNvbmZpZyA9IHtcbiAgICAgICAgTU9ERUxfTlVNQkVSUzogMTEsXG4gICAgICAgIENPTE9SUzogWydibHVlJywgJ3JlZCcsICdncmVlbicsICdibGFjaycsICd5ZWxsb3cnXSxcbiAgICAgICAgQkFDS0dST1VORF9DT0xPUjogJ25vbmUnLFxuICAgICAgICBFTkFCTEVEX01PREVMUzogWydUcmlhbmdsZScsICdDaXJjbGUnLCAnUmVjdCddLFxuICAgICAgICBNSU5fU1BFRUQ6IDExLFxuICAgICAgICBNQVhfU1BFRUQ6IDExLFxuICAgICAgICBMSU5FX1dJRFRIOiAzLFxuICAgICAgICBTSVpFX01VTFRJUExBWUVSOiAyLFxuICAgICAgICBTVEFSVF9QT1NJVElPTjogJ3JhbmRvbSdcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpZyB7XG4gICAgU1RBUlRfUE9TSVRJT046ICdtaWRkbGUnIHwgJ3JhbmRvbSdcbiAgICBFTkFCTEVEX01PREVMUzogKCdUcmlhbmdsZSd8ICdDaXJjbGUnfCAnUmVjdCcpW10sXG4gICAgQ09MT1JTOiBzdHJpbmdbXVxuICAgIEJBQ0tHUk9VTkRfQ09MT1I6ICdub25lJyB8IHN0cmluZyxcbiAgICBNSU5fU1BFRUQ6IG51bWJlcixcbiAgICBNQVhfU1BFRUQ6IG51bWJlcixcbiAgICBMSU5FX1dJRFRIOiBudW1iZXIsXG4gICAgTU9ERUxfTlVNQkVSUzogbnVtYmVyLFxuICAgIFNJWkVfTVVMVElQTEFZRVI6IG51bWJlcixcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi9jYW52YXMvQ29udGV4dFwiO1xuaW1wb3J0IHsgTW9kZWxGYWN0b3J5IH0gZnJvbSBcIi4vTW9kZWxGYWN0b3J5XCI7XG5pbXBvcnQgeyBFbnRpdHlSZXBvc2l0b3J5IH0gZnJvbSBcIi4vRW50aXR5UmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgQW5pbWF0b3IgfSBmcm9tIFwiLi9jYW52YXMvQW5pbWF0b3JcIjtcbmltcG9ydCB7U2V0dXAsIElDb25maWd9IGZyb20gXCIuL3NldHVwXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYXBlQ2FudmFzKGh0bWxDYW52YXNJZDogc3RyaW5nID0gXCJteUNhbnZhc1wiLCBjb25maWc6IFBhcnRpYWw8SUNvbmZpZz4gPSBTZXR1cC5DT05GSUcpe1xuICAgIFNldHVwLkNPTkZJRyA9IE9iamVjdC5hc3NpZ24oU2V0dXAuQ09ORklHLCBjb25maWcpO1xuXG4gICAgRW50aXR5UmVwb3NpdG9yeS5hbGxNb2RlbHMgPSBbXVxuICAgIENvbnRleHQuZ2V0Q29udGV4dChodG1sQ2FudmFzSWQpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWcuTU9ERUxfTlVNQkVSUzsgaSsrKSB7XG4gICAgICAgIEVudGl0eVJlcG9zaXRvcnkuYWxsTW9kZWxzW2ldID0gTW9kZWxGYWN0b3J5LmNyZWF0ZShcInJhbmRvbVwiKTtcbiAgICB9XG5cbiAgICBBbmltYXRvci5hbmltYXRlKClcbn1cblxuKHdpbmRvdyBhcyBhbnkpLmNyZWF0ZVNoYXBlQ2FudmFzID0gY3JlYXRlU2hhcGVDYW52YXNcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9