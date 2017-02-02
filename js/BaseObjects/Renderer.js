define(["require", "exports"], function (require, exports) {
    "use strict";
    var Renderer = (function () {
        function Renderer(gameobjects) {
            this._gameobjects = gameobjects;
        }
        Renderer.prototype.AddObject = function (obj) {
        };
        Renderer.prototype.RemoveObject = function (obj) {
        };
        Renderer.prototype.Draw = function () {
        };
        return Renderer;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Renderer;
});
