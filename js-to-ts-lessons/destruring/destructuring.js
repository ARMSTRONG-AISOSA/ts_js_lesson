// Destructuring in JavaScript is a powerful feature that allows you to extract values from arrays or properties from objects into distinct variables. It provides a more concise and readable way to access and use data.

// ======================================= Array Destructuring
// Array destructuring lets you unpack values from arrays directly into variables.
// Ex 1.1
let cars = ["Toyota", "Mercedes", "Lamborgini"];
let [firstCar, secondCar, thirdCar] = cars;
console.log("\nThe third car in the array is a: ");
console.log(thirdCar);


console.log("\nThe first and second car in the array is a: ");
console.log(`The first car in the array is a ${firstCar} and second car in the array is a ${secondCar}.`);



// Skipping values: Use commas to skip elements you don't want to extract.
let colors = ["brown", "indigo", "grey", "orange"];
let [firstColor, , thirdColor] = colors;
console.log("\nThe third color in the array is a: ");
console.log(thirdColor);


// Rest parameter: Use the spread syntax (...) to collect the remaining elements into a new array.
let values = [5, 10, 15, 20, 25, 30];
let [firstValue, SecondValue, ...remainingValue] = values;
console.log("\nThe second value in the array is: ");
console.log(SecondValue);

console.log("\nThe remaining value in the array are: ");
console.log(remainingValue);


// Default values: Assign a default value to a variable in case the array element is undefined.
let veggies = ["carrot", "cucumber"];
let [mainVeggies, secondaryVeggie, tertiaryVeggies = "tomato"] = veggies;
console.log("\nThe tertiary veggie is: ");
console.log(tertiaryVeggies);





// ======================================= Object Destructuring
// Object destructuring extracts properties from objects into variables. Unlike array destructuring, the order doesn't matter; you match the variable name on the left with the property key on the right.

let individual1 = {
    firstName: "Chris",
    lastName: "Fergurson",
    age: 28,
    gender: "Male",
    state: "Texas",
};
let { lastName, firstName } = individual1;
console.log("\nThe fullname the individual is: ");
console.log(`${firstName} ${lastName}`);


// Aliases: Rename a destructured property to a different variable name using a colon (:).
let individual2 = {
    firstName: "Ben",
    lastName: "Grimm",
    age: 31,
    gender: "Male",
    state: "Texas",
}
let { age: personAge, lastName: personLastName, firstName: personFirstName } = individual2;
console.log(`\nHis fullname ${personFirstName} ${personLastName} and age is ${personAge}.`);


// Default values: Assign a default value if a property is not found on the object.
let person1 = {
    name: "Jessica Jones",
    country: "USA",
    city: "New York"
}
let person2 = {
    name: "Luna Snow",
    country: "Korea"
}

// city default value is set to unknown
function personInfo({ name, country, city = "Unknown" }) {
    console.log(`\nPerson name is ${name}, country from is ${country}, city form is ${city}.`);
}
personInfo(person1);
personInfo(person2);


// Rest parameter: Use the spread syntax (...) to collect the remaining properties into a new object.
let person3 = {
    name: "Frank Castle",
    country: "USA",
    city: "New York"
}
let { name: fullName, ...restOfPersonData } = person3;
console.log(`\nThe remaining info on ${fullName} is: `);
console.log(restOfPersonData);






// ======================================= Object Destructuring
// Function Parameters with Object Destructuring
// It simplifies passing and receiving multiple values in a function. Instead of accessing properties with data.name, you can directly use the property names as variables.

function calculateBMI({ weight, height, name }) {
    const bmi = weight / (height * height);
    console.log(`\n${name}'s bmi is ${weight}.`);
}

const userData1 = {
    name: 'John Doe',
    age: 30,
    weight: 70, // in kilograms
    height: 1.75, // in meters
};
const userData2 = {
    name: 'Jane Doe',
    age: 33,
    weight: 68, // in kilograms
    height: 1.65, // in meters
};

calculateBMI(userData1);
calculateBMI(userData2);



// Swapping variables: You can swap the values of two variables without a temporary (third) variable.
// Ex. 1
let a = "Hello";
let b = "World";

[a, b] = [b, a];
console.log("\nThe swapped values are:");
console.log(a);
console.log(b);

// Ex. 2
const colors2 = ["red", "green", "white", "black", "blue", "purple"];
console.log("\nThe color array:");
console.log(colors2);

//-----
[colors2[2], colors2[3], colors2[4]] = [colors2[4], colors2[2], colors2[3]];
console.log("\nThe color array with position(index) 2, 3 and 4 switched around:");
console.log(colors2);


// Pulling Data from an API Response
// It's incredibly useful for pulling specific fields from a large JSON object returned by an API, making your code cleaner and easier to read.
// When you receive a large JSON object from an API, you often only need a few specific fields. Destructuring allows you to extract those fields directly into variables, ignoring the rest. This makes the code much more readable and less prone to errors.

const weatherResponse = {
    coord: { lon: -0.31, lat: 51.51 },
    weather: [{ main: 'Clouds', description: 'overcast clouds' }],
    main: { temp: 280.32, feels_like: 279.13, temp_min: 2771.15, temp_max: 283.15, pressure: 1012, humidity: 81 },
    name: 'London',
};

// Destructure the `temp` from the `main` object and the `name` from the top-level object
// Destructure all
const {
    coord: { lon, lat },
    name: cityName,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    weather: [{ main, description }],
} = weatherResponse;

// Celsius to kelvin
const tempInCelsius = (temp-273.15).toFixed(2);

console.log(`\nThe current temperature is ${temp} in kelvin and ${tempInCelsius}°C.\nThe location is ${cityName}.`);

