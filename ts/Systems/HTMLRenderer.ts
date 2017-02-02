import GameObject from "../BaseObjects/Gameobject";
import Renderer from "../BaseObjects/Renderer";
import Sprite from "../BaseObjects/Sprite"

/**
 * The html renderer which creates the objects and draws them acording to the data in them
 */
export default class HTMLRenderer extends Renderer {

    //The container for all the html elements
    private _objContainer : HTMLElement;
    //The object with the actual html elements
    private _htmlObjects = {};

    constructor (gameobjects : {}, htmlContainerId : string){
        super(gameobjects);
        this._objContainer = document.getElementById(htmlContainerId);
    }

    /**
     * Add an object to the draw loop and assign a html element to it
     */
    AddObject (obj : GameObject) {
        //If the object is a sprite asign an image to it
        if (obj instanceof Sprite == true) {
            this._htmlObjects[obj.name] = document.createElement("IMG");
            this._objContainer.appendChild(this._htmlObjects[obj.name]);

            let spriteHTMLElement : HTMLImageElement = this._htmlObjects[obj.name];
            let spriteObj : Sprite = obj as Sprite;

            spriteHTMLElement.src = spriteObj.imgPath;
        } else {
            //just a plane div
            this._htmlObjects[obj.name] = document.createElement("div");
            this._htmlObjects[obj.name].id = obj.name;
            this._objContainer.appendChild(this._htmlObjects[obj.name]);

        }
    }

    /**
     * Delete the objects coresponding html element
     */
    RemoveObject (obj : GameObject) {
        this._objContainer.removeChild(this._htmlObjects[obj.name]);
        delete this._htmlObjects[obj.name];
    }

    /**
     * The draw loop which draws the objects
     */
    public Draw () {
        for (let objKey in this._gameobjects) {

            //The gameobject
            let obj : GameObject = this._gameobjects[objKey];
            //It's transform
            let trans = obj.transform;
            //Its ellement
            let htmlElement = this._htmlObjects[objKey];

            //Setting th new transform
            htmlElement.style = `transform:
                                    translate(${trans.position.x}px,${trans.position.y}px)
                                    rotate(${trans.rotation}deg)
                                    scale(${trans.scale.x}, ${trans.scale.y});`;

        }
    }
}
