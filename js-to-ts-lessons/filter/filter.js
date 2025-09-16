// The filter() method calls a function for each element in an array. This function, called a "callback function," must return either true or false.
// Syntax: array.filter(callbackFunction)

// Example: Filtering an Array of Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// Odd Numbers
const oddNumbers = numbers.filter((number) => (number % 2 === 1));
console.log(oddNumbers);


// Even Numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(`\nThe even numbers ${evenNumbers}.\n`);

// Dvisible by 3 (Numbers)
const threeDivisibleNumbers = numbers.filter(number => number % 3 === 0);
console.log(`\nThe numbers are divisible by 3. ${threeDivisibleNumbers}.\n`);




// Example: Filtering an Array of Objects
const products = [
    { name: 'Laptop', inStock: false },
    { name: 'Mouse', inStock: true },
    { name: 'Keyboard', inStock: true },
    { name: 'Monitor', inStock: false }
];

const availableProducts = products.filter((product) => (product.inStock === true));

console.log(`The available products are:`);
console.log(availableProducts);

// ---------------------------------------------------------

const inventories = [
    { id: 1, name: 'Laptop', category: 'Computers', price: 850, inStock: false },
    { id: 2, name: 'Mouse', category: 'Accessories', price: 25, inStock: true },
    { id: 3, name: 'Keyboard', category: 'Accessories', price: 45, inStock: true },
    { id: 4, name: 'Monitor', category: 'Displays', price: 200, inStock: false },
    { id: 5, name: 'Printer', category: 'Office', price: 120, inStock: true },
    { id: 6, name: 'Webcam', category: 'Accessories', price: 60, inStock: false },
    { id: 7, name: 'Headphones', category: 'Audio', price: 80, inStock: true },
    { id: 8, name: 'Speakers', category: 'Audio', price: 150, inStock: true },
    { id: 9, name: 'External Hard Drive', category: 'Storage', price: 100, inStock: false },
    { id: 10, name: 'USB Flash Drive', category: 'Storage', price: 15, inStock: true },
    { id: 11, name: 'Graphics Tablet', category: 'Creative', price: 250, inStock: false },
    { id: 12, name: 'Microphone', category: 'Audio', price: 90, inStock: true }
];

// Filter for unavailable items
const emptyStock = inventories.filter((inventory) => (inventory.inStock === false));
console.log(`\nThe unavailable products are:`);
console.log(emptyStock);

// Empty stock array (Loop)
const emptyStockNameI = [];
for (let i = 0; i < emptyStock.length; i++) {
    emptyStockNameI.push(emptyStock[i].name); // ✅ Fix: use [i]
}
console.log("Unavailable items array (loop solution):");
console.log(emptyStockNameI);

// Empty stock array (Map Alternative)
const emptyStockNameII = emptyStock.map((emptyStockItem) => (emptyStockItem.name));
console.log("Unavailable items array (Map solution):");
console.log(emptyStockNameII);

// Function to filter(get) all products in stock
function getInStock(products) {
    const availableProducts = products.filter((product) => (product.inStock === true));
    return availableProducts;
}
console.log("\nAvailable inventory items Obj. (function solution):");
console.log(getInStock(inventories));


// Finding Strings That Match a Pattern
const names = [
    'Alice', 'Bob', 'Charlie', 'David', 'Jane', 'John',
    'Michael', 'Sarah', 'Daniel', 'Emma', 'Lucas', 'Sophia',
    'Ethan', 'Olivia', 'Matthew', 'Ava', 'James', 'Mia',
    'Alexander', 'Isabella', 'Henry', 'Amelia', 'Benjamin', 'Harper',
    'Samuel', 'Ella', 'Joseph', 'Grace', 'William', 'Chloe'
];

// Filter for names that start with a letter J
const jNames = names.filter((name) => (name.toLowerCase().startsWith("j")));
console.log("\nNames strting with 'J':");
console.log(jNames);


// Filtering an Array of Objects Based on Multiple Conditions
const students = [
    { id: 1, name: 'Peter', year: 'freshman', grade: 85, gender: 'male', field: 'science' },
    { id: 2, name: 'Sally', year: 'senior', grade: 92, gender: 'female', field: 'art' },
    { id: 3, name: 'Mike', year: 'junior', grade: 78, gender: 'male', field: 'social science' },
    { id: 4, name: 'Sarah', year: 'senior', grade: 88, gender: 'female', field: 'science' },
    { id: 5, name: 'James', year: 'sophomore', grade: 81, gender: 'male', field: 'social science' },
    { id: 6, name: 'Emily', year: 'freshman', grade: 95, gender: 'female', field: 'art' },
    { id: 7, name: 'David', year: 'junior', grade: 72, gender: 'male', field: 'science' },
    { id: 8, name: 'Anna', year: 'sophomore', grade: 89, gender: 'female', field: 'art' },
    { id: 9, name: 'John', year: 'senior', grade: 76, gender: 'male', field: 'social science' },
    { id: 10, name: 'Rachel', year: 'freshman', grade: 90, gender: 'female', field: 'science' },
    { id: 11, name: 'Chris', year: 'junior', grade: 83, gender: 'male', field: 'art' },
    { id: 12, name: 'Olivia', year: 'sophomore', grade: 87, gender: 'female', field: 'science' },
    { id: 13, name: 'Daniel', year: 'senior', grade: 91, gender: 'male', field: 'social science' },
    { id: 14, name: 'Grace', year: 'junior', grade: 79, gender: 'female', field: 'art' },
    { id: 15, name: 'Ethan', year: 'freshman', grade: 84, gender: 'male', field: 'science' },
    { id: 16, name: 'Sophia', year: 'sophomore', grade: 93, gender: 'female', field: 'social science' },
    { id: 17, name: 'Andrew', year: 'junior', grade: 77, gender: 'male', field: 'science' },
    { id: 18, name: 'Mia', year: 'senior', grade: 96, gender: 'female', field: 'art' },
    { id: 19, name: 'Henry', year: 'freshman', grade: 82, gender: 'male', field: 'social science' },
    { id: 20, name: 'Chloe', year: 'sophomore', grade: 88, gender: 'female', field: 'science' }
];


// female students with +90 score
const female90Score = students.filter((student) => (student.gender.toLowerCase() === 'female' && student.grade >= 90));
console.log("Female students with +90 scores");
console.log(female90Score);

// All science students male
const maleScienceStudents = students.filter((student) => (student.gender === 'male' && student.field.toLowerCase() === 'science'));
console.log("\nMale students in the science field:");
console.log(maleScienceStudents);

// Removing "Falsy" Values from an Array
const mixedArray = [1, 'hello', 0, '', null, 'world', undefined, 5, false];

// The callback function `Boolean` checks the truthiness of each value.
const cleanedArray = mixedArray.filter(Boolean);
console.log("\nCleaned array:");
console.log(cleanedArray);


