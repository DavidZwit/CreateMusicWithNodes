var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../BaseObjects/Sprite", "../BaseObjects/Transform", "./NodeTypes", "../Systems/Defaults"], function (require, exports, Sprite_1, Transform_1, NodeTypes_1, Defaults_1) {
    "use strict";
    var Node = (function (_super) {
        __extends(Node, _super);
        function Node(name, transform, nodeType, imgPath) {
            if (transform === void 0) { transform = new Transform_1.default(); }
            if (nodeType === void 0) { nodeType = NodeTypes_1.NodeTypes.None; }
            if (imgPath === void 0) { imgPath = Defaults_1.default.defaultImage; }
            var _this = _super.call(this, name + "Node", transform, imgPath) || this;
            _this.nodeType = nodeType;
            _this.connectedNodes = [];
            return _this;
        }
        Node.prototype.Fire = function () {
        };
        return Node;
    }(Sprite_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Node;
});
