// inheritance = allows a new class (child) to inherit properties and methods from an existing class (parent). Helps with code reusability (D-R-Y)

class Animal {
    alive = true;

    isAlive() {
        console.log(`The ${this.name} ${this.alive ? "is" : "not"} alive.`);
        
    }

    eat() {
        // if/conditional statement
        if (this.alive) {
            console.log(`This ${this.name} is eating.`);
        } else {
            console.log(`The ${this.name} is dead.`);
        }
    };

    sleep() {
        // Ternary/conditional statement
        console.log(`This ${this.name} is ${this.alive ? "asleep" : "dead"}.`);
    }
}

class Lion extends Animal {
    name = "Lion";

    run() {
        // if/conditional statement
        if (this.alive) {
            console.log(`This ${this.name} is running.`);
        } else {
            console.log(`The ${this.name} is dead.`);
        }
    };

    hunt() {
        // if/conditional statement
        if (this.alive) {
            console.log(`This ${this.name} is hunting.`);
        } else {
            console.log(`The ${this.name} is dead.`);
        }
    };
}

class Dove extends Animal {
    name = "Dove";

    fly() {
        // if/conditional statement
        if (this.alive) {
            console.log(`This ${this.name} is flying.`);
        } else {
            console.log(`The ${this.name} is dead.`);
        }
    };

    forage() {
        // if/conditional statement
        if (this.alive) {
            console.log(`This ${this.name} is foraging.`);
        } else {
            console.log(`The ${this.name} is dead.`);
        }
    };
}

class Shark extends Animal {
    name = "Shark";

    swim() {
        // if/conditional statement
        if (this.alive) {
            console.log(`This ${this.name} is swiming.`);
        } else {
            console.log(`The ${this.name} is dead.`);
        }
    };

    hunt() {
        // if/conditional statement
        if (this.alive) {
            console.log(`This ${this.name} is hunting.`);
        } else {
            console.log(`The ${this.name} is dead.`);
        }
    };
}


// Lion
const lion_1 = new Lion();
lion_1.eat();
lion_1.run();
// lion_1.isAlive();
// The lion is killed
lion_1.alive = false;
lion_1.eat();
lion_1.isAlive();

// Dove
const dove_1 = new Dove();
dove_1.fly();

// Shark
const shark_1 = new Shark();
shark_1.swim();
