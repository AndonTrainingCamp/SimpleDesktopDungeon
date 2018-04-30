class Hero {
    /**
    * generates a random hero
    * @param {number} level - used to initiate monsters
    */
    constructor(level){
        //TODO generate initial hero/random monster with random stats
        this.name = '';
        this.experience = 0;
        this.level = level;
        this.stats = new Stats();
        this.avatar = ''; //URI to hero image
        this.position = new Position();
        this.gear = {
            left: new Item(),
            right: new Item(),
            chest: new Item(),
            head: new Item()
        };
        this.carry = new Array(4); // Item
        this.potions = new Array(1); // Potion
    }

    levelUp(){
        //TODO raise stats/level++
    }

    attack(){
        //TODO calculate attack based on stats + gear
    }

    defend(){
        //TODO calculate defense based on stats + gear
    }

    /**
    * adds the item to the corresponding item slot,
    * dismissing already existing item on it
    * @param {Item} item - item to add
    */
    setGear(item){
        // TODO implement
    }
}