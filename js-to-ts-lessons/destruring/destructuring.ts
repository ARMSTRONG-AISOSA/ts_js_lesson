// Destructuring in JavaScript is a powerful feature that allows you to extract values from arrays or properties from objects into distinct variables. It provides a more concise and readable way to access and use data.

// ======================================= Array Destructuring
// Array destructuring lets you unpack values from arrays directly into variables.
// Ex 1.1
let cars: string[] = ["Toyota", "Mercedes", "Lamborgini"];
let [firstCar, secondCar, thirdCar]: string[] = cars;
console.log("\nThe third car in the array is a: ");
console.log(thirdCar);


console.log("\nThe first and second car in the array is a: ");
console.log(`The first car in the array is a ${firstCar} and second car in the array is a ${secondCar}.`);



// Skipping values: Use commas to skip elements you don't want to extract.
let colors: string[] = ["brown", "indigo", "grey", "orange"];
let [firstColor, , thirdColor]: string[] = colors;
console.log("\nThe third color in the array is a: ");
console.log(thirdColor);


// Rest parameter: Use the spread syntax (...) to collect the remaining elements into a new array.
let values: number[] = [5, 10, 15, 20, 25, 30];
let [firstValue, SecondValue, ...remainingValue]: number[] = values;
console.log("\nThe second value in the array is: ");
console.log(SecondValue);

console.log("\nThe remaining value in the array are: ");
console.log(remainingValue);


// Default values: Assign a default value to a variable in case the array element is undefined.
let veggies: string[] = ["carrot", "cucumber"];
let [mainVeggies, secondaryVeggie, tertiaryVeggies = "tomato"]: string[] = veggies;
console.log("\nThe tertiary veggie is: ");
console.log(tertiaryVeggies);





// ======================================= Object Destructuring
// Object destructuring extracts properties from objects into variables. Unlike array destructuring, the order doesn't matter; you match the variable name on the left with the property key on the right.

interface Individual {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    state: string;
}

let individual1: Individual = {
    firstName: "Chris",
    lastName: "Fergurson",
    age: 28,
    gender: "Male",
    state: "Texas",
};
let { lastName, firstName }: Individual = individual1;
console.log("\nThe fullname the individual is: ");
console.log(`${firstName} ${lastName}`);


// Aliases: Rename a destructured property to a different variable name using a colon (:).
let individual2: Individual = {
    firstName: "Ben",
    lastName: "Grimm",
    age: 31,
    gender: "Male",
    state: "Texas",
}
let { age: personAge, lastName: personLastName, firstName: personFirstName }: Individual = individual2;
console.log(`\nHis fullname ${personFirstName} ${personLastName} and age is ${personAge}.`);


// Default values: Assign a default value if a property is not found on the object.

interface Person {
    name: string;
    country: string;
    city?: string; //optional
}

let person1: Person = {
    name: "Jessica Jones",
    country: "USA",
    city: "New York"
};
let person2: Person = {
    name: "Luna Snow",
    country: "Korea"
};

// city default value is set to unknown
function personInfo({ name, country, city = "Unknown" }: Person) {
    console.log(`\nPerson name is ${name}, country from is ${country}, city form is ${city}.`);
};
personInfo(person1);
personInfo(person2);


// Rest parameter: Use the spread syntax (...) to collect the remaining properties into a new object.
let person3: Person = {
    name: "Frank Castle",
    country: "USA",
    city: "New York"
}
let { name: fullName, ...restOfPersonData }: Person = person3;
console.log(`\nThe remaining info on ${fullName} is: `);
console.log(restOfPersonData);






// ======================================= Object Destructuring
// Function Parameters with Object Destructuring
// It simplifies passing and receiving multiple values in a function. Instead of accessing properties with data.name, you can directly use the property names as variables.

interface UserData {
    name: string;
    age?: number;
    weight: number;
    height: number;
}

function calculateBMI({ weight, height, name }: UserData) {
    const bmi = weight / (height * height);
    console.log(`\n${name}'s bmi is ${weight}.`);
}

const userData1: UserData = {
    name: 'John Doe',
    age: 30,
    weight: 70, // in kilograms
    height: 1.75, // in meters
};
const userData2: UserData = {
    name: 'Jane Doe',
    age: 33,
    weight: 68, // in kilograms
    height: 1.65, // in meters
};

calculateBMI(userData1);
calculateBMI(userData2);



// Swapping variables: You can swap the values of two variables without a temporary (third) variable.
let a: string = "Hello";
let b: string = "World";

// Ex. 1
[a, b] = [b as string, a as string];
console.log("\nThe swapped values are:");
console.log(a);
console.log(b);

const colors2: string[] = ["red", "green", "white", "black", "blue", "purple"];
console.log("\nThe color array:");
console.log(colors2);

// Use a Type Assertion in TypeScript
// If you are absolutely certain that the array will always have the required number of elements (at least two elements in this case), you can use a type assertion with the as keyword to tell TypeScript to trust you. This is a good option when you know the array's structure is guaranteed.
// Ex. 2
[colors2[0], colors2[1]] = [colors2[1] as string, colors2[0] as string];
console.log("\nThe color array with position(index) 0 and 1 switched:");
console.log(colors2);


// Ex. 3
[colors2[2], colors2[3], colors2[4]] = [colors2[4] as string, colors2[2] as string, colors2[3] as string];
console.log("\nThe color array with position(index) 2, 3 and 4 switched around:");
console.log(colors2);



// Pulling Data from an API Response
// It's incredibly useful for pulling specific fields from a large JSON object returned by an API, making your code cleaner and easier to read.
// When you receive a large JSON object from an API, you often only need a few specific fields. Destructuring allows you to extract those fields directly into variables, ignoring the rest. This makes the code much more readable and less prone to errors.

interface WeatherResponse {
    coord: {
        lon: number;
        lat: number;
    };
    weather: [{
        main: string;
        description: string;
    }];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    name: string;
}

const weatherResponse: WeatherResponse = {
    coord: { lon: -0.31, lat: 51.51 },
    weather: [{ main: 'Clouds', description: 'overcast clouds' }],
    main: { temp: 280.32, feels_like: 279.13, temp_min: 2771.15, temp_max: 283.15, pressure: 1012, humidity: 81 },
    name: 'London',
};

// Destructure all of them
// Note: You can choose to destructure specific element
const {
    coord: { lon, lat },
    name: cityName,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    weather: [{ main, description }],
}: WeatherResponse = weatherResponse;

// Celsius to kelvin
const tempInCelsius: number = Number((temp - 273.15).toFixed(2));

console.log(`\nThe current temperature is ${temp} in kelvin and ${tempInCelsius}°C.\nThe location is ${cityName}.`);


