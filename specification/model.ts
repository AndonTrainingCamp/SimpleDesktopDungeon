class Hero {
    name: string;

    experience: number;

    level: number;

    stats: Stats;

    avatar: string //URI to hero image

    position: Position;

    gear: {
        left: Item,
        right: Item,
        chest: Item,
        head: Item,
    }

    carry: [Item];

    potions: [Potion];
}

class Stats {
    hitpoints: number;
    attack: number;
    defence: number;
}

class Position {
    x: number
    y: number
}

class Item {
    type: string // One of left, right, chest or head
    modifiers: Stats //applied on top of base hero stats
    effects: {
        onAttack: (state: GameState) => void //function which will be invoced on every attack
    }
    avatar: string //URI to item image
}

class Potion {
    type: string //only health
    size: number //number of HPs gained
}

class Portal {
    type: number; //one of 1, -1
    position: Position;
    avatar: string //URI to portal image
}

class Chest {
    position: Position;
    level: number;
    avatar: string //URI to chest image
}

class Encounter {
    level: number;

    monsters: [Hero];

    turn: number; //index of creature to act: main character is 0, monsters [1..4]
}

class GameState {
    level: number;

    hero: Hero;

    chests: [Chest];

    portals: [Portal];

    encounter: Encounter;
}


