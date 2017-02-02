/**
 * The vector class which holds x, y information and has some functions to moddify them
 */
export class Vector2 {

    //The x position in this vector
    public x : number;
    //The y position in this vector
    public y : number;

    constructor (x : number = 0, y : number = 0) {
        this.x = x || 0;
        this.y = y || 0;
    }
}
