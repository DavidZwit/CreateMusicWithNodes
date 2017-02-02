var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./Transform", "./Gameobject", "../Systems/Defaults"], function (require, exports, Transform_1, Gameobject_1, Defaults_1) {
    "use strict";
    var Sprite = (function (_super) {
        __extends(Sprite, _super);
        function Sprite(name, transform, imgPath, imagePath) {
            if (transform === void 0) { transform = new Transform_1.default(); }
            if (imagePath === void 0) { imagePath = Defaults_1.default.defaultImage; }
            var _this = _super.call(this, name, transform) || this;
            _this.imgPath = imgPath;
            return _this;
        }
        return Sprite;
    }(Gameobject_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Sprite;
});
