define(["require", "exports", "./Transform"], function (require, exports, Transform_1) {
    "use strict";
    var GameObject = (function () {
        function GameObject(name, transform) {
            if (transform === void 0) { transform = new Transform_1.default(); }
            this.name = "";
            this.name = name + "_obj";
            this.transform = transform;
        }
        GameObject.prototype.Awake = function () {
        };
        GameObject.prototype.Start = function () {
        };
        GameObject.prototype.Update = function () {
        };
        return GameObject;
    }());
    GameObject.OBJECTS = {};
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GameObject;
});
