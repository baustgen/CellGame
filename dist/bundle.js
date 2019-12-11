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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Bacteria =
/*#__PURE__*/
function () {
  function Bacteria() {
    _classCallCheck(this, Bacteria);

    this.scale = Math.floor(Math.random() * 9) + 2;
    this.xDim = 20 * this.scale;
    this.yDim = 8 * this.scale;
    var pos = Bacteria.randomPosition();
    this.xPos = pos[0];
    this.yPos = pos[1];
    this.vel = this.xPos < 0 ? Math.floor(Math.random() * 7) + 2 : Math.floor(Math.random() * -7) - 2;
  }

  _createClass(Bacteria, [{
    key: "draw",
    value: function draw(ctx) {
      var img = new Image(100, 100);

      if (this.vel > 0) {
        img.src = './assets/images/bacteria_red_right.png';
      } else {
        img.src = './assets/images/bacteria_red_left.png';
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
      this.scale = Math.floor(Math.random() * 9) + 2;
      this.xDim = 20 * this.scale;
      this.yDim = 8 * this.scale;
      var pos = Bacteria.randomPosition();
      this.xPos = pos[0];
      this.yPos = pos[1];
      this.vel = this.xPos < 500 ? Math.floor(Math.random() * 7) + 2 : Math.floor(Math.random() * -7) - 2;
    }
  }], [{
    key: "randomPosition",
    value: function randomPosition() {
      var x;
      var coin = Math.random();

      if (coin > 0.5) {
        x = -200;
      } else {
        x = 750;
      }

      var y = Math.floor(Math.random() * 460) - 10;
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
/* harmony import */ var _gameView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameView */ "./src/gameView.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");


document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('game-canvas');
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(100, 100, 100, .5)";
  ctx.fillRect(0, 0, _util__WEBPACK_IMPORTED_MODULE_1__["default"].DIMX, _util__WEBPACK_IMPORTED_MODULE_1__["default"].DimY);
  ctx.font = "26px Trebuchet MS";
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.fillText("Click here to start!", 350, 250);

  var starter = function starter(e) {
    var gameView = new _gameView__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    gameView.start();
    e.target.removeEventListener("click", starter);
  };

  canvas.addEventListener("click", starter);
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
  function Game(muted) {
    _classCallCheck(this, Game);

    this.muted = muted;
    this.over = false;
    this.bacteria = [];
    this.user = [];
    this.eatAudio = new Audio('../CellGame/assets/audio/blop.mp3');
    this.backgroundAudio = new Audio('../CellGame/assets/audio/background.mp3');
    this.backgroundAudio.loop = true;

    if (!this.muted) {
      this.backgroundAudio.play();
    }

    this.addBacteria(7);
    this.addUser();
    this.handleSoundButton();
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
      ctx.clearRect(0, 0, 700, 500);

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

        if (bact.xPos < Math.floor(-20 - bact.xDim) || Math.floor(bact.xPos) > 750) {
          bact.reset();
        }
      }

      this.user[0].move();
    }
  }, {
    key: "checkCollision",
    value: function checkCollision() {
      var user = this.user[0];
      var mute = document.querySelector('.mute');

      for (var i = 0; i < this.bacteria.length; i++) {
        var bact = this.bacteria[i];

        if (_util__WEBPACK_IMPORTED_MODULE_2__["default"].collision(bact, user)) {
          if (user.scale > 12) {
            this.over = 'win';
            var newMute = mute.cloneNode(true);
            mute.parentNode.replaceChild(newMute, mute);
          } else if (user.scale > bact.scale) {
            bact.reset();

            if (!this.muted) {
              this.eatAudio.play();
            }

            user.grow(0.5);
          } else {
            this.over = 'loss';
            var newMute = mute.cloneNode(true);
            mute.parentNode.replaceChild(newMute, mute);
          }
        }
      }
    }
  }, {
    key: "handleSoundButton",
    value: function handleSoundButton() {
      var mute = document.querySelector('.mute');
      mute.addEventListener('click', this.audioToggle.bind(this), false);
    }
  }, {
    key: "audioToggle",
    value: function audioToggle() {
      var mute = document.querySelector('.mute');
      mute.classList.toggle("active");

      if (this.muted === true) {
        this.muted = false;
        this.backgroundAudio.play();
      } else {
        this.muted = true;
        this.backgroundAudio.pause();
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

    this.ctx = ctx;
    this.initial = true;
    this.start = this.start.bind(this);
  }

  _createClass(GameView, [{
    key: "start",
    value: function start() {
      var _this = this;

      if (this.game) {
        var muted = this.game.muted;
        this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](muted);
      } else {
        this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](false);
      }

      if (this.initial === true) {
        this.bindKeyHandlers();
        this.initial = false;
      }

      this.ctx.clearRect(0, 0, 700, 500);
      var canvas = document.getElementById('game-canvas');
      canvas.removeEventListener("click", this.start);
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
      clearInterval(this.gameInterval);
      this.ctx.clearRect(0, 0, 700, 500);
      this.game.backgroundAudio.pause();
      this.game.backgroundAudio.remove();
      var canvas = document.getElementById('game-canvas');

      if (type === 'loss') {
        this.ctx.fillStyle = "rgba(0, 0, 0, .6)";
        this.ctx.fillRect(0, 0, 700, 500);
        this.ctx.font = "36px Roboto";
        this.ctx.fillStyle = "#FFF";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Game Over", 350, 200);
        this.ctx.font = "24px Roboto";
        this.ctx.fillText("Avoid large bacteria until you're big enough to eat them!", 350, 275);
        this.ctx.font = "20px Roboto";
        this.ctx.fillText("Click here to try again", 350, 325);
        canvas.addEventListener("click", this.start);
      } else if (type === 'win') {
        this.ctx.fillStyle = "rgba(255, 255, 255, .8)";
        this.ctx.fillRect(0, 0, 700, 500);
        this.ctx.font = "36px Roboto";
        this.ctx.fillStyle = "#000";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Victory!", 350, 200);
        this.ctx.font = "24px Roboto";
        this.ctx.fillText("You're the best bacteria in the Petri dish!", 350, 275);
        this.ctx.font = "20px Roboto";
        this.ctx.fillText("Click here to try again", 350, 325);
        canvas.addEventListener("click", this.start);
      }
    }
  }, {
    key: "bindKeyHandlers",
    value: function bindKeyHandlers() {
      var _this2 = this;

      document.addEventListener("keydown", function (e) {
        e.preventDefault();

        switch (e.keyCode) {
          case 65:
            _this2.game.user[0].userMove('left');

            break;

          case 87:
            _this2.game.user[0].userMove('up');

            break;

          case 68:
            _this2.game.user[0].userMove('right');

            break;

          case 83:
            _this2.game.user[0].userMove('down');

            break;

          case 37:
            _this2.game.user[0].userMove('left');

            break;

          case 38:
            _this2.game.user[0].userMove('up');

            break;

          case 39:
            _this2.game.user[0].userMove('right');

            break;

          case 40:
            _this2.game.user[0].userMove('down');

            break;

          case 77:
            _this2.game.audioToggle();

            break;

          default:
            break;
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);

    this.xPos = 325;
    this.yPos = 225;
    this.xVel = 0;
    this.yVel = 0;
    this.scale = 3.5;
    this.xDim = 20 * this.scale;
    this.yDim = 8 * this.scale;
    this.src = './assets/images/bacteria_blue_right.png';
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

      if (newX > 700 - this.xDim || newX < 0) {
        this.yPos = newY;
        this.xVel = 0;

        if (this.yVel > 0) {
          this.yVel -= 0.025;
        } else {
          this.yVel += 0.025;
        }
      } else if (newY > 500 - this.yDim / 2 || newY < 0 - this.yDim / 2) {
        this.xPos = newX;
        this.yVel = 0;

        if (this.xVel > 0) {
          this.xVel -= 0.025;
        } else {
          this.xVel += 0.025;
        }
      } else {
        this.xPos = newX;
        this.yPos = newY;

        if (this.xVel > 0) {
          this.xVel -= 0.025;
        } else {
          this.xVel += 0.025;
        }

        if (this.yVel > 0) {
          this.yVel -= 0.025;
        } else {
          this.yVel += 0.025;
        }
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

          this.src = './assets/images/bacteria_blue_left.png';
          break;

        case 'right':
          if (this.xVel < 7) {
            this.xVel += 1;
          }

          this.src = './assets/images/bacteria_blue_right.png';
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

    if (Math.abs(userCenterX - bactCenterX) < bact.xDim / 2.2 + user.xDim / 2.2 && Math.abs(userCenterY - bactCenterY) < bact.yDim / 2.5 + user.yDim / 2.5) {
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