import Transform from "../BaseObjects/Transform";
import {NodeTypes} from "./NodeTypes";
import Node from "./Node";

/**
 * The first node that will be fired
 */
export default class StartNode extends Node {

    constructor (name : string, transform : Transform = new Transform()) {
        super(name + "_Start", transform, NodeTypes.Start);
    }

    Update () {
        
    }
}
