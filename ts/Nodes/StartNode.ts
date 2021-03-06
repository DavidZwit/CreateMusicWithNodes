import Transform from "../BaseObjects/Transform";
import {NodeTypes} from "./NodeTypes";
import Node from "./Node";
import Defaults from "../Systems/Defaults";

/**
 * The first node that will be fired
 */
export default class StartNode extends Node {

    constructor (name : string, transform : Transform = new Transform(), imgPath : string = Defaults.defaultImage) {
        super(name + "_Start", transform, NodeTypes.Start);
    }

    Update () {
        this.transform.rotation += 1;
    }
}
