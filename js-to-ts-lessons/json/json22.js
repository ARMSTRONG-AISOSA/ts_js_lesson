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
const apiResponseText = '{"status":"success","data":{"temperature":25,"city":"London"},"timestamp":1727341200000}';

// 1. Use JSON.parse() to convert the response string to a JavaScript object
try {
  const apiData = JSON.parse(apiResponseText);

  console.log(apiData);

  console.log("Api Status: " + apiData.status);
  console.log(`The temperature in the city of ${apiData.data.city} is ${apiData.data.temperature}°C at ${apiData.timestamp}`);

  if (apiData.data.temperature > 20) {
    console.log("It's a warm day!");
  } else {
    console.log("It's a cool day!");
  }


} catch (error) {
  // This block handles cases where the response text is not valid JSON
  console.error("Failed to parse JSON response:", error);

}





// Example 4. Simulated User Profile API Fetch
/**
* Simulates a successful API response from a server.
* In a real-world scenario, the browser's fetch() API returns a response object,
* and response.json() is what internally calls JSON.parse() on the text.
*/

function fetchUserProfileData(userId) {
  return new Promise((resolve) => {
    // 1. Simulate the raw text response from the server (JSON string)
    const jsonStingReturned = `{
      "id": ${userId},
      "username": "coder_x",
      "email": "coder@example.com",
      "subscription": "premium",
      "isVerified": true
    }`;

    // 2. Simulate network delay before resolving
    setTimeout(() => {
      resolve(jsonStingReturned);
    }, 500);
  });
}

// --- Application Code ---
async function loadAndDisplay(id) {
  try {
    const rawResponse = await fetchUserProfileData(id);
    console.log("Raw response:");
    console.log(rawResponse);

    // Process the received text using JSON.parse()
    const userData = JSON.parse(rawResponse);
    console.log("Parsed User Data:");
    console.log(userData);

    // Log User Info
    console.log(`The user name is ${userData.username}.`);
    console.log(`The user email is ${userData.email}.`);
    console.log(`The user subscription is ${userData.subscription}.`);
    console.log(`The user account is ${userData.isVerified ? "verified" : "not verified"}.`);

  } catch (error) {
    console.error("Failed to load user data:", error);
  }
}

loadAndDisplay(42);



// Example 5. Simulated Product List API Fetch with Array Processing
// Simulates an API call returning an array of JSON objects.


function fetchProductList() {
  return new Promise((resolve) => {
    const jsonString = `[
      {"sku": "LPTOP-001", "name": "Lightweight Laptop", "inStock": true, "price": 999.99},
      {"sku": "KBD-045", "name": "Mechanical Keyboard", "inStock": false, "price": 120.00},
      {"sku": "MSE-112", "name": "Wireless Mouse", "inStock": true, "price": 45.50}
    ]`;


    setTimeout(() => {
      resolve(jsonString);
    }, 600);

  })
}


// --- Application Code ---
async function loadAndDisplayProducts() {
  try {
    const rawData = await fetchProductList();
    console.log("Raw data:");
    console.log(rawData);

    const parsedProductData = JSON.parse(rawData);
    console.log("Parsed product data:");
    console.log(parsedProductData);

    console.log("\n--- Product Stock Status ---");
    // Use Array methods (like forEach) to process the JavaScript array
    parsedProductData.forEach((product) => {
      console.log(`The ${product.name}, priced at $${product.price.toFixed(2)}, is ${product.inStock ? "in" : "not in"} stock.`);
    });


  } catch (error) {
    console.error("The rawData was not parsed: ", error);

  }
}

// Function call
loadAndDisplayProducts();

