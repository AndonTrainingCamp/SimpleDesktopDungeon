class Hero {
    /**
    * generates a random hero
    * @param {number} level - used to initiate monsters
    */
    constructor(hero){
        //TODO generate initial hero/random monster with random stats
        this.name = hero.name || this.randomName();
        this.experience = 0;
        this.level = hero.level || 1;
        this.stats = new Stats();
        this.avatar = new URL(''); //URI to hero image
        this.position = new Position();
        this.gear = {
            left: new Item(),
            right: new Item(),
            chest: new Item(),
            head: new Item()
        };
        this.carry = []; // Item
        this.potions = []; // Potion
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

    randomName() {
        const fname = ['Monstrous', 'Magnificent', 'All Mighty', 'Bloodthirsty'];
        const lname = ['Cucumber', 'Pineapple', 'Melon', 'Avocado'];
        const firstNameIndex = Math.floor(Math.random() * fname.length);
        const lastNameIndex = Math.floor(Math.random() * lname.length);
        return fname[firstNameIndex] + ' ' + lname[lastNameIndex];
    }
}