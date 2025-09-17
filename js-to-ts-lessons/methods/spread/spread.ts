// The spread syntax, denoted by three dots (...), is a powerful and versatile feature introduced in ECMAScript 2015 (ES6).

// The primary use cases for the spread syntax are to create copies of arrays, combine arrays, and pass arguments to a function.


// 1. Spreading Arrays
// Making a shallow copy of an array

const originalValues: number[] = [2, 4, 6, 8];

// // Use spread syntax to create a copy
const copiedValues: number[] = [...originalValues];

// Modifying the copied array will not affect the original
copiedValues.push(10);
copiedValues.push(12);
copiedValues.push(14);

console.log("The original values:");
console.log(originalValues);

console.log("\nThe copied and modified values:");
console.log(copiedValues);



// Combining arrays
const fruits: string[] = [ 'banana', 'orange', 'blueberry', 'avocado', 'mango'];
const vegetables: string[] = [ 'spinach', 'cauliflower', 'pumpkin', 'lettuce' ];

// Combine the two arrays into a new array
const plantProduce: string[] = [ ...fruits, ...vegetables ];

console.log("\nPlant produce of combined fruits and vegetables arrays:");
console.log(plantProduce);





// 2. Spreading Objects
interface User {
    name: string;
    age: number;
}

interface UpdatedUser extends User {
    city: string;
}

const user:User = {name: 'Ben', age: 30};
console.log(user);

// Udating an Object
const updatedUser: UpdatedUser = {...user, city: "Bayelsa"};
console.log("\nUpdated object:");
console.log(updatedUser);

// You can also use it to overwrite properties
const userWithNewCity: UpdatedUser = {...updatedUser, city: "Benin City"};
console.log("\nOverwritten object:");
console.log(userWithNewCity);



// 3. Spreading Function Arguments
interface Sum {
    (a: number, b: number, c: number, d: number): number;
}
const numbers: [number, number, number, number] = [1, 2, 3, 4]; // tuple for exactly 4 numbers

// Changed to function expression
const sum: Sum = (a, b, c, d) => {
    return a + b + c + d;
}

const totalNumber: number = sum(...numbers);
console.log("\nTotal of the spread numbers:");
console.log(totalNumber);

