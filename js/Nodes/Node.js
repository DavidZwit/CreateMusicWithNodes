var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../BaseObjects/Gameobject", "../BaseObjects/Transform", "./NodeTypes"], function (require, exports, Gameobject_1, Transform_1, NodeTypes_1) {
    "use strict";
    var Node = (function (_super) {
        __extends(Node, _super);
        function Node(name, transform, nodeType) {
            if (transform === void 0) { transform = new Transform_1.default(); }
            if (nodeType === void 0) { nodeType = NodeTypes_1.NodeTypes.None; }
            var _this = _super.call(this, name + "Node", transform) || this;
            _this.nodeType = nodeType;
            _this.connectedNodes = [];
            return _this;
        }
        Node.prototype.Fire = function () {
        };
        return Node;
    }(Gameobject_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Node;
});
