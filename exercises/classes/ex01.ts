/*
Exercise 1: Person Class
*/

class Person {

    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public introduce(): void {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }

    public haveBirthday(): void {
        this.age += 1;
        console.log(`Happy Birthday! Now ${this.name} is ${this.age} years old.`);
    }
}

// Creating two different people
const person1 = new Person("Pedro", 16);
const person2 = new Person("Ana", 22);

console.log("--- Person 1 ---");
person1.introduce();
person1.haveBirthday();
person1.introduce();

console.log("\n--- Person 2 ---");
person2.introduce();
person2.haveBirthday();
person2.introduce();