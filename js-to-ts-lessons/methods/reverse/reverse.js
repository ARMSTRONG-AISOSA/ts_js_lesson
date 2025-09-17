// Check @ notes.txt
// remember that it modifies the original array

// ========================== Reverse Array
const numArr = [0, 1, 2, 3, 4, 5];
console.log(`Noraml Number Array: ${numArr}.`);

const reversedNumArr = numArr.reverse();
// console.log(numArr);
console.log(`Reversed Number Array: ${reversedNumArr}.`);


// ========================== Reverse String
const str = "Yello";

// Step 1: split string into character
const  strArr = str.split('');
console.log(`\nString array: ${str}`);
console.log(`Split string to array: ${strArr}`);

// Step 2: reverse array
strArr.reverse();
console.log(`Reversed string array: ${strArr}`);

// Step 3: Join array back into string
const reversedStr = strArr.join('');
console.log(`Joined string array: ${reversedStr}`);
