/*
Inheritance is a fundamental concept in object-oriented programming
that allows a class to inherit properties and methods from another
class. In TypeScript, inheritance is implemented using the `extends` keyword.
*/

class Animal {
    protected name: string;
    
    constructor(name: string) {

        this.name = name;

    }    
};

class Dog extends Animal {

    constructor(name: string) {

        super(name);

        console.log(`Dog's name is: ${this.name}`); // Dog's name is: Buddy

    }
};

class Cat extends Animal {

    constructor(name: string) {

        super(name);

        console.log(`Cat's name is: ${this.name}`); // Cat's name is: Whiskers

    }
};

const myDog = new Dog("Buddy");
const myCat = new Cat("Whiskers");  