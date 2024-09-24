//Create a class player
export class Player {

    constructor(name, country){
        this.name = name,
        this.country = country
    }

    aboutPlayer() {
        console.log(`The ${this.name} was born in ${this.country}`);
    }

}

export class tennisPlayer extends Player {
    constructor( name, country, age){
        super(name, country);
        this.age = age;
    }

    aboutPlayer(){
        console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`);
    };

}






