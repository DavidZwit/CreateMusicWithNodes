define(["require", "exports", "./Vector", "../Systems/Defaults"], function (require, exports, Vector_1, Defaults_1) {
    "use strict";
    var Transform = (function () {
        function Transform(position, scale, rotation) {
            if (position === void 0) { position = new Vector_1.Vector2(Defaults_1.default.spawnPosition.x, Defaults_1.default.spawnPosition.y); }
            if (scale === void 0) { scale = new Vector_1.Vector2(1, 1); }
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
