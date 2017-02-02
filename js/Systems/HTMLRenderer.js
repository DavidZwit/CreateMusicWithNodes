var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../BaseObjects/Renderer"], function (require, exports, Renderer_1) {
    "use strict";
    var HTMLRenderer = (function (_super) {
        __extends(HTMLRenderer, _super);
        function HTMLRenderer(gameobjects, htmlContainerId) {
            var _this = _super.call(this, gameobjects) || this;
            _this._htmlObjects = {};
            _this._objContainer = document.getElementById(htmlContainerId);
            return _this;
        }
        HTMLRenderer.prototype.AddObject = function (obj) {
            this._htmlObjects[obj.name] = document.createElement(obj.name);
            this._objContainer.appendChild(this._htmlObjects[obj.name]);
        };
        HTMLRenderer.prototype.RemoveObject = function (obj) {
            this._objContainer.removeChild(this._htmlObjects[obj.name]);
            delete this._htmlObjects[obj.name];
        };
        HTMLRenderer.prototype.Draw = function () {
            for (var objKey in this._gameobjects) {
                console.log(this._gameobjects[objKey], "drawing");
                var obj = this._gameobjects[objKey];
                var trans = obj.transform;
                var htmlElement = this._htmlObjects[objKey];
                htmlElement.style = "transform:\n                                    translate(" + trans.position.x + "px," + trans.position.y + "px)\n                                    rotate(" + trans.rotation + "deg)\n                                    scale(" + trans.scale.x + ", " + trans.scale.y + ");";
            }
        };
        return HTMLRenderer;
    }(Renderer_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = HTMLRenderer;
});
