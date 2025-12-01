// super = keyword is used in classes to call the constructor or access the properties and methods of an object parent class (superclass)/(or prototype).
//               this = this object
//               super = the parent


// The "super" keyword in JavaScript is used in "classes" to access and call functions belonging to an object's "parent class" .

// 🔑 Key Uses of super
// The super keyword has two main uses, both related to inheritance in class-based object-oriented programming:

// 1. Calling the Parent Constructor (super())
// When you create a subclass that extends a parent class, the first thing you typically do in the subclass's constructor is call super().

// 2. Calling Parent Methods (super.methodName())
// You use super. followed by a method name to call a method with the same name from the parent class.

// Example 1
// (Super/Parent) Class/object constructor
class Animal {

    constructor(name, age, animal) {
        this.name = name;
        this.age = age;
        this.animal = animal;
    }

    // function/obj. method
    move(speed) {
        console.log(`The ${this.name} moves at a speed of ${speed}km/hr`);
    }
}

// children classes/ object constructors
// Cat class
class Cat extends Animal {

    animal = "cat"; // class property @notes -> index 1

    constructor(name, age, runSpeed) {
        // 1. MUST call super() first to initialize 'this'
        super(name, age, "cat"); // pass it to super directly @notes -> index 2
        // 2. Now you can safely use 'this'
        this.runSpeed = runSpeed;
    };

    run() {
        console.log(`The ${this.animal} called ${this.name} can run.`);
        super.move(this.runSpeed);
    };
}

// Fish class
class Fish extends Animal {

    animal = "fish"; // class property

    constructor(name, age, swimSpeed) {
        super(name, age, "fish");
        this.swimSpeed = swimSpeed;
    };

    swim() {
        console.log(`The ${this.animal} called ${this.name} can swim.`);
        super.move(this.swimSpeed);
    }
}

// Bird class
class Bird extends Animal {

    animal = "bird"; // class property

    constructor(name, age, flySpeed) {
        super(name, age, "bird");
        this.flySpeed = flySpeed;
    };

    fly() {
        console.log(`The ${this.animal} called ${this.name} can fly.`);
        super.move(this.flySpeed);
    }
}

// Create new objects
const cat1 = new Cat("Tom", 3, 48);
const fish1 = new Fish("Nemo", 7, "unknown");
const bird1 = new Bird("Mighty Eagle", 20, 45);

// access properties
console.log(cat1.runSpeed);
console.log(fish1.swimSpeed);
console.log(bird1.name);

// call child (+ parent) method
cat1.run();
fish1.swim();
bird1.fly();





// Example 2

class Vehicle {
    constructor(brandName) {
        this.brandName = brandName;
    }

    revEngine() {
        return `engine revs!`;
    }
}

class Car extends Vehicle {
    constructor(brandName, model) {
        // 1. MUST call super() first to initialize 'this'
        super(brandName);
        // 2. Now you can safely use 'this'
        this.model = model;
    }

    startCar() {
        // Calling the parent's revEngine() method and adding to the result
        return `The ${this.brandName} car starts successfully...` + super.revEngine();
    }
}

const car1 = new Car("Toyota", "Toyota Corolla");
const car2 = new Car("Honda", "Honda Accord");



// print object
console.log(car1);
// Property print
console.log(car1.brandName);
console.log(car1.model);
// print (Object method call) result
console.log(car1.startCar());
console.log(car1.revEngine());
console.log(car2.startCar());


