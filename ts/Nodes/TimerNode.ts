import Transform from "../BaseObjects/Transform";
import {NodeTypes} from "./NodeTypes";
import Node from "./Node";
import Defaults from "../Systems/Defaults";

/**
 * A timer node which goes down each time it gets fired. Once it reaches 0 it excecutes its connected nodes
 */
export default class TimerNode extends Node {

    //The amound of loops it will last before resetting
    public loops : number;

    constructor (name : string, transform : Transform = new Transform(), loops : number = 1, imgPath : string = Defaults.defaultImage) {
        super (name + "_Timer", transform, NodeTypes.Timer);
        this.loops = loops || 1;
    }
}
