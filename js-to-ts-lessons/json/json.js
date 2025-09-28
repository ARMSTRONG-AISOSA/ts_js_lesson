// JSON is a text format for storing and transporting data. JSON data is written as name/value pairs, similar to JavaScript object properties.


// 1. JSON.stringify() (JavaScript Object → JSON String)
// A. A regular JavaScript object
const userProfile1 = {
  name: "Alice",
  id: 42,
  isPremium: true,
  hobbies: ["football", "anime", "coding"],
};
console.log("\nThe JavaString Object format:");
console.log(userProfile1);

// A. Convert the JavaScript object to a JSON string
const userProfileJsonString = JSON.stringify(userProfile1);

console.log("\nThe JSON string format. \nData type:", typeof userProfileJsonString);
console.log(userProfileJsonString);



// 2. JSON.parse() (JSON String → JavaScript Object)
// 1. A JSON string received from an API or storage
const receivedJson = '{"title":"The Matrix","year":1999, "genre":["action","scifi","martial-arts"]}';
console.log("\nReceivedJson:");
console.log(receivedJson);


// 2. Convert the JSON string back into a JavaScript object
const movieobj = JSON.parse(receivedJson);
console.log("\nReceived JSON converted to Object");
console.log(movieobj);




// Example 1: Sending an Array of Data to a Server
// A regular JavaScript Array of Objects
const batchUpdates = [
  { userId: 101, status: 'approved' },
  { userId: 105, status: 'rejected' },
  { userId: 112, status: 'pending' }
];

// Convert the JavaScript Array to a JSON String for transmission
const payLoad = JSON.stringify(batchUpdates);

console.log("\nOriginal Javascript Object. Data type: " + typeof batchUpdates);
console.log(batchUpdates);


console.log("\nJSON string to send to server. Data type: " + typeof payLoad);
console.log(payLoad);



// Example 2: Storing and Retrieving Complex Data in localStorage
// Since localStorage only stores strings, you must use JSON.stringify() before storing an object and JSON.parse() when retrieving it.

// 1. Define the complex JavaScript object
const settings = {
  theme: 'dark',
  fontSize: 14,
  notifications: { email: true, push: false }
};

// --- STORING THE DATA ---
// Convert object to JSON string and store it
const settingsToLS = JSON.stringify(settings);
localStorage.setItem("settings", settingsToLS);
console.log("\nSetting Stringified:");
console.log(settingsToLS);

// --- RETRIEVING THE DATA ---
// Retrieve the string from localStorage
const retrivedSettingsFromLS = localStorage.getItem("settings");
const settingsFromLS = JSON.parse(retrivedSettingsFromLS);
console.log("\nSetting Retrieved from LocalStorage and parsed:");
console.log(settingsFromLS);




// Example 3: Handling JSON Response from an API Call
// When an external API sends a response, it's typically received as a text string that needs to be parsed before it can be used in your application.

// Simulate a response received from an API call
