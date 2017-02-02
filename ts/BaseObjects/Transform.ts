import { Vector2 } from "./Vector";
import Defaults from "../Systems/Defaults";

/**
 * Holds information about the position/rotation/scale of an object
 */
export default class Transform {

    //The position
    position : Vector2;
    //The rotation
    rotation : number;
    //The size
    scale : Vector2;

    constructor (position : Vector2 = new Vector2(Defaults.spawnPosition.x, Defaults.spawnPosition.y), scale : Vector2 = new Vector2(1, 1), rotation : number = 0) {
        this.position = position;
        this.rotation = rotation;
        this.scale = scale;
    }
}
