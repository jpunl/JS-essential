class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi, I'm ${this.name}`);
  }

}

const giles = new Person('Giles');
giles.introduceSelf();



// no constructor
class Animal {
  sleep() {
    console.log('zzzzzzz');
  }
}

const spot = new Animal();
spot.sleep();


// extend
// inheritance
class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(`The grade of ${this.paper} is ${grade}`);
  }
}

const walsh = new Professor('Walsh', 'Psychology');
walsh.introduceSelf();
walsh.grade('my paper');

// encapsulation
class Student extends Person {
  #year;    // private data property

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi, I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }

}

const xiaoming = new Student('Xiaoming', 2);
xiaoming.introduceSelf();
console.log(xiaoming.canStudyArchery());
console.log(xiaoming.year);  // undefined

// private methods
class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log('You called me?');
  }
}

const myExample = new Example();
myExample.somePublicMethod();
// myExample.#somePrivateMethod();  // syntax error

