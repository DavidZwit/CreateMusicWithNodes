import Renderer from "../BaseObjects/Renderer";

/**
 * The game loop class which has the loops in it
 */
export default class GameLoop {

    //The object with all the gameobjects
    private _objects : {};
    //The renderer in which the draw function can be called
    private _renderer : Renderer;

    constructor (objects : {}, renderer : Renderer) {
        this._objects = objects;
        this._renderer = renderer;
    }

    /**
    *   looping starting objects
     */
    Start () {

        for (let objKey in this._objects) {

            this._objects[objKey].Start();
        }

        //Start the update loop
        this.Update();
    }

    /**
     * Looping Updates
     */
    Update () {
        for (let objKey in this._objects) {
            this._objects[objKey].Update();
        }

        this.Draw();

        window.requestAnimationFrame(() => {this.Update()});
    }

    /**
     * Drawing the objects trough the renderer
     */
    Draw () {
        this._renderer.Draw();
    }

}
