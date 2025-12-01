// The spread syntax, denoted by three dots (...), is a powerful and versatile feature introduced in ECMAScript 2015 (ES6).

// The primary use cases for the spread syntax are to create copies of arrays, combine arrays, and pass arguments to a function.


// 1. Spreading Arrays
// Making a shallow copy of an array

const originalValues = [2, 4, 6, 8];

// // Use spread syntax to create a copy
const copiedValues = [...originalValues];

// Modifying the copied array will not affect the original
copiedValues.push(10);
copiedValues.push(12);
copiedValues.push(14);

console.log("The original values:");
console.log(originalValues);

console.log("\nThe copied and modified values:");
console.log(copiedValues);



// Combining arrays
const fruits = [ 'banana', 'orange', 'blueberry', 'avocado', 'mango'];
const vegetables = [ 'spinach', 'cauliflower', 'pumpkin', 'lettuce' ];

// Combine the two arrays into a new array
const plantProduce = [ ...fruits, ...vegetables ];

console.log("\nPlant produce of combined fruits and vegetables arrays:");
console.log(plantProduce);





// 2. Spreading Objects
const user = {name: 'Ben', age: 30};
console.log(user);

// Udating an Object
const updatedUser = {...user, city: "Bayelsa"};
console.log("\nUpdated object:");
console.log(updatedUser);

// You can also use it to overwrite properties
const userWithNewCity = {...updatedUser, city: "Benin City"};
console.log("\nOverwritten object:");
console.log(userWithNewCity);



// 3. Spreading Function Arguments

const numbers = [1, 2, 3, 4];

function sum (a, b, c, d) {
    return a + b + c + d;
}

const totalNumber = sum(...numbers);
console.log("\nTotal of the spread numbers:");
console.log(totalNumber);

