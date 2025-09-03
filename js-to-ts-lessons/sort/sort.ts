// Check @ notes.txt
// Sorting

// Characters
const strCharArr1: string[] = ['d', 'b', 'e', 'a', 'c'];
strCharArr1.sort();
console.log(strCharArr1);

// Words and letter cases
const strWordArr1: string[] = ['Legend', 'apple', 'egg', 'Applepie', 'Egg'];
strWordArr1.sort();
console.log(strWordArr1);

// Numbers --> Check @ notes.txt
const numArr1: number[] = [7, 78, 31, 3, 19, 91];
numArr1.sort();
console.log(numArr1);

// Numbers accending
const numArr2: number[] = [7, 78, 31, 3, 19, 91];
numArr2.sort((a, b) => a - b)
console.log(numArr2);

// Numbers decending
const numArr3: number[] = [7, 78, 31, 3, 19, 91];
numArr3.sort((a, b) => b - a)
console.log(numArr3);
console.log("\n\n\n");

// User interface
interface User {
    name: string;
    age: number;
}

// Array Objects
const userObjs: User[] = [
    { name: "John", age: 21},
    { name: "Jane", age: 30},
    { name: "Doakes", age: 27},
    { name: "Xavier", age: 24},
];

// Unsorted
console.log(userObjs);

// Age accending sort
userObjs.sort((a: User, b: User) => a.age - b.age);
console.log(userObjs);

// Age decending sort
userObjs.sort((a: User, b: User) => b.age - a.age);
console.log(userObjs);

// Check @ Index 3.0
// Name accending sort
userObjs.sort((a: User, b: User) => a.name.localeCompare(b.name));
console.log(userObjs);

// Name decending sort
userObjs.sort((a: User, b: User) => b.name.localeCompare(a.name));
console.log(userObjs);

