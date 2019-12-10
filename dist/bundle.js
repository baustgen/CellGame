/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cells.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bacteria.js":
/*!*************************!*\
  !*** ./src/bacteria.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bacteria =
/*#__PURE__*/
function () {
  function Bacteria() {
    _classCallCheck(this, Bacteria);

    this.scale = Math.floor(Math.random() * 10) + 1;
    this.xDim = 20 * this.scale;
    this.yDim = 8 * this.scale;
    var pos = Bacteria.randomPosition();
    this.xPos = pos[0];
    this.yPos = pos[1];
    this.vel = this.xPos < 500 ? Math.floor(Math.random() * 7) + 2 : Math.floor(Math.random() * -7) - 2;
  }

  _createClass(Bacteria, [{
    key: "draw",
    value: function draw(ctx) {
      var img = new Image(10, 10);

      if (this.vel > 0) {
        img.src = './documents/images/bacteria_red_right.png';
      } else {
        img.src = './documents/images/bacteria_red_left.png';
      }

      ctx.drawImage(img, this.xPos, this.yPos, this.xDim, this.yDim);
    }
  }, {
    key: "move",
    value: function move() {
      this.xPos += this.vel / 4;
    }
  }, {
    key: "reset",
    value: function reset() {
      var pos = Bacteria.randomPosition();
      this.xPos = pos[0];
      this.yPos = pos[1];
      this.vel = this.xPos < 500 ? Math.floor(Math.random() * 7) + 2 : Math.floor(Math.random() * -7) - 2;
      this.scale = Math.floor(Math.random() * 10) + 1;
      this.xDim = 20 * this.scale;
      this.yDim = 8 * this.scale;
    }
  }], [{
    key: "randomPosition",
    value: function randomPosition() {
      var x;
      var coin = Math.random();

      if (coin > 0.5) {
        x = -150;
      } else {
        x = 615;
      }

      var y = Math.floor(Math.random() * 350);
      return [x, y];
    }
  }]);

  return Bacteria;
}();

/* harmony default export */ __webpack_exports__["default"] = (Bacteria);

/***/ }),

/***/ "./src/cells.js":
/*!**********************!*\
  !*** ./src/cells.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bacteria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bacteria */ "./src/bacteria.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _gameView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameView */ "./src/gameView.js");




document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('game-canvas');
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(100, 100, 100, .5)";
  ctx.fillRect(0, 0, 600, 400);
  ctx.font = "26px Trebuchet MS";
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.fillText("Click here to start!", 300, 225);

  var starter = function starter(e) {
    var testGameView = new _gameView__WEBPACK_IMPORTED_MODULE_3__["default"](ctx);
    testGameView.start();
    e.target.removeEventListener("click", starter);
  };

  canvas.addEventListener("click", starter);
  window.ctx = ctx;
  window.Bacteria = _bacteria__WEBPACK_IMPORTED_MODULE_0__["default"];
  window.User = _user__WEBPACK_IMPORTED_MODULE_1__["default"];
  window.Game = _game__WEBPACK_IMPORTED_MODULE_2__["default"];
  window.GameView = _gameView__WEBPACK_IMPORTED_MODULE_3__["default"];
});

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bacteria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bacteria */ "./src/bacteria.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.over = false;
    this.bacteria = [];
    this.user = [];
    this.addBacteria(7);
    this.addUser();
  }

  _createClass(Game, [{
    key: "addBacteria",
    value: function addBacteria() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      for (var i = 0; i < num; i++) {
        var bact = new _bacteria__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.bacteria.push(bact);
      }
    }
  }, {
    key: "addUser",
    value: function addUser() {
      var u = new _user__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this.user.push(u);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.clearRect(0, 0, 600, 400);

      if (this.bacteria.length < 7) {
        this.addBacteria(7 - this.bacteria.length);
      }

      for (var i = 0; i < this.bacteria.length; i++) {
        var bact = this.bacteria[i];
        bact.draw(ctx);
      }

      this.user[0].draw(ctx);
    }
  }, {
    key: "moveObjects",
    value: function moveObjects() {
      for (var i = 0; i < this.bacteria.length; i++) {
        var bact = this.bacteria[i];
        bact.move();

        if (bact.xPos < Math.floor(-20 - bact.xDim) || Math.floor(bact.xPos) > 620) {
          bact.reset();
        }
      }

      this.user[0].move();
    }
  }, {
    key: "checkCollision",
    value: function checkCollision() {
      var user = this.user[0];

      for (var i = 0; i < this.bacteria.length; i++) {
        var bact = this.bacteria[i];

        if (_util__WEBPACK_IMPORTED_MODULE_2__["default"].collision(bact, user)) {
          if (user.scale > 10) {
            this.over = 'win';
          } else if (user.scale > bact.scale) {
            bact.reset();
            user.grow(0.5);
          } else {
            this.over = 'loss';
          }
        }
      }
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/gameView.js":
/*!*************************!*\
  !*** ./src/gameView.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GameView =
/*#__PURE__*/
function () {
  function GameView(ctx) {
    _classCallCheck(this, GameView);

    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.ctx = ctx;
  }

  _createClass(GameView, [{
    key: "start",
    value: function start() {
      var _this = this;

      this.bindKeyHandlers();
      this.gameInterval = setInterval(function () {
        if (_this.game.over === false) {
          _this.game.moveObjects();

          _this.game.checkCollision();

          _this.game.draw(_this.ctx);
        } else {
          _this.end(_this.game.over);
        }
      }, 20);
    }
  }, {
    key: "end",
    value: function end(type) {
      var _this2 = this;

      clearInterval(this.gameInterval);
      this.ctx.clearRect(0, 0, 600, 400);
      var canvas = document.getElementById('game-canvas');

      var starter = function starter(e) {
        _this2.ctx.clearRect(0, 0, 600, 400);

        var testGameView = new GameView(_this2.ctx);
        testGameView.start();
        e.target.removeEventListener("click", starter);
      };

      if (type === 'loss') {
        this.ctx.fillStyle = "rgba(0, 0, 0, .6)";
        this.ctx.fillRect(0, 0, 600, 400);
        this.ctx.font = "26px Trebuchet MS";
        this.ctx.fillStyle = "#FFF";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Game Over", 300, 150);
        this.ctx.font = "20px Trebuchet MS";
        this.ctx.fillText("Avoid large bacteria until you're big enough to eat them!", 300, 225);
        this.ctx.font = "14px Trebuchet MS";
        this.ctx.fillText("Click Here to try again!", 300, 275);
        canvas.addEventListener("click", starter);
      } else if (type === 'win') {
        this.ctx.fillStyle = "rgba(255, 255, 255, .8)";
        this.ctx.fillRect(0, 0, 600, 400);
        this.ctx.font = "26px Trebuchet MS";
        this.ctx.fillStyle = "#000";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Victory!", 300, 150);
        this.ctx.font = "20px Trebuchet MS";
        this.ctx.fillText("You're the best bacteria in the Petri dish!", 300, 225);
        this.ctx.font = "14px Trebuchet MS";
        this.ctx.fillText("Click anywhere to try again!", 300, 300);
        canvas.addEventListener("click", starter);
      }
    }
  }, {
    key: "bindKeyHandlers",
    value: function bindKeyHandlers() {
      var _this3 = this;

      document.addEventListener("keydown", function (e) {
        e.preventDefault();

        if (e.keyCode === 65) {
          _this3.game.user[0].userMove('left');
        } else if (e.keyCode === 87) {
          _this3.game.user[0].userMove('up');
        } else if (e.keyCode === 68) {
          _this3.game.user[0].userMove('right');
        } else if (e.keyCode === 83) {
          _this3.game.user[0].userMove('down');
        } else if (e.keyCode === 37) {
          _this3.game.user[0].userMove('left');
        } else if (e.keyCode === 38) {
          _this3.game.user[0].userMove('up');
        } else if (e.keyCode === 39) {
          _this3.game.user[0].userMove('right');
        } else if (e.keyCode === 40) {
          _this3.game.user[0].userMove('down');
        }
      });
    }
  }]);

  return GameView;
}();

/* harmony default export */ __webpack_exports__["default"] = (GameView);

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);

    this.xPos = 250;
    this.yPos = 180;
    this.xVel = 0;
    this.yVel = 0;
    this.scale = 2.5;
    this.xDim = 20 * this.scale;
    this.yDim = 8 * this.scale;
    this.src = './documents/images/bacteria_blue_right.png';
  }

  _createClass(User, [{
    key: "draw",
    value: function draw(ctx) {
      var img = new Image(10, 10);
      img.src = this.src;
      ctx.drawImage(img, this.xPos, this.yPos, this.xDim, this.yDim);
    }
  }, {
    key: "move",
    value: function move() {
      var newX = this.xPos + this.xVel;
      var newY = this.yPos + this.yVel;

      if (newX > 600 || newX < 0) {
        this.yPos = newY;
        this.xVel = 0;
      } else if (newY > 400 - this.yDim / 2 || newY < 0 - this.yDim / 2) {
        this.xPos = newX;
        this.yVel = 0;
      } else {
        this.xPos = newX;
        this.yPos = newY;
      }
    }
  }, {
    key: "userMove",
    value: function userMove(direction) {
      switch (direction) {
        case 'left':
          if (this.xVel > -7) {
            this.xVel -= 1;
          }

          this.src = './documents/images/bacteria_blue_left.png';
          break;

        case 'right':
          if (this.xVel < 7) {
            this.xVel += 1;
          }

          this.src = './documents/images/bacteria_blue_right.png';
          break;

        case 'up':
          if (this.yVel > -7) {
            this.yVel -= 1;
          }

          break;

        case 'down':
          if (this.yVel < 7) {
            this.yVel += 1;
          }

          break;

        default:
          break;
      }
    }
  }, {
    key: "grow",
    value: function grow(size) {
      this.scale += size;
      this.xDim = 20 * this.scale;
      this.yDim = 8 * this.scale;
    }
  }]);

  return User;
}();

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Util = {
  collision: function collision(bact, user) {
    var userCenterX = user.xPos + user.xDim / 2;
    var bactCenterX = bact.xPos + bact.xDim / 2;
    var userCenterY = user.yPos + user.yDim / 2;
    var bactCenterY = bact.yPos + bact.yDim / 2;

    if (Math.abs(userCenterX - bactCenterX) < bact.xDim / 2.2 + user.xDim / 2.2 && Math.abs(userCenterY - bactCenterY) < bact.yDim / 2.2 + user.yDim / 2.2) {
      return true;
    } else {
      return false;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map