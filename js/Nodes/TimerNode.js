var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../BaseObjects/Transform", "./NodeTypes", "./Node"], function (require, exports, Transform_1, NodeTypes_1, Node_1) {
    "use strict";
    var TimerNode = (function (_super) {
        __extends(TimerNode, _super);
        function TimerNode(name, transform, loops) {
            if (transform === void 0) { transform = new Transform_1.default(); }
            if (loops === void 0) { loops = 1; }
            var _this = _super.call(this, name + "_Timer", transform, NodeTypes_1.NodeTypes.Timer) || this;
            _this.loops = loops || 1;
            return _this;
        }
        return TimerNode;
    }(Node_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TimerNode;
});
