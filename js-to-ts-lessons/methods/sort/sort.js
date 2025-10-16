// Check @ notes.txt
// Sorting

// Characters
const strCharArr1 = ['d', 'b', 'e', 'a', 'c'];
strCharArr1.sort();
console.log(strCharArr1);

// Words and letter cases
const strWordArr1 = ['Legend', 'apple', 'egg', 'Applepie', 'Egg'];
strWordArr1.sort();
console.log(strWordArr1);

// Numbers --> Check @ notes.txt
const numArr1 = [7, 78, 31, 3, 19, 91];
numArr1.sort();
console.log(numArr1);

// Numbers accending
const numArr2 = [7, 78, 31, 3, 19, 91];
numArr2.sort((a, b) => a - b)
console.log(numArr2);

// Numbers descending
const numArr3 = [7, 78, 31, 3, 19, 91];
numArr3.sort((a, b) => b - a)
console.log(numArr3);
console.log("\n\n\n");



// Array Objects
const userObjs = [
    { name: "John", age: 21},
    { name: "Jane", age: 30},
    { name: "Doakes", age: 27},
    { name: "Xavier", age: 24},
];

// Unsorted
console.log(userObjs);

// Age accending sort
userObjs.sort((a, b) => a.age - b.age);
console.log(userObjs);

// Age descending sort
userObjs.sort((a, b) => b.age - a.age);
console.log(userObjs);

// Check @ Index 3.0
// Name accending sort
userObjs.sort((a, b) => a.name.localeCompare(b.name));
console.log(userObjs);

// Name descending sort
userObjs.sort((a, b) => b.name.localeCompare(a.name));
console.log(userObjs);

