// ==================================  BroCoce
// .reduce() = reduce the elements of an array to a single value

// Example 1
const costs: number[] = [5, 10.05, 15.2, 20, 25];

const totalV1: number = costs.reduce(sumV1);
const totalV2: number = costs.reduce(sumV2);

// Version 1
console.log("\nThe total value of version 1:");
console.log(`${totalV1.toFixed(2)}`);

// Version 2
console.log("\nThe total value of version 2:");
console.log(`${totalV2.toFixed(2)}`);


// Declared Sum Function v1
function sumV1(accumalator: number, element: number): number {
    return accumalator + element;
}


// Declared Sum Function v2
// accumulator: starts at zero
// The first next value starts at array index 0; value 5
function sumV2(previousValue: number, nextValue: number): number {
    return previousValue + nextValue;
}


// =============== Find Max & Min Num
const grades: number[] = [55, 45, 73, 68, 80, 95, 89];

const maxNum: number = grades.reduce(getMax);
const minNum: number = grades.reduce(getMin);


console.log("\nThe max number(grade) in an array:");
console.log(maxNum);

console.log("\nThe min number(grade) in an array:");
console.log(minNum);


// Get Maximum Number
function getMax(accumalator: number, element: number): number {
    return Math.max(accumalator, element);
}

// Get Minimum Number
function getMin(accumalator: number, element: number): number {
    return Math.min(accumalator, element);
}



// ================================== Gemini
// Example 1.1: Summing All Numbers in an Array
const numbers: number[] = [1, 2, 3, 4];

const sum: number = numbers.reduce((accumulator: number, currentValue: number): number => {
    return accumulator + currentValue;
}, 0); // initialValue is 0

console.log("\nSum of array(Function Expression Method): ");
console.log(sum);

// Example 1.2: Multiply All Numbers in an Array
// Multiply
const multiply: number = numbers.reduce(getMultiply);

function getMultiply(accumulator: number, currentValue: number): number {
    return accumulator * currentValue;
}

console.log("\nMultiply array values: ");
console.log(multiply);




// Example 2.1: Flattening a Nested Array
// Perfect for transforming one data structure into another. Here, we'll use it to flatten an array of arrays into a single array.

const nestedArrayAlpha: string[][] = [
    ['A', 'B'],
    ['C', 'D'],
    ['E', 'F'],
    ['G', 'H'],
];

const flattenedArray1: string[] = nestedArrayAlpha.reduce(flattenArrayDec);

function flattenArrayDec(accumulator: string[], currentValue: string[]): string[] {
    return [...accumulator, ...currentValue];
}


console.log("\nFlattened alphabetical array: ");
console.log(flattenedArray1);


// Example 2.2: Flattening a Nested Array
const nestedArrayNum: number[][] = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
];

const flattenedArray2: number[] = nestedArrayNum.reduce((accumalator: number[], currentValue: number[]): number[] => {
    return accumalator.concat(currentValue);
}, []); // initialValue is an empty array

console.log(flattenedArray2);


// Check notes2.txt
// Example 3.1: Counting Item Frequencies
const fruits: string[] = ['apple', 'grape', 'berry', 'orange', 'berry', 'grape', 'apple', 'banana', 'orange', 'apple', 'berry', 'grape'];

type FruitCount = { [key: string]: number };


const fruitCount: FruitCount = fruits.reduce((accumulator: FruitCount, currentValue: string): FruitCount => {
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
}, {} as FruitCount); // initialValue of accumulator is an empty object

console.log("\nFruit Count: ");
console.log(fruitCount);



// Example 3.2: Counting Item Frequencies
const foods: string[] = ['rice', 'beans', 'rice', 'yam', 'rice', 'beans', 'yam', 'yam', 'cocoyam', 'cocoyam', 'beans', 'rice'];

type FoodCount = {
    [key: string]: number
}

const foodCount: FoodCount = foods.reduce((accumulator: FoodCount, currentValue: string) => {

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
const figures: number[] = [11, 31, 24, 18, 4, 29, 7];

const maxFigure: number = figures.reduce((accumalator: number, currentValue: number) => {
    // Return the larger of the two values
    return Math.max(accumalator, currentValue);
}, -Infinity); // A very small initial value ensures the first number is chosen

console.log("\nThe max figure of figure array: ");
console.log(maxFigure);



// Example 4.2: Finding the Minimum Value in an Array
const minFigure: number = figures.reduce((accumalator: number, currentValue: number) => {
    // Return the smaller of the two values
    return Math.min(accumalator, currentValue);
}, +Infinity); // A very small initial value ensures the first number is chosen

console.log("\nThe min figure of figure array: ");
console.log(minFigure);


// Example 5.1: Creating a Searchable Object from an Array of Objects
interface User {
    id: number;
    name: string;
}

const users: User[] = [
    { id: 101, name: 'John Doe' },
    { id: 102, name: 'Jane Smith' },
    { id: 103, name: 'Peter Jones' }
];

type UserById = {
    [id: number]: User
}

const userById = users.reduce((accumalator: UserById, currentValue: User) => {
    //fed to accumalator
    // '101': { id: 101, name: 'John Doe' }
    accumalator[currentValue.id] = currentValue;

    // Cycle
    // console.log("\nUser by id");
    // console.log(accumalator);

    return accumalator;
}, {} as UserById); // start with empty object, casted to UserById

console.log("\nUser by id");
console.log(userById);


// Example 5.2: Creating a Searchable Object from an Array of Objects

interface User2 {
    id: number;
    name: string;
}

const users2:User2[] = [
    { id: 101, name: 'John Doe' },
    { id: 102, name: 'Jane Smith' },
    { id: 103, name: 'Peter Jones' },
    { id: 104, name: 'Tony Ja' },
    { id: 105, name: 'Ben Grimm' }
];

type UserById2 = {
    [id: number]: User2
}

const userById2: UserById = users2.reduce((accumalator: UserById2, currentValue: User2) => {

    accumalator[currentValue.id - 100] = currentValue;
    return accumalator;
}, {});

console.log("\nUser by id 2:");
console.log(userById2);


// Example 6.1: Grouping Items by a Property
interface Transaction {
    amount: number;
    date: string;
}

const transactions: Transaction[] = [
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

type TransactionByMonth = {
    [month: string]: Transaction[]
}

const transactionByMonth: TransactionByMonth = transactions.reduce((accumalator: TransactionByMonth, currentValue: Transaction) => {

    // Extract the month from the date string
    const month: string = currentValue.date.substring(5, 7);

    // If the month key doesn't exist, create it with an empty array
    if (!accumalator[month]) {
        accumalator[month] = [];
    }

    // Push the current transaction into the corresponding month's array
    accumalator[month].push(currentValue);

    return accumalator;
}, {} as TransactionByMonth); // start with empty object, casted to TransactionByMonth
console.log("Transaction sorted by months");
console.log(transactionByMonth);
