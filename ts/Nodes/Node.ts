import GameObject from "../BaseObjects/Gameobject";
import Transform from "../BaseObjects/Transform";
import {NodeTypes} from "./NodeTypes";

/**
 * The node class for circles that do something in the game
 */
export default class Node extends GameObject {

    //The type of node that it is
    public nodeType : NodeTypes;
    //The connected nodes which it needs to excecute afther this one
    public connectedNodes : Node[];

    constructor (name : string, transform : Transform = new Transform(), nodeType : NodeTypes = NodeTypes.None) {
        super(name + "Node", transform);
        this.nodeType = nodeType;
        this.connectedNodes = [];
    }

    /**
     * The function that fires the behavour of a node
     */
    Fire () {

    }
}
