// The `for...in` loop iterates through all **enumerable string properties** of an object and its prototype chain.

// Important: It's primarily designed for objects, not arrays.

// In JavaScript, enumerable means that a property can be listed or looped over — for example, by a loop like:
//     --for...in
//     --Object.keys()
//     --Object.entries()

// If a property is enumerable, it shows up in those loops. If it’s non-enumerable, it won’t shown even when present.


// Example 1: 
// Here, the loop will run once for each property name: model, year, and color.

const car = {
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
    console.log(`Property: ${prop}, value: ${car[prop]}`);
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

    const element = car[prop];
    console.log(element);
}

// #4
// loop through your object’s own keys only, a more modern and cleaner way
Object.keys(car).forEach(prop => {
    console.log(car[prop]);
});


// Example: 3
const house = {
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
    console.log(`${key} : ${house[key]}`);
}


// Example 4: Filtering and Counting Object Properties
const inventoryItem = {
    productName: 'Laptop Stand',
    sku: 'LS-900',
    price: 45.99,
    stock: 150
};

let stringProperties = 0;
let numericProperties = 0;
let loopCount = 0;

for (const key in inventoryItem) {
    // Tracks number of loops done
    loopCount++;
    console.log(`No of loop runs: ${loopCount}`);

    // Stores key value
    let keyValue = inventoryItem[key];

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
const person = {
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

const user = {
    name: "Alice Winterfell",
    gender: "female",
    profession: "tailor",
    age: 19,
};

// Make person the prototype of user
Object.setPrototypeOf(user, person);

console.log(`${user.name} is ${user.eat()}`);

for (const key in user) {
    if (!user.hasOwnProperty(key)) {
        console.log(`\nInherited property`);
        console.log(`${key} : ${user[key]}`);
    } else {
        console.log(`\nOwn property`);
        console.log(`${key} : ${user[key]}`);
    }
}

console.log(`String Properties: ${stringProperties}`);
console.log(`Number Properties: ${numericProperties}`);



// Example 6: Copying Object Properties (Shallow Copy)
// The for...in loop is a common way to perform a shallow copy of an object's enumerable properties, excluding any inherited properties and vice versa.

const originalSettings = {
    theme: 'dark',
    fontSize: 'medium',
    notifications: true,
};

const presentSettings = {
    ads: 'shown',
    cookieTracker: 'enabled',
};

// Make originalSettings prototype of presentSettings
Object.setPrototypeOf(presentSettings, originalSettings);

// Shown enumerable properties
console.log(); // newline
for (const key in presentSettings) {
    console.log(`${key} : ${presentSettings[key]}`);
}

// A copy of only the original settings
console.log(`\n---------------original settings---------------`);

// a place to store(inherited property) original setting object properties(key-value pairs)
const copiedOrgSets = {};

// Loop through
for (const key in presentSettings) {
    if (presentSettings.hasOwnProperty(key)) {
        continue;
    }

    // copy the key and it's value to the new object
    copiedOrgSets[key] = presentSettings[key];

    // Log object key and value
    console.log(`${key} : ${presentSettings[key]}`);
}

console.log(copiedOrgSets); // log out copied settings



// A copy of only the newly added settings
console.log(`\n---------------newly added settings---------------`);

const copiedPresentSets = {};

for (const key in presentSettings) {
    if (!presentSettings.hasOwnProperty(key)) {
        continue;
    }

    copiedPresentSets[key] = presentSettings[key];

    console.log(`${key} : ${presentSettings[key]}`);
}
console.log(copiedPresentSets);



