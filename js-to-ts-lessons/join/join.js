// Join: convert all the elements of an array into a single string
// Check @ Index 1.0

// Ex: 1
const phones = ["Samsung", "Nokia", "Techno"];
const phonesString = phones.join();
// If you don't provide a separator, join() defaults to using a comma (,).
console.log(phonesString);


const phonesString1 = phones.join(" "); // Space separator
console.log(phonesString1);

const phonesString2 = phones.join("--"); // Double hyphen seperator
console.log(phonesString2);


// Reverse an array
const num = ['Four', 'Three', 'Two', 'One'];
console.log(num);

const reverseNum = num.reverse();
console.log(reverseNum);

// Reverse a string
const exString = 'Sheep';
console.log(exString);

const reverseExString = exString.split('').reverse().join('');
console.log(reverseExString);

// Reverse a string withing an array
const exArray = ['rats', 'cats', 'monkeys'];

const reverseArrayString1 = exArray[0].split('').reverse().join('');
console.log(reverseArrayString1);

const reverseArrayString2 = exArray[1].split('').reverse().join('');
console.log(reverseArrayString2);

const reverseArrayString3 = exArray[2].split('').reverse().join('');
console.log(reverseArrayString3);



