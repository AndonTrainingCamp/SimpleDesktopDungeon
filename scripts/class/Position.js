class Position {
    constructor (x = 0, y = 0) {
        //TODO check validity first
        this.x = x;
        this.y = y;
    }

    move (direction) { // one of 'up', 'down', 'left', 'right'
        //TODO check validiti and set new position
    }

    //TODO use game environment const to alsocheck for max value
    static isValidPosition(x, y) {
        return !(x < 0 || y < 0);
    }
}
