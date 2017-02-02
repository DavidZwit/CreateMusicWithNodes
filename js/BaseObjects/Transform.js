define(["require", "exports", "./Vector"], function (require, exports, Vector_1) {
    "use strict";
    var Transform = (function () {
        function Transform(position, scale, rotation) {
            if (position === void 0) { position = new Vector_1.Vector2(window.innerWidth / 2, window.innerHeight / 2); }
            if (scale === void 0) { scale = new Vector_1.Vector2(10, 10); }
            if (rotation === void 0) { rotation = 0; }
            this.position = position;
            this.rotation = rotation;
            this.scale = scale;
        }
        return Transform;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Transform;
});
