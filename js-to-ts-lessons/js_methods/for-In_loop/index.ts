// The `for...in` loop iterates through all **enumerable string properties** of an object and its prototype chain.

// Important: It's primarily designed for objects, not arrays.

// In JavaScript, enumerable means that a property can be listed or looped over — for example, by a loop like:
//     --for...in
//     --Object.keys()
//     --Object.entries()

// If a property is enumerable, it shows up in those loops. If it’s non-enumerable, it won’t shown even when present.


// Example 1: 
// Here, the loop will run once for each property name: model, year, and color.

interface Car {
    model: string;
    year: number;
    color: string;
    isSelfDriving: boolean;
    start: () => void;
}

const car: Car = {
    model: 'Tesla',
    year: 2023,
    color: 'red',
    isSelfDriving: true,
    start: function () {
        console.log('Vroom vroommm!');
    }
};

// #1
console.log(`\ncar object =`);
console.log(car);

// #2
console.log(`\nLooping through to print car object keys(properties) and values`); //newline
for (const prop in car) {
    // prop as keyof Car: This tells TypeScript: “Don’t worry, this string is one of Car’s keys.”
    console.log(`Property: ${prop}, value: ${car[prop as keyof Car]}`);
}




// hasOwnProperty()
// A major characteristic of for...in is that it iterates over properties that are on the object itself (own properties) and properties that are inherited from its prototype chain.

// To ensure you only process the properties directly defined on the object (which is usually what you want), you must use the Object.prototype.hasOwnProperty() method inside the loop.

// for...in loops through all enumerable properties, including those inherited from the prototype chain.

// Example: 2
console.log(); //newline
for (const prop in car) {
    // hasOwnProperty(prop) checks if the property belongs directly to the object (car) and not its prototype.
    // It skips any inherited properties.
    if (!car.hasOwnProperty(prop)) continue;

    const element = car[prop as keyof Car];
    console.log(element);
}

// #4
// loop through your object’s own keys only, a more modern and cleaner way
Object.keys(car).forEach(prop => {
    console.log(car[prop as keyof Car]);
});


// Example: 3
interface House {
    yearBuilt: number;
    size: string;
    rooms: number;
    sqFt: number;
    isRented: boolean;
    neighbourhood: string;
    rentInfo: () => void;
}

const house: House = {
    yearBuilt: 2022,
    size: 'medium',
    rooms: 4,
    sqFt: 2286,
    isRented: true,
    neighbourhood: 'sub-urban',
    rentInfo: function () {
        console.log(`A family of 5 lives in this home already!`);
    }
}

console.log(); //newline
for (const key in house) {
    console.log(`${key} : ${house[key as keyof House]}`);
}


// Example 4: Filtering and Counting Object Properties
interface InventoryItem {
    productName: string;
    sku: string;
    price: number;
    stock: number;
}

const inventoryItem: InventoryItem = {
    productName: 'Laptop Stand',
    sku: 'LS-900',
    price: 45.99,
    stock: 150
};

let stringProperties: number = 0;
let numericProperties: number = 0;
let loopCount: number = 0;

for (const key in inventoryItem) {
    // Tracks number of loops done
    loopCount++;
    console.log(`No of loop runs: ${loopCount}`);

    // Stores key value
    let keyValue = inventoryItem[key as keyof InventoryItem];

    // Checks and skips inherited properties
    if (!inventoryItem.hasOwnProperty(key)) {
        console.log("Skiping inherited property");
        continue; //skip
    }

    if (typeof keyValue === 'string') {
        stringProperties++;
    } else if (typeof keyValue === 'number') {
        numericProperties++;
    }
}


// Example 5: loopingf through inherited property Properties
interface Person {
    greet?: () => string;
    cook?: () => string;
    eat?: () => string;
}

const person: Person = {
    greet() {
        return "Hello!";
    },
    cook() {
        return "Meal preparation started!";
    },
    eat() {
        return "eating a meal!";
    }
};

interface User extends Person{
    name: string;
    gender: string;
    profession: string;
    age: number;
}

const user: User = {
    name: "Alice Winterfell",
    gender: "female",
    profession: "tailor",
    age: 19,
};

// Make person the prototype of user
Object.setPrototypeOf(user, person);

// user.eat?.(); === safely calls eat() only if it exists (avoids errors if undefined).
console.log(`${user.name} is ${user.eat?.() ?? "undefined"}`);

// ?? is the nullish coalescing operator, meaning:
// “If user.eat?.() returns null/undefined/"", use "undefined" instead.”
// done to avoid an empty field without value

for (const key in user) {
    if (!user.hasOwnProperty(key)) {
        console.log(`\nInherited property`);
        console.log(`${key} : ${user[key as keyof User]}`);
    } else {
        console.log(`\nOwn property`);
        console.log(`${key} : ${user[key as keyof User]}`);
    }
}

console.log(`String Properties: ${stringProperties}`);
console.log(`Number Properties: ${numericProperties}`);



// Example 6: Copying Object Properties (Shallow Copy)
// The for...in loop is a common way to perform a shallow copy of an object's enumerable properties, excluding any inherited properties and vice versa.

interface OriginalSettings {
    theme?: string;
    fontSize?: string;
    notifications?: boolean;
}

const originalSettings: OriginalSettings = {
    theme: 'dark',
    fontSize: 'medium',
    notifications: true,
};

interface PresentSettings extends OriginalSettings {
    ads: string;
    cookieTracker: string;
}

const presentSettings: PresentSettings = {
    ads: 'shown',
    cookieTracker: 'enabled',
};

// Make originalSettings prototype of presentSettings
Object.setPrototypeOf(presentSettings, originalSettings);

// Shown enumerable properties
console.log(); // newline
for (const key in presentSettings) {
    console.log(`${key} : ${presentSettings[key as keyof PresentSettings]}`);
}

// A copy of only the original settings
console.log(`\n---------------original settings---------------`);


// What is Record<K, T>?
// It is a utility type in TypeScript used to create an object type where:
// The keys are of type K
// The values are of type T
// In plain English: “A Record lets you describe an object with a specific key type and value type
// Syntax: Record<Keys, TypeOfValue>

// a place to store(inherited property) original setting object properties(key-value pairs)
const copiedOrgSets: Record<string, unknown> = {};

// Loop through
for (const key in presentSettings) {
    if (presentSettings.hasOwnProperty(key)) {
        continue;
    }

    // copy the key and it's value to the new object
    copiedOrgSets[key] = presentSettings[key as keyof PresentSettings];

    // Log object key and value
    console.log(`${key} : ${presentSettings[key as keyof PresentSettings]}`);
}

console.log(copiedOrgSets); // log out copied settings



// A copy of only the newly added settings
console.log(`\n---------------newly added settings---------------`);

const copiedPresentSets: Record<string, unknown> = {};

for (const key in presentSettings) {
    if (!presentSettings.hasOwnProperty(key)) {
        continue;
    }

    copiedPresentSets[key] = presentSettings[key as keyof PresentSettings];

    console.log(`${key} : ${presentSettings[key as keyof PresentSettings]}`);
}
console.log(copiedPresentSets);



