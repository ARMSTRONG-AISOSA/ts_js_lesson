// indexOf is a built-in method used to find the first index at which a given element can be found in an array or a string. It returns the index number of the first occurrence of the element. 

// If the element is not found, it returns -1.

// Syntax: string.indexOf(searchValue, [fromIndex])
//      *searchValue: The substring you're looking for.
//      *fromIndex (optional): The index to start the search from. If omitted, the
//      search starts from the beginning (index 0).



// 1. ====================== Using indexOf with Strings
// Note: The search is case-sensitive.

// Basic usage
const string1: string = 'Hello world, welcome to the world.';
const firstIndex1: number = string1.indexOf('world');
console.log("\nThe first index of 'world':");
console.log(firstIndex1);

// Using fromIndex: find same item next
const secondIndex1: number = string1.indexOf('world', firstIndex1 + 1);
console.log("\nThe second index of 'world':");
console.log(secondIndex1);

// Not found: returns -1
const notFound1: number = string1.indexOf('guess');
console.log("\nThe index of 'guess':");
console.log(notFound1);

// extra
if (notFound1 === -1) {
    console.log("\nThe world 'guess' was not found anywhere.");
}




// 2. ====================== Using indexOf with Arrays
// The indexOf method for arrays is used to find the first index of a specific element within an array. It performs a strict equality (===) comparison.

// Basic usage:
const fruitsArray: string[] = ['apple', 'banana', 'cherry', 'apple'];
const firstIndexFruit: number = fruitsArray.indexOf('cherry');
console.log("\nThe index of 'cherry' in the array:");
console.log(firstIndexFruit);


// Finding duplicates:
const firstApple: number = fruitsArray.indexOf('apple');
const secondApple: number = fruitsArray.indexOf('apple', firstApple + 1);
console.log("\nThe index of the first and second 'apple' in the array:");
console.log(firstApple);
console.log(secondApple);

// Not found
const notFound: number = fruitsArray.indexOf('grape');
console.log("\nThe index of 'grape' in the array:");
console.log(notFound); // Returns -1




// 3. ====================== Finding all occurrences of a character in a string

const sentence: string = 'the quick brown fox jumps over the lazy dog';
const searchChar1: string = 'o';
let startIndex: number = 0;
let foundIndexes1: number[] = [];

while (startIndex !== -1) {
    // -1 is not returned to 'startIndex' until sentence array is fully searched
    startIndex = sentence.indexOf(searchChar1, startIndex);

    if (startIndex !== -1) {
        foundIndexes1.push(startIndex);
        startIndex++; // Move to the next index to avoid an infinite loop
    }

    // To Test the pushes
    // console.log(foundIndexes1);
}
console.log(`\nThe indexes where the '${searchChar1}' was found in the array:`);
console.log(foundIndexes1);



// 4. ====================== Checking for the existence of an item
const groceries: string[] = ['milk', 'bread', 'eggs'];
const itemToCheck: string = 'bread';

if ( groceries.indexOf(itemToCheck) !== -1) {
    console.log(`\nThe item ${itemToCheck} is found on the list!.`);
} else {
    console.log(`\nThe item ${itemToCheck} is not found on the list!.`);
}



// 5. ====================== Validating a string's format
const email1: string = 'userexample.com';
const email2: string = 'user@example.com';

function validateEmail(email: string): void {
    if (email.indexOf('@') !== -1) {
        console.log("\nThe email is valid!");
        
    } else {
        console.log("\nThe email is not valid!");
    }
}

// Function Call
validateEmail(email1);
validateEmail(email2);