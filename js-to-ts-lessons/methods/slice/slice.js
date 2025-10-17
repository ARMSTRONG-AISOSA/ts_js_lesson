// Syntax: arr.slice(start, end);

// ========================= Arrays
const fruits = ['apple', 'banana', 'mango', 'orange', 'grape'];

// Slicing from index 1 to 3 (exclusive)
const someFruits = fruits.slice(1, 4);
console.log("\nsomeFruits");
console.log(someFruits);


// Slicing from the beginning to index 2 (exclusive)
const first3Fruits = fruits.slice(0, 3);
console.log("\nFirst 3 fruits");
console.log(first3Fruits);


// Slicing from index 2 to end (exclusive)
const remainingFruits = fruits.splice(2);
console.log("\nThe remaining fruits");
console.log(remainingFruits);


// Using negative indices
const lastTwoFruits = fruits.slice(-2);
console.log("\nThe last two fruits");
console.log(lastTwoFruits);

// Getting the last few characters: 
// A negative start index is useful for getting a portion from the end of a string.

const fileName = 'document.pdf';
const extension = fileName.slice(-3);
console.log(extension);

const fileCollection = ['document.txt', 'document.pdf', 'document.doc', 'document.docx', 'document.csv', 'document.xlsx', 'document.html', 'document.css', 'document.js'];

// Method 1: loop
const fileExtentions1 = [];

for (let i = 0; i < fileCollection.length; i++) {
    const filename = fileCollection[i];
    const extension = filename.slice(filename.lastIndexOf('.') + 1);
    fileExtentions1.push(extension);
}
console.log("\nLoop Method");
console.log(fileExtentions1);


// Method 2: Map
const fileExtentions2 = fileCollection.map((filename) => {
    return filename.slice(filename.lastIndexOf('.') + 1);
});
console.log("\nMap Method");
console.log(fileExtentions2);


// Extracting all elements: arr.slice() with no arguments returns a shallow copy of the entire array.
const numbers = [1, 2, 3, 4, 5, 6];
const copyOfNumbers = numbers.slice();
console.log("\nCopied Numbers:");
console.log(copyOfNumbers);



// ========================= Strings
// Syntax: str.slice(start, end)

const sentence = 'The quick brown fox';

// Slicing from index 4 to 9 (exclusive)
const part1 = sentence.slice(4, 9);
console.log("\nThe first part:");
console.log(part1);

// Slicing from index 10 to the end
const part2 = sentence.slice(10);
console.log("\nThe second part:");
console.log(part2);

// Using a negative index
const lastWord = sentence.slice(-3);
console.log("\nThe last word:");
console.log(lastWord);