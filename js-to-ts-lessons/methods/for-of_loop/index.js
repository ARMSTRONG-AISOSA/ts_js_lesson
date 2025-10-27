// The for...of loop is designed specifically to iterate over the values stored in iterable objects. Ex. Arrays, Strings, Maps, Sets, and NodeLists.
// The for...of loop executes a block of code for each item in an iterable object.

// Syntax:
//      for (const element of iterable) {
//        // Code to execute for the current 'element' value
//      }

// Arrays
// The loop directly provides the value of the array element in each iteration.

// Ex 1. Iterating Over Arrays (Recommended Method)
// Unlike for...in (which gives you the string keys/indices), for...of gives you the element values in the correct sequential order.

const colors = ['red', 'green', 'blue', 'brown', 'pink'];

let arrIndex = -1;
for (const colorElement of colors) {
    arrIndex++;
    console.log(`Index ${arrIndex}: ${colorElement}`);
}



// Ex 2. Iterating Over Strings
// Strings are iterable, so for...of can easily iterate over individual characters.

const sentence = "Jeff the land shark";

console.log(`\n`); // newline
let wordIndex = -1;
for (const character of sentence) {
    wordIndex++;
    if (character === " ") {
    console.log(`Index ${wordIndex}: White space`);
    } else {
    console.log(`Index ${wordIndex}: ${character}`);
    }

}


// Ex 3. Iterating Over Other Collections (Maps and Sets)
// for...of is the standard way to iterate over the values of built-in ES6 collections.

// Complex: Learn about Set & Map and do later


// Ex 4: Iterating an array and Index with entries()
// While for...of usually just gives you the value, you can use the array method .entries() to get both the index and the value, which is often needed when iterating over arrays.

const companyName = ["Netflix", "Google", "Microsoft", "Apple", "Amazon", "Nvidia"];

// .entries() returns an iterable of [index, value] pairs
console.log(`\n`); // newline
for (const [arrIndex, arrElement] of companyName.entries()) {
    console.log(`Element at index ${arrIndex} is: ${arrElement}`);
    
}



// Ex 5: Looping Over a Set (Uniqueness)
// Set objects are iterable and ensure that each value is unique. The for...of loop is the standard, clean way to retrieve all elements from a Set in the order they were inserted.
// check logs via html in browser
const tags = new Set();

// #1
console.log(`\n`); //newline
console.log(tags);

// #2
// .add: appends a new element with a specified value to the end of the Set.
tags.add('JavaScript');
console.log(`\n`); //newline
console.log(tags);

// #3
tags.add('Html');
tags.add('Css');
tags.add('JavaScript'); // Duplicate, will be ignored; case sensitive
console.log(`\n`); //newline
console.log(tags);

// #4
console.log(`\n`); //newline
console.log(`Unique Tags:`);
for (const tag of tags) {
    // Directly access the unique tag value
    console.log(`- ${tag}`);
}


// Ex 6: Iterating Over a Map (Key-Value Pairs)
// When you use for...of on a Map, it iterates over the map's entries, where each entry is an array of [key, value]. You can use array destructuring directly in the loop syntax for clean access.

const userRoles = new Map([
  ['alice@example.com', 'admin'],
  ['bob@example.com', 'editor'],
  ['charlie@example.com', 'viewer']
]);

// #1
console.log(`\n`); //newline
console.log(userRoles);

// #2
console.log(`\n`); //newline
console.log(`User Access List:`);
// Destructure the [key, value] array into separate variables
for (const [email, role] of userRoles) {
    console.log(`User with mail: ${email} has the role: ${role}`);
    
}

