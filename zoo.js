var animalPopulation = 0;

function run(){
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");

    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");

    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");
    rarity.sleep();

    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");

    var stinger = new Bee("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");
    stinger.sleep();

    var animals = [];
    animals.push(tigger);
    animals.push(pooh);
    animals.push(rarity);
    animals.push(gemma);
    animals.push(stinger);
    var zookeeper = new Zookeeper("Zoebot");
    zookeeper.feedAnimal(animals, "meat");


}

class Animal{

    constructor(name, favoriteFood){
        this.name = name;
        this.favoriteFood = favoriteFood
        animalPopulation++;
    }

    static getPopulation(){
        return animalPopulation;
    }

    eat(food){
        console.log(this.name + " eats " + food);
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }

    sleep(){
        console.log(this.name + " sleeps for 8 hours");

    }
}

class Tiger extends Animal{

    constructor(name){
        super(name,"meat");
    }

}

class Bear extends Animal{

    constructor(name){
        super(name,"fish");
    }

    sleep(){
        console.log(this.name + " hibernates for 4 months");
    }

}

class Unicorn extends Animal{

    constructor(name){
        super(name,"marshmallows");
    }

    sleep(){
        console.log(this.name + " sleeps in a cloud.");
    }

}

class Giraffe extends Animal{

    constructor(name){
        super(name,"leaves");
    }

    eat(food){
        if (food == "leaves"){
            super.eat("leaves");
            super.sleep();
    } else {
            console.log("Yuck!!! " + this.name + " will not eat " + food);
        }
    }

}

class Bee extends Animal{

    constructor(name){
        super(name,"pollen");
    }

    eat(food){
        if (food == "pollen"){
            super.eat("pollen");
        } else {
            console.log("Yuck!!! " + this.name + " will not eat " + food);
        }
    }

    sleep(){
        console.log(this.name + " never sleeps");
    }
}

class Zookeeper{

    constructor(name){
        this.name = name;
    }

    feedAnimal(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + Animal.getPopulation() + " total animals");
        for (var i=0; i<animals.length; i++){
            animals[i].eat(food);
        }
    }
}