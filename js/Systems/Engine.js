define(["require", "exports"], function (require, exports) {
    "use strict";
    var GameLoop = (function () {
        function GameLoop(objects, renderer) {
            this._objects = objects;
            this._renderer = renderer;
        }
        GameLoop.prototype.Start = function () {
            for (var objKey in this._objects) {
                console.log(this);
                this._objects[objKey].Start();
            }
            this.Update();
        };
        GameLoop.prototype.Update = function () {
            for (var objKey in this._objects) {
                this._objects[objKey].Update();
            }
            window.requestAnimationFrame(this.Update);
        };
        GameLoop.prototype.Draw = function () {
            this._renderer.Draw();
        };
        return GameLoop;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GameLoop;
});
