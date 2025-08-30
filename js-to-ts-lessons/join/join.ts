// Join: convert all the elements of an array into a single string

// Ex: 1
const phones: string[] = ["Samsung", "Nokia", "Techno"];
const phonesString: string = phones.join();
// If you don't provide a separator, join() defaults to using a comma (,).
console.log(phonesString);


const phonesString1: string = phones.join(" "); // Space separator
console.log(phonesString1);

const phonesString2: string = phones.join("--"); // Double hyphen seperator
console.log(phonesString2);


// Reverse an array
const num: string[] = ['Four', 'Three', 'Two', 'One'];
console.log(num);

const reverseNum: string[] = num.reverse();
console.log(reverseNum);

// Reverse a string
const exString: string = 'Sheep';
console.log(exString);

const reverseExString: string = exString.split('').reverse().join('');
console.log(reverseExString);

// Reverse a string withing an array
const exArray: string[] = ['rats', 'cats', 'monkeys'];

// Check @ index 2
const reverseArrayString1: string = exArray[0]!.split('').reverse().join('');
console.log(reverseArrayString1);

const reverseArrayString2: string = exArray[1]!.split('').reverse().join('');
console.log(reverseArrayString2);

const reverseArrayString3: string = exArray[2]!.split('').reverse().join('');
console.log(reverseArrayString3);



