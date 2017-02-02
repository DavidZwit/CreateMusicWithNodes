import Transform from "../BaseObjects/Transform";
import {NodeTypes} from "./NodeTypes";
import Node from "./Node";

/**
 * A node that will make a sound when excecuted
 */
export default class SoundNode extends Node {

    //The sound it will play
    public sound : null;

    constructor (name : string, transform : Transform = new Transform(), sound : any) {
        super (name + "_Sound", transform, NodeTypes.Sound);

        this.sound = sound;
    }
}
