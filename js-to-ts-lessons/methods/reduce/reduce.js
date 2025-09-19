// ==================================  BroCoce
// .reduce() = reduce the elements of an array to a single value

// Example 1

const costs = [5, 10.05, 15.2, 20, 25];

const totalV1 = costs.reduce(sumV1);
const totalV2 = costs.reduce(sumV2);

// Version 1
console.log("\nThe total value of version 1:");
console.log(`${totalV1.toFixed(2)}`);

// Version 2
console.log("\nThe total value of version 2:");
console.log(`${totalV2.toFixed(2)}`);


// Declared Sum Function v1
function sumV1(accumalator, element) {
    return accumalator + element;
}


// Declared Sum Function v2
// accumulator: starts at zero
// The first next value starts at array index 0; value 5
function sumV2(previousValue, nextValue) {
    return previousValue + nextValue;
}


// =============== Find Max & Min Num
const grades = [55, 45, 73, 68, 80, 95, 89];

const maxNum = grades.reduce(getMax);
const minNum = grades.reduce(getMin);


console.log("\nThe max number(grade) in an array:");
console.log(maxNum);

console.log("\nThe min number(grade) in an array:");
console.log(minNum);


// Get Maximum Number
function getMax(accumalator, element) {
    return Math.max(accumalator, element);
}

// Get Minimum Number
function getMin(accumalator, element) {
    return Math.min(accumalator, element);
}



// ================================== Gemini
// Example 1.1: Summing All Numbers in an Array
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // initialValue is 0

console.log("\nSum of array(Function Expression Method): ");
console.log(sum);

// Example 1.2: Multiply All Numbers in an Array
// Multiply
const multiply = numbers.reduce(getMultiply);

function getMultiply(accumulator, currentValue) {
    return accumulator * currentValue;
}

console.log("\nMultiply array values: ");
console.log(multiply);




// Example 2.1: Flattening a Nested Array
// Perfect for transforming one data structure into another. Here, we'll use it to flatten an array of arrays into a single array.

const nestedArrayAlpha = [
    ['A', 'B'],
    ['C', 'D'],
    ['E', 'F'],
    ['G', 'H'],
];

const flattenedArray1 = nestedArrayAlpha.reduce(flattenArrayDec);

function flattenArrayDec(accumulator, currentValue) {
    return [...accumulator, ...currentValue];
}


console.log("\nFlattened alphabetical array: ");
console.log(flattenedArray1);


// Example 2.2: Flattening a Nested Array
const nestedArrayNum = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
];

const flattenedArray2 = nestedArrayNum.reduce((accumalator, currentValue) => {
    return accumalator.concat(currentValue);
}, []); // initialValue is an empty array

console.log(flattenedArray2);


// Check notes2.txt
// Example 3.1: Counting Item Frequencies
const fruits = ['apple', 'grape', 'berry', 'orange', 'berry', 'grape', 'apple', 'banana', 'orange', 'apple', 'berry', 'grape'];


const fruitCount = fruits.reduce((accumulator, currentValue) => {
    // accumulator will be an object that stores fruit names as keys and their counts as values.
    // currentValue is the current fruit in the array during the iteration.

    // The if statement checks if a property with the key 'apple' already exists on the accumulator object. Since the accumulator is an empty object {} at first, accumulator['apple'] is undefined, which is a "falsy" value. So, the if condition is false.

    // if the fruit is(true) already a key, increment it's count
    if (accumulator[currentValue]) {
        // (accumulator['apple'])
        // If currentValue = 'apple' and accumulator['apple'] already exists, just add +1 to the key(apple) : value
        accumulator[currentValue] = accumulator[currentValue] + 1;
    } else {
        // Otherwise, create the key and set its count to 1
        // if the fruit hasn’t been seen yet, create it with an initial count of 1
        accumulator[currentValue] = 1;
    }
    // console.log(accumulator);
    return accumulator;
}, {}); // initialValue of accumulator is an empty object

console.log("\nFruit Count: ");
console.log(fruitCount);



// Example 3.2: Counting Item Frequencies
const foods = ['rice', 'beans', 'rice', 'yam', 'rice', 'beans', 'yam', 'yam', 'cocoyam', 'cocoyam', 'beans', 'rice'];

const foodCount = foods.reduce((accumulator, currentValue) => {

    // if key exist
    if (accumulator[currentValue]) {
        // { key : value + 1 }
        accumulator[currentValue] = accumulator[currentValue] + 1;
    } else {
        // add key and assign value of 1
        // { key : value }
        accumulator[currentValue] = 1;
    }

    return accumulator;
}, {}); // initialValue of accumulator = {}

console.log("\nFood Count: ");
console.log(foodCount);


// Example 4.1: Finding the Maximum Value in an Array
const figures = [11, 31, 24, 18, 4, 29, 7];

const maxFigure = figures.reduce((accumalator, currentValue) => {
    // Return the larger of the two values
    return Math.max(accumalator, currentValue);
}, -Infinity); // A very small initial value ensures the first number is chosen

console.log("\nThe max figure of figure array: ");
console.log(maxFigure);



// Example 4.2: Finding the Minimum Value in an Array
const minFigure = figures.reduce((accumalator, currentValue) => {
    // Return the smaller of the two values
    return Math.min(accumalator, currentValue);
}, +Infinity); // A very small initial value ensures the first number is chosen

console.log("\nThe min figure of figure array: ");
console.log(minFigure);


// Example 5.1: Creating a Searchable Object from an Array of Objects
const users = [
    { id: 101, name: 'John Doe' },
    { id: 102, name: 'Jane Smith' },
    { id: 103, name: 'Peter Jones' }
];

const userById = users.reduce((accumalator, currentValue) => {
    //fed to accumalator
    // '101': { id: 101, name: 'John Doe' }
    accumalator[currentValue.id] = currentValue;

    // Cycle
    // console.log("\nUser by id");
    // console.log(accumalator);

    return accumalator;
}, {});

console.log("\nUser by id");
console.log(userById);


// Example 5.2: Creating a Searchable Object from an Array of Objects
const users2 = [
    { id: 101, name: 'John Doe' },
    { id: 102, name: 'Jane Smith' },
    { id: 103, name: 'Peter Jones' },
    { id: 104, name: 'Tony Ja' },
    { id: 105, name: 'Ben Grimm' }
];


const userById2 = users2.reduce((accumalator, currentValue) => {

    accumalator[currentValue.id - 100] = currentValue;
    return accumalator;
}, {});

console.log("\nUser by id 2:");
console.log(userById2);


// Example 6.1: Grouping Items by a Property

const transactions = [
    { amount: 50, date: '2025-01-15' },
    { amount: 120, date: '2025-02-05' },
    { amount: 75, date: '2025-01-22' },
    { amount: 200, date: '2025-02-18' },
    { amount: 95, date: '2025-01-28' },
    { amount: 300, date: '2025-02-25' },
    { amount: 45, date: '2025-03-01' },
    { amount: 180, date: '2025-03-05' },
    { amount: 60, date: '2025-01-10' },
    { amount: 150, date: '2025-02-12' },
    { amount: 220, date: '2025-03-12' },
    { amount: 90, date: '2025-03-15' }
];

const transactionByMonth = transactions.reduce((accumalator, currentValue) => {

    // Extract the month from the date string
    const month = currentValue.date.substring(5, 7);

     // If the month key doesn't exist, create it with an empty array
    if (!accumalator[month]) {
        accumalator[month] = [];
    }

    // Push the current transaction into the corresponding month's array
    accumalator[month].push(currentValue);

    return accumalator;
}, {});
console.log("Transaction sorted by months");
console.log(transactionByMonth);
