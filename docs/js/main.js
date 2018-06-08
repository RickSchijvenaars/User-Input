"use strict";
var Paddle = (function () {
    function Paddle() {
        var _this = this;
        this.speed = 0;
        this.xPos = 0;
        this.yPos = 0;
        this.paddle = document.createElement("paddle");
        this.paddle.style.left = 0.5 * innerWidth + "px";
        this.paddle.style.top = 0.9 * innerHeight + "px";
        document.body.appendChild(this.paddle);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        this.update();
    }
    Paddle.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case 37:
            case 65:
                this.speed = -20;
                break;
            case 39:
            case 68:
                this.speed = 20;
                break;
        }
    };
    Paddle.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case 37:
            case 65:
                this.speed = 0;
                break;
            case 39:
            case 68:
                this.speed = 0;
                break;
        }
    };
    Paddle.prototype.update = function () {
        this.xPos += this.speed;
        this.paddle.style.transform = "translate(" + this.xPos + "px, " + this.yPos + "px)";
    };
    return Paddle;
}());
var Game = (function () {
    function Game() {
        this.paddle = new Paddle();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.paddle.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map