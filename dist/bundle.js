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
    _setup__WEBPACK_IMPORTED_MODULE_4__.Setup.CONFIG = config;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9zcmMvRW50aXR5UmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9zcmMvTW9kZWxGYWN0b3J5LnRzIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy8uL3NyYy9VdGlscy50cyIsIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9zcmMvY2FudmFzL0FuaW1hdG9yLnRzIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy8uL3NyYy9jYW52YXMvQ29udGV4dC50cyIsIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9zcmMvbW9kZWxzL0NpcmNsZU1vZGVsLnRzIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy8uL3NyYy9tb2RlbHMvUmVjdE1vZGVsLnRzIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy8uL3NyYy9tb2RlbHMvVHJpYW5nbGVNb2RlbC50cyIsIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9zcmMvc2V0dXAudHMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQUVBLENBQUM7SUFEVSwwQkFBUyxHQUFhLEVBQUUsQ0FBQztJQUNwQyx1QkFBQztDQUFBO0FBRjRCOzs7Ozs7Ozs7Ozs7Ozs7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QUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDRztBQUNRO0FBQ1Q7QUFDTjtBQUV2QyxTQUFTLGlCQUFpQixDQUFDLFlBQWlDLEVBQUUsTUFBOEI7SUFBakUsd0RBQWlDO0lBQUUsa0NBQWtCLGdEQUFZO0lBQ3hGLGdEQUFZLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLCtEQUFrQixDQUFDLFlBQVksQ0FBQztJQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQyx5RUFBMEIsQ0FBQyxDQUFDLENBQUMsR0FBRyw4REFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNqRTtJQUVELDhEQUFnQixFQUFFO0FBQ3RCLENBQUM7QUFFQSxNQUFjLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SU1vZGVsfSBmcm9tIFwiLi9tb2RlbHMvaW50ZXJmYWNlcy9JTW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIEVudGl0eVJlcG9zaXRvcnkge1xuICAgIHN0YXRpYyBhbGxNb2RlbHM6IElNb2RlbFtdID0gW107XG59XG4iLCJpbXBvcnQge0NpcmNsZU1vZGVsfSBmcm9tIFwiLi9tb2RlbHMvQ2lyY2xlTW9kZWxcIjtcbmltcG9ydCB7UmVjdE1vZGVsfSBmcm9tIFwiLi9tb2RlbHMvUmVjdE1vZGVsXCI7XG5pbXBvcnQge1RyaWFuZ2xlTW9kZWx9IGZyb20gXCIuL21vZGVscy9UcmlhbmdsZU1vZGVsXCI7XG5pbXBvcnQge0lNb2RlbH0gZnJvbSBcIi4vbW9kZWxzL2ludGVyZmFjZXMvSU1vZGVsXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IHtTZXR1cH0gZnJvbSBcIi4vc2V0dXBcIjtcblxuZXhwb3J0IGNsYXNzIE1vZGVsRmFjdG9yeSB7XG5cbiAgICBzdGF0aWMgY3JlYXRlKHR5cGU6IHN0cmluZyB8IFwicmFuZG9tXCIpOiBJTW9kZWwge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJyYW5kb21cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVSYW5kb21Nb2RlbCgpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBjcmVhdGUgY2lyY3VpdDogJHt0eXBlfWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVSYW5kb21Nb2RlbCgpIHtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBVdGlscy5nZW5lcmF0ZVJhbmRvbShTZXR1cC5DT05GSUcuTUlOX1NQRUVELCBTZXR1cC5DT05GSUcuTUFYX1NQRUVEKVxuICAgICAgICBzd2l0Y2ggKFV0aWxzLnBpY2tSYW5kb21Gcm9tQXJyYXkoU2V0dXAuQ09ORklHLkVOQUJMRURfTU9ERUxTKSkge1xuICAgICAgICAgICAgY2FzZSBDaXJjbGVNb2RlbC5NT0RFTF9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJhbmRvbUNpcmNsZShzcGVlZClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVHJpYW5nbGVNb2RlbC5NT0RFTF9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJhbmRvbVRyaWFuZ2xlKHNwZWVkKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBSZWN0TW9kZWwuTU9ERUxfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVSYW5kb21SZWN0KHNwZWVkKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVSYW5kb21DaXJjbGUobWF4U3BlZWQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCByYWRpdXMgPSBVdGlscy5nZW5lcmF0ZVJhbmRvbSgxMCwgMzApICogU2V0dXAuQ09ORklHLlNJWkVfTVVMVElQTEFZRVJcbiAgICAgICAgY29uc3QgY2lyY2xlU3RhcnQgPSBTZXR1cC5DT05GSUcuU1RBUlRfUE9TSVRJT04gPT0gJ3JhbmRvbScgPyB0aGlzLmdlbmVyYXRlU3RhcnRQb3NpdGlvblJhZGl1c0Jhc2VkKE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJXaWR0aCwgTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lckhlaWdodCwgcmFkaXVzKTogVXRpbHMubWlkZGxlUG9zaXRpb24oKVxuXG4gICAgICAgIGNvbnN0IGR4ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogbWF4U3BlZWQ7XG4gICAgICAgIGNvbnN0IGR5ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogbWF4U3BlZWQ7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDaXJjbGVNb2RlbChjaXJjbGVTdGFydC54LCBjaXJjbGVTdGFydC55LCBkeCwgZHksIHJhZGl1cylcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVSYW5kb21UcmlhbmdsZShtYXhTcGVlZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHNpZGVMZW5ndGggPSAzMztcblxuICAgICAgICBjb25zdCBkeCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIG1heFNwZWVkO1xuICAgICAgICBjb25zdCBkeSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIG1heFNwZWVkO1xuXG4gICAgICAgIGNvbnN0IHJlY3RSYWRpdXM6IG51bWJlciA9IHNpZGVMZW5ndGggKiBTZXR1cC5DT05GSUcuU0laRV9NVUxUSVBMQVlFUjtcbiAgICAgICAgY29uc3QgcmVjdFN0YXJ0ID0gU2V0dXAuQ09ORklHLlNUQVJUX1BPU0lUSU9OID09ICdyYW5kb20nID8gdGhpcy5nZW5lcmF0ZVN0YXJ0UG9zaXRpb25SYWRpdXNCYXNlZChNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVyV2lkdGgsIE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJIZWlnaHQsIHJlY3RSYWRpdXMpOiBVdGlscy5taWRkbGVQb3NpdGlvbigpXG4gICAgICAgIHJldHVybiBuZXcgVHJpYW5nbGVNb2RlbChyZWN0U3RhcnQueCwgcmVjdFN0YXJ0LnksIGR4LCBkeSwgc2lkZUxlbmd0aCwgIFNldHVwLkNPTkZJRy5MSU5FX1dJRFRIKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVSYW5kb21SZWN0KG1heFNwZWVkOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBVdGlscy5nZW5lcmF0ZVJhbmRvbSgxMSwgMTAwKSAqIFNldHVwLkNPTkZJRy5TSVpFX01VTFRJUExBWUVSO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBVdGlscy5nZW5lcmF0ZVJhbmRvbSgxMSwgMTAwKSAqIFNldHVwLkNPTkZJRy5TSVpFX01VTFRJUExBWUVSO1xuXG4gICAgICAgIGNvbnN0IGR4ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogbWF4U3BlZWQ7XG4gICAgICAgIGNvbnN0IGR5ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogbWF4U3BlZWQ7XG5cbiAgICAgICAgY29uc3QgcmVjdFJhZGl1czogbnVtYmVyID0gaGVpZ2h0IDwgd2lkdGggPyB3aWR0aCA6IGhlaWdodDtcbiAgICAgICAgY29uc3QgcmVjdFN0YXJ0ID0gU2V0dXAuQ09ORklHLlNUQVJUX1BPU0lUSU9OID09ICdyYW5kb20nID8gdGhpcy5nZW5lcmF0ZVN0YXJ0UG9zaXRpb25SYWRpdXNCYXNlZChNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVyV2lkdGgsIE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJIZWlnaHQsIHJlY3RSYWRpdXMgKiAyKSA6IFV0aWxzLm1pZGRsZVBvc2l0aW9uKClcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0TW9kZWwocmVjdFN0YXJ0LngsIHJlY3RTdGFydC55LCBkeCwgZHksIHdpZHRoICAqIFNldHVwLkNPTkZJRy5TSVpFX01VTFRJUExBWUVSLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZW5lcmF0ZVN0YXJ0UG9zaXRpb25SYWRpdXNCYXNlZCh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIpIHtcbiAgICAgICAgLy9pZiB0aGUgY2lyY3VpdCBub3QgZnVsbHkgaW4gdGhlIGJyb3dzZXJcbiAgICAgICAgaWYgKHggPCAwICsgcmFkaXVzKSB7XG4gICAgICAgICAgICB4ID0gMCArIHJhZGl1cztcbiAgICAgICAgfSBlbHNlIGlmICh4ID4gaW5uZXJXaWR0aCAtIHJhZGl1cykge1xuICAgICAgICAgICAgeCA9IGlubmVyV2lkdGggLSByYWRpdXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeSA8IDAgKyByYWRpdXMpIHtcbiAgICAgICAgICAgIHkgPSAwICsgcmFkaXVzO1xuICAgICAgICB9IGVsc2UgaWYgKHkgPiBpbm5lckhlaWdodCAtIHJhZGl1cykge1xuICAgICAgICAgICAgeSA9IGlubmVySGVpZ2h0IC0gcmFkaXVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7eCwgeX1cbiAgICB9XG5cbn1cblxuIiwiZXhwb3J0IGNsYXNzIFV0aWxzIHtcbiAgICBzdGF0aWMgZ2VuZXJhdGVSYW5kb20obWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBkaWZmZXJlbmNlID0gbWF4IC0gbWluO1xuICAgICAgICBsZXQgcmFuZCA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKHJhbmQgKiBkaWZmZXJlbmNlKTtcbiAgICAgICAgcmFuZCA9IHJhbmQgKyBtaW47XG4gICAgICAgIHJldHVybiByYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBwaWNrUmFuZG9tRnJvbUFycmF5PFQgPSBhbnk+KGFycjogVFtdKTogVHtcbiAgICAgICAgcmV0dXJuIGFyclt0aGlzLmdlbmVyYXRlUmFuZG9tKDAsIGFyci5sZW5ndGgpXVxuICAgIH1cblxuICAgIHN0YXRpYyBtaWRkbGVQb3NpdGlvbigpe1xuICAgICAgICByZXR1cm4ge3g6IGlubmVyV2lkdGggLyAyLCB5OiBpbm5lckhlaWdodCAvIDJ9XG4gICAgfVxufSIsImltcG9ydCB7IEVudGl0eVJlcG9zaXRvcnkgfSBmcm9tIFwiLi4vRW50aXR5UmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIjtcblxuZXhwb3J0IGNsYXNzIEFuaW1hdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBzdGF0aWMgYW5pbWF0ZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKEFuaW1hdG9yLmFuaW1hdGUpOyAvL2luZmluaXRlIGxvb3BcblxuICAgICAgICBDb250ZXh0LmN0eC5jbGVhclJlY3QoMCwgMCwgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgRW50aXR5UmVwb3NpdG9yeS5hbGxNb2RlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIEVudGl0eVJlcG9zaXRvcnkuYWxsTW9kZWxzW2ldLnVwZGF0ZShDb250ZXh0LmN0eCk7XG4gICAgICAgIH1cblxuXG4gICAgfVxufVxuIiwiaW1wb3J0IHtTZXR1cH0gZnJvbSBcIi4uL3NldHVwXCI7XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0IHtcbiAgICBzdGF0aWMgY3R4OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q29udGV4dChlbGVtZW50SWQ6IHN0cmluZyA9IFwibXlDYW52YXNcIik6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICAgICAgY29uc3QgaW5kZXg6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gICAgICAgIGluZGV4LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGluZGV4LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICBjb25zdCBjdHggPSAgaW5kZXguZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgICAgIGlmICghY3R4KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IGNvbnRleHRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoU2V0dXAuQ09ORklHLkJBQ0tHUk9VTkRfQ09MT1IgIT0gJ25vbmUnKXtcbiAgICAgICAgICAgIGluZGV4LnN0eWxlID0gYGJhY2tncm91bmQ6ICR7U2V0dXAuQ09ORklHLkJBQ0tHUk9VTkRfQ09MT1J9O2BcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBpbm5lcldpZHRoLCBpbm5lckhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHJldHVybiBjdHg7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtJTW9kZWx9IGZyb20gXCIuL2ludGVyZmFjZXMvSU1vZGVsXCI7XG5pbXBvcnQge0RFRkFVTFRfTElORV9XSURUSCwgU2V0dXB9IGZyb20gXCIuLi9zZXR1cFwiO1xuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4uL1V0aWxzXCI7XG5cblxuZXhwb3J0IGNsYXNzIENpcmNsZU1vZGVsIGltcGxlbWVudHMgSU1vZGVsIHtcbiAgICBzdGF0aWMgTU9ERUxfTkFNRSA9ICdDaXJjbGUnXG5cbiAgICBjb2xvcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB4OiBhbnksIHByaXZhdGUgeTogYW55LCBwcml2YXRlIGR4OiBhbnksIHByaXZhdGUgZHk6IGFueSwgcHJpdmF0ZSByYWRpdXM6IGFueSwgcHJpdmF0ZSBsaW5lV2lkdGg6IG51bWJlciA9IFNldHVwLkNPTkZJRy5MSU5FX1dJRFRIKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBVdGlscy5waWNrUmFuZG9tRnJvbUFycmF5PHN0cmluZz4oU2V0dXAuQ09ORklHLkNPTE9SUylcbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQ6IGFueSkge1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IERFRkFVTFRfTElORV9XSURUSDtcbiAgICB9XG5cblxuICAgIHVwZGF0ZShjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMueCA+IGlubmVyV2lkdGggLSB0aGlzLnJhZGl1cyB8fCB0aGlzLnggPCAwICsgdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMuZHggPSAtdGhpcy5keDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy55ID4gaW5uZXJIZWlnaHQgLSB0aGlzLnJhZGl1cyB8fCB0aGlzLnkgPCAwICsgdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMuZHkgPSAtdGhpcy5keTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMuZHg7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueSArIHRoaXMuZHk7XG5cbiAgICAgICAgdGhpcy5kcmF3KGNvbnRleHQpO1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHtJTW9kZWx9IGZyb20gXCIuL2ludGVyZmFjZXMvSU1vZGVsXCI7XG5pbXBvcnQge0RFRkFVTFRfTElORV9XSURUSCwgU2V0dXB9IGZyb20gXCIuLi9zZXR1cFwiO1xuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4uL1V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBSZWN0TW9kZWwgaW1wbGVtZW50cyBJTW9kZWwge1xuICAgIHN0YXRpYyBNT0RFTF9OQU1FID0gJ1JlY3QnXG5cbiAgICBjb2xvcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB4OiBhbnksIHByaXZhdGUgeTogYW55LCBwcml2YXRlIGR4OiBhbnksIHByaXZhdGUgZHk6IGFueSwgcHJpdmF0ZSB3aWR0aDogbnVtYmVyLCBwcml2YXRlIGhlaWdodDogbnVtYmVyLCBwcml2YXRlIGxpbmVXaWR0aCA9IFNldHVwLkNPTkZJRy5MSU5FX1dJRFRIKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBVdGlscy5waWNrUmFuZG9tRnJvbUFycmF5PHN0cmluZz4oU2V0dXAuQ09ORklHLkNPTE9SUylcbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQ6IGFueSkge1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xuICAgICAgICBjb250ZXh0LnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gREVGQVVMVF9MSU5FX1dJRFRIO1xuICAgIH1cblxuXG4gICAgdXBkYXRlKGNvbnRleHQ6IGFueSkge1xuICAgICAgICBpZiAodGhpcy54ID4gaW5uZXJXaWR0aCAtIHRoaXMud2lkdGggfHwgdGhpcy54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keCA9IC10aGlzLmR4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnkgPiBpbm5lckhlaWdodCAtIHRoaXMuaGVpZ2h0IHx8IHRoaXMueSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHkgPSAtdGhpcy5keTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMuZHg7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueSArIHRoaXMuZHk7XG5cbiAgICAgICAgdGhpcy5kcmF3KGNvbnRleHQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7SU1vZGVsfSBmcm9tIFwiLi9pbnRlcmZhY2VzL0lNb2RlbFwiO1xuaW1wb3J0IHtERUZBVUxUX0xJTkVfV0lEVEgsIFNldHVwfSBmcm9tIFwiLi4vc2V0dXBcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi9VdGlsc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBUcmlhbmdsZU1vZGVsIGltcGxlbWVudHMgSU1vZGVsIHtcbiAgICBzdGF0aWMgTU9ERUxfTkFNRSA9ICdUcmlhbmdsZSdcblxuICAgIGNvbG9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHg6IG51bWJlciwgcHJpdmF0ZSB5OiBudW1iZXIsIHByaXZhdGUgZHg6IGFueSwgcHJpdmF0ZSBkeTogYW55LCBwcml2YXRlIHNpZGVMZW5ndGg6IG51bWJlciwgcHJpdmF0ZSBsaW5lV2lkdGggPSBTZXR1cC5DT05GSUcuTElORV9XSURUSCkge1xuICAgICAgICB0aGlzLmNvbG9yID0gVXRpbHMucGlja1JhbmRvbUZyb21BcnJheTxzdHJpbmc+KFNldHVwLkNPTkZJRy5DT0xPUlMpXG4gICAgfVxuXG4gICAgZHJhdyhjdHg6IGFueSkge1xuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy54ICsgdGhpcy5zaWRlTGVuZ3RoLCB0aGlzLnkgLSB0aGlzLnNpZGVMZW5ndGgpO1xuICAgICAgICBjdHgubGluZVRvKHRoaXMueCArIHRoaXMuc2lkZUxlbmd0aCAqIDIsIHRoaXMueSk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy54LCB0aGlzLnkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBERUZBVUxUX0xJTkVfV0lEVEg7XG4gICAgfVxuXG5cbiAgICB1cGRhdGUoY29udGV4dDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnggPiBpbm5lcldpZHRoIC0gdGhpcy5zaWRlTGVuZ3RoIHx8IHRoaXMueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZHggPSAtdGhpcy5keDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy55ID4gaW5uZXJIZWlnaHQgLSB0aGlzLnNpZGVMZW5ndGggfHwgdGhpcy55IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5keSA9IC10aGlzLmR5O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICsgdGhpcy5keDtcbiAgICAgICAgdGhpcy55ID0gdGhpcy55ICsgdGhpcy5keTtcblxuICAgICAgICB0aGlzLmRyYXcoY29udGV4dCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IERFRkFVTFRfTElORV9XSURUSCA9IDJcblxuZXhwb3J0IGNsYXNzIFNldHVwIHtcblxuXG4gICBzdGF0aWMgQ09ORklHOiBJQ29uZmlnID0ge1xuICAgICAgICBNT0RFTF9OVU1CRVJTOiAxMSxcbiAgICAgICAgQ09MT1JTOiBbJ2JsdWUnLCAncmVkJywgJ2dyZWVuJywgJ2JsYWNrJywgJ3llbGxvdyddLFxuICAgICAgICBCQUNLR1JPVU5EX0NPTE9SOiAnbm9uZScsXG4gICAgICAgIEVOQUJMRURfTU9ERUxTOiBbJ1RyaWFuZ2xlJywgJ0NpcmNsZScsICdSZWN0J10sXG4gICAgICAgIE1JTl9TUEVFRDogMTEsXG4gICAgICAgIE1BWF9TUEVFRDogMTEsXG4gICAgICAgIExJTkVfV0lEVEg6IDMsXG4gICAgICAgIFNJWkVfTVVMVElQTEFZRVI6IDIsXG4gICAgICAgIFNUQVJUX1BPU0lUSU9OOiAncmFuZG9tJ1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlnIHtcbiAgICBTVEFSVF9QT1NJVElPTjogJ21pZGRsZScgfCAncmFuZG9tJ1xuICAgIEVOQUJMRURfTU9ERUxTOiAoJ1RyaWFuZ2xlJ3wgJ0NpcmNsZSd8ICdSZWN0JylbXSxcbiAgICBDT0xPUlM6IHN0cmluZ1tdXG4gICAgQkFDS0dST1VORF9DT0xPUjogJ25vbmUnIHwgc3RyaW5nLFxuICAgIE1JTl9TUEVFRDogbnVtYmVyLFxuICAgIE1BWF9TUEVFRDogbnVtYmVyLFxuICAgIExJTkVfV0lEVEg6IG51bWJlcixcbiAgICBNT0RFTF9OVU1CRVJTOiBudW1iZXIsXG4gICAgU0laRV9NVUxUSVBMQVlFUjogbnVtYmVyLFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuL2NhbnZhcy9Db250ZXh0XCI7XG5pbXBvcnQgeyBNb2RlbEZhY3RvcnkgfSBmcm9tIFwiLi9Nb2RlbEZhY3RvcnlcIjtcbmltcG9ydCB7IEVudGl0eVJlcG9zaXRvcnkgfSBmcm9tIFwiLi9FbnRpdHlSZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBBbmltYXRvciB9IGZyb20gXCIuL2NhbnZhcy9BbmltYXRvclwiO1xuaW1wb3J0IHtTZXR1cCwgSUNvbmZpZ30gZnJvbSBcIi4vc2V0dXBcIjtcblxuZnVuY3Rpb24gY3JlYXRlU2hhcGVDYW52YXMoaHRtbENhbnZhc0lkOiBzdHJpbmcgPSBcIm15Q2FudmFzXCIsIGNvbmZpZzogSUNvbmZpZyA9IFNldHVwLkNPTkZJRyl7XG4gICAgU2V0dXAuQ09ORklHID0gY29uZmlnO1xuICAgIENvbnRleHQuZ2V0Q29udGV4dChodG1sQ2FudmFzSWQpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWcuTU9ERUxfTlVNQkVSUzsgaSsrKSB7XG4gICAgICAgIEVudGl0eVJlcG9zaXRvcnkuYWxsTW9kZWxzW2ldID0gTW9kZWxGYWN0b3J5LmNyZWF0ZShcInJhbmRvbVwiKTtcbiAgICB9XG5cbiAgICBBbmltYXRvci5hbmltYXRlKClcbn1cblxuKHdpbmRvdyBhcyBhbnkpLmNyZWF0ZVNoYXBlQ2FudmFzID0gY3JlYXRlU2hhcGVDYW52YXNcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9