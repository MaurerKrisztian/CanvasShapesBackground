/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Animator.ts":
/*!*************************!*\
  !*** ./src/Animator.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animator": () => (/* binding */ Animator)
/* harmony export */ });
/* harmony import */ var _EntityRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityRepository */ "./src/EntityRepository.ts");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./src/Context.ts");


var Animator = /** @class */ (function () {
    function Animator() {
    }
    Animator.animate = function () {
        requestAnimationFrame(Animator.animate); //infinite loop
        _Context__WEBPACK_IMPORTED_MODULE_1__.Context.ctx.clearRect(0, 0, innerWidth, innerHeight);
        for (var i = 0; i < _EntityRepository__WEBPACK_IMPORTED_MODULE_0__.EntityRepository.allCircuit.length; i++) {
            _EntityRepository__WEBPACK_IMPORTED_MODULE_0__.EntityRepository.allCircuit[i].update(_Context__WEBPACK_IMPORTED_MODULE_1__.Context.ctx);
        }
    };
    return Animator;
}());



/***/ }),

/***/ "./src/CircuitFactory.ts":
/*!*******************************!*\
  !*** ./src/CircuitFactory.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircuitFactory": () => (/* binding */ CircuitFactory)
/* harmony export */ });
/* harmony import */ var _models_Circuit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Circuit */ "./src/models/Circuit.ts");

var CircuitFactory = /** @class */ (function () {
    function CircuitFactory() {
    }
    CircuitFactory.create = function (type, speed) {
        if (speed === void 0) { speed = 10; }
        switch (type) {
            case "random":
                return this.createRandomCircuit(speed);
                break;
            default:
                throw new Error("Can't create circuit: " + type);
        }
    };
    CircuitFactory.createRandomCircuit = function (maxSpeed) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var radius = 30;
        //start random direction and speed
        var dx = (Math.random() - 0.5) * maxSpeed;
        var dy = (Math.random() - 0.5) * maxSpeed;
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
        return new _models_Circuit__WEBPACK_IMPORTED_MODULE_0__.Circle(x, y, dx, dy, radius);
    };
    return CircuitFactory;
}());



/***/ }),

/***/ "./src/Context.ts":
/*!************************!*\
  !*** ./src/Context.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* binding */ Context)
/* harmony export */ });
var Context = /** @class */ (function () {
    function Context() {
    }
    Context.getContext = function () {
        var index = document.getElementById("myCanvas");
        index.width = window.innerWidth;
        index.height = window.innerHeight;
        var ctx = index.getContext('2d');
        if (!ctx) {
            throw new Error("Cannot get context");
        }
        this.ctx = ctx;
        return ctx;
    };
    return Context;
}());



/***/ }),

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
    EntityRepository.allCircuit = [];
    return EntityRepository;
}());



/***/ }),

/***/ "./src/models/Circuit.ts":
/*!*******************************!*\
  !*** ./src/models/Circuit.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": () => (/* binding */ Circle)
/* harmony export */ });
var Circle = /** @class */ (function () {
    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.colors = ['blue', 'red', 'green', 'black'];
        this.color = this.colors[Math.round(Math.random() * this.colors.length)];
    }
    Circle.prototype.draw = function (context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = this.color;
        context.stroke();
    };
    Circle.prototype.update = function (context) {
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
    return Circle;
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
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Context */ "./src/Context.ts");
/* harmony import */ var _CircuitFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CircuitFactory */ "./src/CircuitFactory.ts");
/* harmony import */ var _EntityRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EntityRepository */ "./src/EntityRepository.ts");
/* harmony import */ var _Animator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Animator */ "./src/Animator.ts");




console.log(_Context__WEBPACK_IMPORTED_MODULE_0__.Context.getContext());
var circuitNumber = Number.parseInt(prompt("Please enter the circuits number", "50")) || 11;
for (var i = 0; i < circuitNumber; i++) {
    _EntityRepository__WEBPACK_IMPORTED_MODULE_2__.EntityRepository.allCircuit[i] = _CircuitFactory__WEBPACK_IMPORTED_MODULE_1__.CircuitFactory.create("random");
}
_Animator__WEBPACK_IMPORTED_MODULE_3__.Animator.animate();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9zcmMvQW5pbWF0b3IudHMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzLy4vc3JjL0NpcmN1aXRGYWN0b3J5LnRzIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy8uL3NyYy9Db250ZXh0LnRzIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy8uL3NyYy9FbnRpdHlSZXBvc2l0b3J5LnRzIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy8uL3NyYy9tb2RlbHMvQ2lyY3VpdC50cyIsIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNsQjtBQUVwQztJQUNJO0lBQ0EsQ0FBQztJQUVNLGdCQUFPLEdBQWQ7UUFDSSxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxlQUFlO1FBRXhELDJEQUFxQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXJELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxpRkFBa0MsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6RCwwRUFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsaURBQVcsQ0FBQyxDQUFD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RUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFdkIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDOzs7Ozs7OztVQ2hDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ0xvQztBQUNjO0FBQ0k7QUFDaEI7QUFFdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3REFBa0IsRUFBRSxDQUFDO0FBR2pDLElBQU0sYUFBYSxHQUFZLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGtDQUFrQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFFO0FBRXhHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDcEMsMEVBQTJCLENBQUMsQ0FBQyxDQUFDLEdBQUcsa0VBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDcEU7QUFFRCx1REFBZ0IsRUFBRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHlSZXBvc2l0b3J5IH0gZnJvbSBcIi4vRW50aXR5UmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhbmltYXRlKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShBbmltYXRvci5hbmltYXRlKTsgLy9pbmZpbml0ZSBsb29wXHJcblxyXG4gICAgICAgIENvbnRleHQuY3R4LmNsZWFyUmVjdCgwLCAwLCBpbm5lcldpZHRoLCBpbm5lckhlaWdodCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgRW50aXR5UmVwb3NpdG9yeS5hbGxDaXJjdWl0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIEVudGl0eVJlcG9zaXRvcnkuYWxsQ2lyY3VpdFtpXS51cGRhdGUoQ29udGV4dC5jdHgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENpcmNsZSB9IGZyb20gXCIuL21vZGVscy9DaXJjdWl0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2lyY3VpdEZhY3Rvcnkge1xyXG5cclxuICAgIHN0YXRpYyBjcmVhdGUodHlwZTogc3RyaW5nIHwgXCJyYW5kb21cIiwgc3BlZWQgPSAxMCk6IENpcmNsZSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyYW5kb21cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJhbmRvbUNpcmN1aXQoc3BlZWQpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBjcmVhdGUgY2lyY3VpdDogJHt0eXBlfWApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVSYW5kb21DaXJjdWl0KG1heFNwZWVkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgeDogbnVtYmVyID0gTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGxldCB5OiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHJhZGl1czogbnVtYmVyID0gMzA7XHJcblxyXG4gICAgICAgIC8vc3RhcnQgcmFuZG9tIGRpcmVjdGlvbiBhbmQgc3BlZWRcclxuICAgICAgICBjb25zdCBkeCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIG1heFNwZWVkO1xyXG4gICAgICAgIGNvbnN0IGR5ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogbWF4U3BlZWQ7XHJcblxyXG4gICAgICAgIC8vaWYgdGhlIGNpcmN1aXQgbm90IGZ1bGx5IGluIHRoZSBicm93c2VyXHJcbiAgICAgICAgaWYgKHggPCAwICsgcmFkaXVzKSB7XHJcbiAgICAgICAgICAgIHggPSAwICsgcmFkaXVzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoeCA+IGlubmVyV2lkdGggLSByYWRpdXMpIHtcclxuICAgICAgICAgICAgeCA9IGlubmVyV2lkdGggLSByYWRpdXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoeSA8IDAgKyByYWRpdXMpIHtcclxuICAgICAgICAgICAgeSA9IDAgKyByYWRpdXM7XHJcbiAgICAgICAgfSBlbHNlIGlmICh5ID4gaW5uZXJIZWlnaHQgLSByYWRpdXMpIHtcclxuICAgICAgICAgICAgeSA9IGlubmVySGVpZ2h0IC0gcmFkaXVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBDaXJjbGUoeCwgeSwgZHgsIGR5LCByYWRpdXMpXHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbnRleHQge1xyXG4gICAgc3RhdGljIGN0eDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb250ZXh0KCk6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBpbmRleDogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcclxuICAgICAgICBpbmRleC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGluZGV4LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgY3R4ID0gIGluZGV4LmdldENvbnRleHQoJzJkJylcclxuXHJcbiAgICAgICAgaWYgKCFjdHgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCBjb250ZXh0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgcmV0dXJuIGN0eDtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRW50aXR5UmVwb3NpdG9yeSB7XHJcbiAgICBzdGF0aWMgYWxsQ2lyY3VpdDogYW55ID0gW107XHJcblxyXG59XHJcbiIsIlxyXG5cclxuZXhwb3J0IGNsYXNzIENpcmNsZSB7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG4gICAgY29sb3JzID0gWydibHVlJywgJ3JlZCcsICdncmVlbicsICdibGFjayddO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgeDogYW55LCBwcml2YXRlIHk6IGFueSwgcHJpdmF0ZSBkeDogYW55LCBwcml2YXRlIGR5OiBhbnksIHByaXZhdGUgcmFkaXVzOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5jb2xvcnNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogdGhpcy5jb2xvcnMubGVuZ3RoKV07XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUoY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IGlubmVyV2lkdGggLSB0aGlzLnJhZGl1cyB8fCB0aGlzLnggPCAwICsgdGhpcy5yYWRpdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5keCA9IC10aGlzLmR4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy55ID4gaW5uZXJIZWlnaHQgLSB0aGlzLnJhZGl1cyB8fCB0aGlzLnkgPCAwICsgdGhpcy5yYWRpdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5keSA9IC10aGlzLmR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICsgdGhpcy5keDtcclxuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLmR5O1xyXG5cclxuICAgICAgICB0aGlzLmRyYXcoY29udGV4dCk7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ2lyY2xlIH0gZnJvbSBcIi4vbW9kZWxzL0NpcmN1aXRcIjtcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIjtcclxuaW1wb3J0IHsgQ2lyY3VpdEZhY3RvcnkgfSBmcm9tIFwiLi9DaXJjdWl0RmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBFbnRpdHlSZXBvc2l0b3J5IH0gZnJvbSBcIi4vRW50aXR5UmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQgeyBBbmltYXRvciB9IGZyb20gXCIuL0FuaW1hdG9yXCI7XHJcblxyXG5jb25zb2xlLmxvZyhDb250ZXh0LmdldENvbnRleHQoKSlcclxuXHJcblxyXG5jb25zdCBjaXJjdWl0TnVtYmVyOiBudW1iZXIgPSAgTnVtYmVyLnBhcnNlSW50KHByb21wdChcIlBsZWFzZSBlbnRlciB0aGUgY2lyY3VpdHMgbnVtYmVyXCIsIFwiNTBcIikpIHx8IDExIDtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgY2lyY3VpdE51bWJlcjsgaSsrKSB7XHJcbiAgICBFbnRpdHlSZXBvc2l0b3J5LmFsbENpcmN1aXRbaV0gPSBDaXJjdWl0RmFjdG9yeS5jcmVhdGUoXCJyYW5kb21cIik7XHJcbn1cclxuXHJcbkFuaW1hdG9yLmFuaW1hdGUoKVxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==