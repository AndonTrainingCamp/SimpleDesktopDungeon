class Position {
    constructor (x, y) {
        //TODO check validity first
        this.x = x || 0;
        this.y = y || 0;
    }

    move (direction) { // one of 'up', 'down', 'left', 'right'
        //TODO check validiti and set new position
    }

    //TODO use game environment const to alsocheck for max value
    static isValidPosition(x, y) {
        return !(x < 0 || y < 0);
    }
}
