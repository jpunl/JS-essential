// https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript
// OOJS1

class Shape {
    name;
    sides;
    sideLength;

    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        return this.sides * this.sideLength;
    }

}

const square = new Shape('square', 4, 5);
console.log(`The perimeter of ${square.name} is ${square.calcPerimeter()}.`);

const triangle = new Shape('triangle', 3, 3);
console.log(`The perimeter of ${triangle.name} is ${triangle.calcPerimeter()}.`);

// OOJS2
