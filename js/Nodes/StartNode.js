var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../BaseObjects/Transform", "./NodeTypes", "./Node"], function (require, exports, Transform_1, NodeTypes_1, Node_1) {
    "use strict";
    var StartNode = (function (_super) {
        __extends(StartNode, _super);
        function StartNode(name, transform) {
            if (transform === void 0) { transform = new Transform_1.default(); }
            return _super.call(this, name + "_Start", transform, NodeTypes_1.NodeTypes.Start) || this;
        }
        StartNode.prototype.Update = function () {
            console.log("START NODE!!! FUCK YESS");
        };
        return StartNode;
    }(Node_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = StartNode;
});
