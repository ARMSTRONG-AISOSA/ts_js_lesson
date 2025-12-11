// static = is a keyword that defines/makes a property or method belong to the class itself (the constructor function), not to instances created with new



// Example 1: Utility Class
// 1. Static Methods (static methodName())
// The most common use of the static keyword is to create utility functions that are logically grouped with the class but don't need access to instance-specific data.

// i.e, a new object
// const myUtil = new MathUtil(); // This is unnecessary

class MathUtil {
    static PI = 3.14159;

    // circle diameter
    static getCircleDiameter(radius) {
        return radius * 2;
    }

    // circumference
    static getCumference(radius) {
        return 2 * this.PI * radius;
    }

    // circle area
    static getCircleArea(radius) {
        return this.PI * radius * radius;
    }

    // double value
    static double(value) {
        return value * 2;
    }

    // half value
    static half(value) {
        return value / 2;
    }
}

// ✅ You call the method directly on the class
// i.e, class == MathUtil --- method == PI/double(10)
console.log(MathUtil.PI);
console.log(MathUtil.double(10));
console.log(MathUtil.getCircleArea(4));
console.log("\n\n");



// Example 2
// 2. Static Properties (static propertyName)
// Static properties are used to store data that should be shared by or belong to the entire class.

// Example: Counter or Configuration
// A great use case is maintaining a counter for how many objects of that class have been created.

class User {
    static userCount = 0;

    constructor(userName) {
        this.userName = userName;
        User.userCount++;
    }

    greet() {
        console.log(`\nHi, \nmy username is ${this.userName}.`);
    }

    static getUserCount() {
        console.log(`\nThere are ${User.userCount} in our database.`);
    }
}

// constructor can carry extra code; it's not only for assigning properties
// Here the code tracks the number(state) of (new) user create


// Users
const user1 = new User("Naruto");
// ✅ Access the static method via the class
console.log(`User Count: ${User.userCount}`);
// --------------------------------------------
const user2 = new User("Ichigo");
const user3 = new User("Natsu");

console.log(user1.userName);
// ✅ Access the static method via the class
console.log(`User Count: ${User.userCount}`);
// --------------------------------------------
user3.greet();
User.getUserCount();





// Example 3
// Since ES2022, JavaScript also allows a static {} block. This block executes once when the class is first loaded/created/evaluated and can contain complex initialization logic for static fields.


// # before a field name makes it private (private to the class body)
// (class-private; only code inside the class can read/write it).


// Static public fields and methods are inherited by subclasses:
// Private static fields (with #) are not accessible to subclasses — they are private to the class that defines them. Subclasses cannot read #defaultSettings from Config.


// this inside static contexts
// Inside a static method or static block, this refers to the class constructor (the class itself), not an instance. So inside the static block this === Config (unless class is in a different binding, e.g., unnamed class expressions).
// That means using this.settings inside the static block would work similarly to Config.settings.


class Config {
    static #defaultSettings = { max: 10, min: 1, theme: "system_default" };
    static settings; //undefined for now

    // Static initialization block
    static {
        // Complex logic runs once when the class is defined
        const isDevelopment = (process.env.NODE_ENV == 'development');

        // this. === Config.
        if (isDevelopment) {
            Config.settings = { ...Config.#defaultSettings, max: 100, theme: "dark" };
        } else {
            this.settings = this.#defaultSettings;
        }
    }
};

console.log(Config.settings);

// Open to read notes
// Why use static fields and static blocks? (use cases)

// Shared configuration: a Config class that stores app-level settings used by many modules.
// Factory helpers: Date.now() is a real-world example — now is a static method because it doesn’t need an instance.
// Caching shared resources: e.g., a database connection pool stored as a static field so all consumers reuse it.
// Complex static initialization: compute derived static values that depend on other static/private fields or environment detection.
// Encapsulation: combine private static fields with a static block to keep defaults hidden from outside code.


// process.env is typically a Node.js thing (not a browser global) used here to detect “development” vs “production”.




//   static #defaultSettings = { max: 10, min: 1 };
// The value is an object { max: 10, min: 1 }. Because it is static, there's a single shared object for the whole class, not one per instance.


// static settings;
// Declares a static public field settings on the class. It starts as undefined until the static block assigns it. You can access it later as Config.settings.

// static { ... } (static initialization block)
// This block runs once when the class Config { ... } definition is evaluated
// process.env.NODE_ENV is a Node environment variable convention.
// process.env.NODE_ENV is often used to mark a runtime as 'development' vs 'production'
// Then the block either sets Config.settings to a clone of the default with max: 100 in development, or to the default settings object in other environments:
// Config.settings = { ...Config.#defaultSettings, max: 100 }; clones the default object and overrides max.
// Config.settings = Config.#defaultSettings; just points settings to the same default object.
// Important: because #defaultSettings is private, the static block is a legitimate place to read it. Without private statics, you might expose the defaults publicly.

console.log(`Space \n\n`);


// Example 4
// 4. Inheritance and static
// Static members are inherited by subclasses. The super keyword can be used in a static method of a subclass to call the corresponding static method of the parent class.

class Animal {
    static isMammal = true;
    static getInfo() {
        return `This is an animal.`;
    }
}

class Dog extends Animal {
    static getDogInfo() {
        // Use super to call the parent's static method
        return `${super.getInfo()} It is a Dog`;
    }
}

// ✅ Inheritance works for static members
console.log(Dog.isMammal); // Output: true
console.log(Dog.getInfo()); // Output: This is an animal. It is also a dog.

