import Transform from "./Transform";
import GameObject from "./Gameobject";
import Defaults from "../Systems/Defaults";

export default class Sprite extends GameObject {

    public imgPath : string;

    constructor (name : string, transform : Transform = new Transform(), imgPath : string, imagePath : string = Defaults.defaultImage) {
        super (name, transform);

        this.imgPath = imgPath;
    }

}
