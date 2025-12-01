// includes() is a JavaScript method that determines whether an array or a string contains a specified element or substring. It returns true if the value is found, and false if it's not. It's a simple, readable way to check for the presence of a value.

// Checks for existence and returns true/false
// Note: It is case-sensitive and handles different data types correctly


// Arrays
console.log(`\nCheck array`);
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.includes('banana'));
console.log(fruits.includes('grapes'));
console.log(fruits.includes('Banana'));


// includes() can also take a second, optional argument: fromIndex. This tells the method to start searching from a specific index.
console.log(`\nCheck numbers`);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3, 2)); // Output: true (starts search from index 2)
console.log(numbers.includes(3, 3)); // Output: true (starts search from index 2)

// Strings; case sensitive
// includes() checks if a specific substring exists within it.
console.log(`\nCheck Sentence(string)`);

const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.includes('fox'));
console.log(sentence.includes('Fox'));
console.log(sentence.includes('over'));


console.log(`\nCheck Sentence(string) 2`);
const message = 'Hello, world!';

console.log(message.includes("Hello", 0));
console.log(message.includes("Hello", 1));
console.log(message.includes("world", 5));


// Handles NaN correctly unlike indexOf()
console.log(`\nHandles NaN correctly`);
const testArray = [NaN];

console.log(testArray.includes(NaN)); // Output: true
console.log(testArray.indexOf(NaN));  // Output: -1


// Real World Demo Examples
// Example 1: Validating User Input
const userUpload1 = 'profile_pic.PNG';
const userUpload2 = 'VERIFICATION_VID_.mp4';

function checkFileFormat(userUpload) {

    const allowedFileTypes = ['jpg', 'gif', 'png', 'svg'];


    const fileExtension = userUpload.split('.').pop().toLowerCase();

    if (allowedFileTypes.includes(fileExtension)) {
        console.log('\nFile type is valid. Proceeding with upload.');
    } else {
        console.log(`\nError: .${fileExtension} is not a supported file type.`);
    }
}

checkFileFormat(userUpload1);
checkFileFormat(userUpload2);

// Example 2: Checking for Required Permissions
const userPermissions = ['view', 'edit', 'delete', 'manage-users'];
const requiredPermission = 'delete';

if (userPermissions.includes(requiredPermission)) {
    console.log('\nAccess granted. You can delete this item.');
} else {
    console.log('\nAccess denied. Insufficient permissions.');
}

// Example 3: Filtering an Array Based on a Keyword
const searchResults = [
  'Laptop Dell XPS',
  'iPhone 13 Pro',
  'Samsung Galaxy S22',
  'Dell Monitor 27"',
  'Dell Inspiron'
];

const searchTerm = 'Dell';
// const searchTerm = 'o';
const filteredResults = searchResults.filter((result) => {
    // Return only the elements that return true are included in the new filteredResults array.
    return result.includes(searchTerm);
});

console.log(`\nfilteredResults`);
console.log(filteredResults);
