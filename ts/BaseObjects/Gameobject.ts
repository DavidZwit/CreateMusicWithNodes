import Transform from "./Transform";

/**
 * The base gameobject class for each thing that is a gameobject
 */
export default class GameObject {

    //THE object loop with all the gameobjects in the game
    static OBJECTS : {} = {};
    //The transform which a gameobject has
    public  transform : Transform;
    //The name of a gameobject to make it unique from others
    public name : string = "";

    constructor (name : string, transform : Transform = new Transform()) {

        this.name = name + "_obj";
        this.transform = transform;
    }

    /**
     * Excecutes just after the object gets instantiated
     */
    Awake() {

    }

    /**
     * Excecutes after all the declarations
     */
    Start () {

    }

    /**
     * Excecutes every animation frame
     */
    Update () {

    }
}
