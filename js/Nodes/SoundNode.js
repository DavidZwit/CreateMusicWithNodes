var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../BaseObjects/Transform", "./NodeTypes", "./Node"], function (require, exports, Transform_1, NodeTypes_1, Node_1) {
    "use strict";
    var SoundNode = (function (_super) {
        __extends(SoundNode, _super);
        function SoundNode(name, transform, sound) {
            if (transform === void 0) { transform = new Transform_1.default(); }
            var _this = _super.call(this, name + "_Sound", transform, NodeTypes_1.NodeTypes.Sound) || this;
            _this.sound = sound;
            return _this;
        }
        return SoundNode;
    }(Node_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SoundNode;
});
