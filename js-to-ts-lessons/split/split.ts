// Check @ notes.txt

// Example 1: Splitting by a space
const sentence: string = "Hello World, how have you been?";
const splitWords: string[] = sentence.split(" ");
console.log(`Original sentence: ${sentence}.`);
// console.log(splitWords);
console.log(`Split words: ${splitWords}.`);


// Example 2: Splitting by a comma
const fruits: string = "Banana, Kiwi, Pomegranate";
const fruitArray: string[] = fruits.split(",");
console.log(fruitArray);

// Example 3: Splitting by a blank string
const word: string = "Xylophone";
const splitCharacters: string[] = word.split("");
// const splitCharacters = word.split("", 2);
console.log(splitCharacters);
