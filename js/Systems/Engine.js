define(["require", "exports"], function (require, exports) {
    "use strict";
    var GameLoop = (function () {
        function GameLoop(objects, renderer) {
            this._objects = objects;
            this._renderer = renderer;
        }
        GameLoop.prototype.Start = function () {
            for (var objKey in this._objects) {
                this._objects[objKey].Start();
            }
            this.Update();
        };
        GameLoop.prototype.Update = function () {
            var _this = this;
            for (var objKey in this._objects) {
                this._objects[objKey].Update();
            }
            this.Draw();
            window.requestAnimationFrame(function () { _this.Update(); });
        };
        GameLoop.prototype.Draw = function () {
            this._renderer.Draw();
        };
        return GameLoop;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GameLoop;
});
