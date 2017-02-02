import Sprite from "../BaseObjects/Sprite";
import Transform from "../BaseObjects/Transform";
import {NodeTypes} from "./NodeTypes";
import Defaults from "../Systems/Defaults";

/**
 * The node class for circles that do something in the game
 */
export default class Node extends Sprite {

    //The type of node that it is
    public nodeType : NodeTypes;
    //The connected nodes which it needs to excecute afther this one
    public connectedNodes : Node[];

    constructor (name : string, transform : Transform = new Transform(), nodeType : NodeTypes = NodeTypes.None, imgPath : string = Defaults.defaultImage) {
        super(name + "Node", transform, imgPath);
        this.nodeType = nodeType;
        this.connectedNodes = [];
    }

    /**
     * The function that fires the behavour of a node
     */
    Fire () {

    }
}
