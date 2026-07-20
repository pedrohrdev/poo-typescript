/* 
Abstraction is a fundamental concept in programming that
allows developers to hide complex implementation details
and expose only the necessary parts of an object or
function. In TypeScript, abstraction can be achieved
through the use of interfaces, abstract classes, and
access modifiers.
*/

interface Shape {
    area(): number;
}

class Circle implements Shape {

    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public area(): number {
        return parseFloat((Math.PI * this.radius * this.radius).toFixed(2));
    }   

};

const myCircle = new Circle(5);
console.log(`Area of the circle: ${myCircle.area()}`); // Area of the circle: 78.53981633974483