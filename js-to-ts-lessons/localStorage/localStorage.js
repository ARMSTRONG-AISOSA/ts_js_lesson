// localStorage is a web storage API that allows websites and web applications to store key-value pairs in a web browser with no expiration date. This means the data persists even after the browser is closed and reopened. It's a simple way to store small amounts of data locally on the client-side.


// 1. Stores a key-value pair.
// Syntax: localStorage.setItem(key, value);

localStorage.setItem("userName", "John");
localStorage.setItem("isLoggedIn", "true");
localStorage.setItem("gender", "male");



// 2. Retrieves the value for a given key.
// Syntax: localStorage.getItem(key);

const userName = localStorage.getItem("userName");
console.log("User name:");
console.log(userName);

const isLoggedIn = localStorage.getItem("isLoggedIn");
console.log("Logged In?");
console.log(isLoggedIn);




// 3. Deletes a specific key-value pair.
// Syntax: localStorage.removeItem(key)

localStorage.removeItem("gender");


// 4. Deletes all key-value pairs from localStorage for the current domain
// Syntax: localStorage.clear();

// localStorage.clear();





// ==================== Example with an Object
// Since localStorage only stores strings, you need to use JSON.stringify() and JSON.parse() to handle objects.

const user1 = {
    name: "Jackob",
    age: 25,
    isMale: true,
};

// convert Object to a JSON String before storing
localStorage.setItem("userProfile1", JSON.stringify(user1));


// Retrieve data, which is a string
const storedUser = localStorage.getItem("userProfile1");
console.log(storedUser);

//Convert the string back to a javascript object
const parsedUser = JSON.parse(storedUser);
console.log(parsedUser);

// Log user properties
console.log(parsedUser.name);
console.log(parsedUser.isMale);


// ======================== More Examples
// Example 1: Saving User Preferences

let theme = "darkTheme";
// Function to save user theme preference


function saveThemePreference(theme) {
    localStorage.setItem("theme", theme);
    document.body.className = theme; // replace all classes with just that theme
    console.log(`Theme set to: ${theme}`);
}
// saveThemePreference(theme); //function

// Function to load the theme on page load
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme'); // get saved theme

    if (savedTheme) {
        document.body.className = savedTheme;
        console.log(`Loaded saved theme: ${savedTheme}`);
    } else {
        document.body.className = "lightTheme";
        console.log("No saved theme found, using dafault light theme.");
    }
}
// Call loadThemePreference when the page loads
document.addEventListener("DOMContentLoaded", loadThemePreference);




// Example 2: Storing a Simple Counter
// Get the current count from localStorage
let pageLoadCount = localStorage.getItem("pageLoadCount");

// Log page number out
console.log(`Stored page count: ${pageLoadCount}.`);

// if the count doesn't exist, initialise to 0
if (pageLoadCount) {
    // Increament the count
    pageLoadCount++;

    // Update page count
    localStorage.setItem("pageLoadCount", pageLoadCount);

    // Page log after count load
    console.log(`Current page count after increment: ${pageLoadCount}.`);
} else {
    pageLoadCount = 0;
    localStorage.setItem("pageLoadCount", pageLoadCount);
}


// Example 3: Storing a Shopping Cart
const newItem = {
    id: 101,
    name: 'Laptop',
    price: 1200,
};

// Retrive the current cartb from localStorage
let currentCart = localStorage.getItem("shoppingCart");

if (!currentCart) {
    console.log("Cart is empty");
    let stringedCart = JSON.stringify(newItem);

    // Store at local storage
    localStorage.setItem("shoppingCart", stringedCart);
} else {
    let parsedCart = JSON.parse(currentCart);
    console.log("Stored cart item : ");
    console.log(parsedCart);
}

