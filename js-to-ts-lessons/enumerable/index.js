// A property in JavaScript isn’t just a key–value pair — it also has metadata, called property descriptors.
// One of those descriptors is "enumerable".

// Ps: Every property in JS has “descriptors”

// You can see them with Object.getOwnPropertyDescriptor().

const user1 = { name: "Alice" }

console.log(`\n Get the descriptor for a single key value stored as specified within an object`);
console.log(user1);
console.log(Object.getOwnPropertyDescriptor(user1, "name"));

// Output:

// {
//   value: "Alice",
//   writable: true,
//   enumerable: true,  // 👈 means it shows up in loops
//   configurable: true
// }

console.log(`\n Get the descriptor for all the key values stored within a single object`);
const user2 = { name: "John", gender: "male" };

console.log(user2);
console.log(Object.getOwnPropertyDescriptors(user2));



// Example 1: Enumerable vs Non-enumerable
console.log(`\nExample 1: Enumerable vs Non-enumerable`);

const user3 = { name: "Alice", id: 123 };
console.log(Object.getOwnPropertyDescriptors(user3));


// Add a property that’s NOT enumerable
console.log(`\nAdd a property that’s NOT enumerable`);
console.log({ gender: "female" });
Object.defineProperty(user3, "gender", {
    value: "female",
    enumerable: false,
    writable: true,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptors(user3));


// Make a property already present non enumerable
console.log(`\nMake a property already present non enumerable`);
console.log(Object.getOwnPropertyDescriptor(user3, "id"));
Object.defineProperty(user3, "id", {
    enumerable: false
});


// Add a property that’s enumerable
console.log(`\nAdd a property that’s enumerable`);
Object.defineProperty(user3, "age", {
    value: 23,
    enumerable: true,
    writable: true,
    configurable: true
});
console.log(Object.getOwnPropertyDescriptors(user3));

// Check status
console.log(`\nCheck status`);
console.log(Object.getOwnPropertyDescriptor(user3, "id"));
console.log(`\nCheck entire object status`);
console.log(Object.getOwnPropertyDescriptors(user3));


// Loop though all
console.log(`\nObject.keys(object) - Returns the names of the enumerable string properties and methods of an object.`);
console.log(Object.keys(user3)); // [ 'name', 'age' ]


console.log(`\nAnother method usinf for...in`);
for (const key in user3) {
    console.log(key);
}
// Output:
//      name
//      age

console.log(`\nTo show "id" & "gender" still exists, just hidden in loops`);
console.log(user3.gender);
console.log(user3.id);

// "id" & "gender" still exists, just hidden in loops, even though they don’t appear in loops or Object.keys(), because enumerable: false.



// 🧭 Example 2: Built-in JS properties
// Many built-in object properties (like toString) are non-enumerable, so you don’t see them when looping over an object.

const obj = {};

console.log(`\nBuilt-in JS properties`);
console.log(obj);
console.log("toString" in obj); // true — it exists
console.log(Object.keys(obj));  // [] — not enumerable
console.log(obj.toString); // To display the property

// That’s why when you use for...in, you only get the properties you (or code) added that are enumerable, not all the internal methods of Object.

// 🧩 TL;DR
// Enumerable = visible in loops.
// Non-enumerable = exists, but hidden from loops.
