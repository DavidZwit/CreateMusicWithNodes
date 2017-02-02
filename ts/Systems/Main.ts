import GameLoop from "./Engine";
import HTMLRenderer from "./HTMLRenderer";
import Hierarchy from "./Hierarchy";
import GameObject from "../BaseObjects/Gameobject";

/**
 * The main start class which is contained in a module
 */
module Engine {

    //Creating the renderer
    let renderer = new HTMLRenderer(GameObject.OBJECTS, "elementsContainer");
    //Creating the game loops
    let loop = new GameLoop(GameObject.OBJECTS, renderer);

    /**
     * Destroy function to destroy any gameobject if needed
     */
    function Destroy (obj : GameObject) {
        renderer.RemoveObject(obj);
        delete GameObject.OBJECTS[obj.name];
    }

    /**
     * Instantiate function to add a gameobject to the world if needed
     */
    function Instantiate<T> (obj : GameObject) {
        //Making sure the gameobject name is unique
        for (let objKey in GameObject.OBJECTS) {
            let objCounter = 0;
            if (objKey == obj.name) objCounter++;

            //GameObject.OBJECTS[objKey].name += "(",objCounter,")";
        }

        //Adding it to the gameobject object
        GameObject.OBJECTS[obj.name] = obj;
        //Adding it to the renderer
        renderer.AddObject(GameObject.OBJECTS[obj.name]);

        //Excecuting the awake function
        GameObject.OBJECTS[obj.name].Awake();
    }

    /**
     * Instantiating the objects given in the hierarchy
     */
    for (let objKey in Hierarchy) {

        Instantiate<GameObject>(Hierarchy[objKey]);
    }

    //Starting the loops
    loop.Start();

}
