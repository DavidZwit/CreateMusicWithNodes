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
            console.log(this);

            this._objects[objKey].Start();
        }


        this.Update(); //Start the update loop;
    }

    /**
     * Looping Updates
     */
    Update () {

        for (let objKey in this._objects) {
            this._objects[objKey].Update();
        }

        window.requestAnimationFrame(this.Update);
    }

    Draw () {
        this._renderer.Draw();
    }

}
