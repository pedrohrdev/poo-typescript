/*
Polymorphism is a core concept in object-oriented
programming that allows objects of different classes
to be treated as objects of a common superclass. In TypeScript,
polymorphism can be achieved through interfaces,
abstract classes, and method overriding.
*/

class Animal1 {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public makeSound(): void {}
}

class Dog1 extends Animal1 {
    constructor(name: string) {
        super(name);
    }

    public makeSound(): void {
        console.log(`${this.name} barks.`);
    }
}

class Cat1 extends Animal1 {
    constructor(name: string) {
        super(name);
    }

    public makeSound(): void {
        console.log(`${this.name} meows.`);
    }
}

const myDog1 = new Dog1("Buddy");
const myCat1 = new Cat1("Whiskers");

myDog1.makeSound(); // Buddy barks.
myCat1.makeSound(); // Whiskers meows.