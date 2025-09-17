// Check @ notes.txt

// Example 1: Splitting by a space
const sentence = "Hello World, how have you been?";
const splitWords = sentence.split(" ");
console.log(`Original sentence: ${sentence}.`);
// console.log(splitWords);
console.log(`Split words: ${splitWords}.`);


// Example 2: Splitting by a comma
const fruits = "Banana, Kiwi, Pomegranate";
const fruitArray = fruits.split(",");
console.log(fruitArray);

// Example 3: Splitting by a blank string
const word = "Xylophone";
const splitCharacters = word.split("");
// const splitCharacters = word.split("", 2);
console.log(splitCharacters);


// Limiting Splits: You can also pass a second, optional argument to split() to limit the number of splits. For example, sentence.split(" ", 2) would only split the first two words.