define(["require", "exports"], function (require, exports) {
    "use strict";
    var Vector2 = (function () {
        function Vector2(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x || 0;
            this.y = y || 0;
        }
        return Vector2;
    }());
    exports.Vector2 = Vector2;
});
