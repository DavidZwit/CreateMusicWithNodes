import { Vector2 } from "./Vector";

/**
 * Holds information about the position/rotation/scale of an object
 */
export default class Transform {

    position : Vector2;
    rotation : number;
    scale : Vector2;

    constructor (position : Vector2 = new Vector2(window.innerWidth/2, window.innerHeight/2), scale : Vector2 = new Vector2(10, 10), rotation : number = 0) {
        this.position = position;
        this.rotation = rotation;
        this.scale = scale;
    }
}
