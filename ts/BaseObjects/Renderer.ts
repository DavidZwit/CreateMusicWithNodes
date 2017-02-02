import GameObject from "./Gameobject";

/**
 * The base class for a renderer
 */
export default class Renderer {

    //The gamobject loop for all the gameobjects
    protected _gameobjects : {};

    constructor (gameobjects : {}) {
        this._gameobjects = gameobjects;
    }

    /**
     * The function where the functionality for adding an object can be placed in
     */
    AddObject (obj : GameObject) {

    }

    /**
     * The function where the functionality for removing an object can be placed
     */
    RemoveObject (obj : GameObject) {

    }

    /**
     * The draw loop
     */
    public Draw () {

    }

}
