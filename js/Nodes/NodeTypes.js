define(["require", "exports"], function (require, exports) {
    "use strict";
    var NodeTypes;
    (function (NodeTypes) {
        NodeTypes[NodeTypes["None"] = 0] = "None";
        NodeTypes[NodeTypes["Start"] = 1] = "Start";
        NodeTypes[NodeTypes["Timer"] = 2] = "Timer";
        NodeTypes[NodeTypes["Sound"] = 3] = "Sound";
    })(NodeTypes = exports.NodeTypes || (exports.NodeTypes = {}));
});
