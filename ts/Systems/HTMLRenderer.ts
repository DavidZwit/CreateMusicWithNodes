import GameObject from "../BaseObjects/Gameobject";
import Renderer from "../BaseObjects/Renderer";

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
        this._htmlObjects[obj.name] = document.createElement(obj.name);
        this._objContainer.appendChild(this._htmlObjects[obj.name]);
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
            console.log(this._gameobjects[objKey], "drawing");
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
