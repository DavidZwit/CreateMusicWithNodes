var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../BaseObjects/Renderer", "../BaseObjects/Sprite"], function (require, exports, Renderer_1, Sprite_1) {
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
            if (obj instanceof Sprite_1.default == true) {
                this._htmlObjects[obj.name] = document.createElement("IMG");
                this._objContainer.appendChild(this._htmlObjects[obj.name]);
                var spriteHTMLElement = this._htmlObjects[obj.name];
                var spriteObj = obj;
                spriteHTMLElement.src = spriteObj.imgPath;
            }
            else {
                this._htmlObjects[obj.name] = document.createElement("div");
                this._htmlObjects[obj.name].id = obj.name;
                this._objContainer.appendChild(this._htmlObjects[obj.name]);
            }
        };
        HTMLRenderer.prototype.RemoveObject = function (obj) {
            this._objContainer.removeChild(this._htmlObjects[obj.name]);
            delete this._htmlObjects[obj.name];
        };
        HTMLRenderer.prototype.Draw = function () {
            for (var objKey in this._gameobjects) {
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
