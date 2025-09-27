// 1. Store a key-value pair.
// sessionStorage.setItem(key, value);
sessionStorage.setItem('quizLevel', 2);
sessionStorage.setItem('newLetterPopUpShown', true);
sessionStorage.setItem('mode', 'flight');


// 2. Retrieves the value for a given key.
// sessionStorage.getItem(key);
const retrievedQuizLevel = sessionStorage.getItem('quizLevel');
console.log(retrievedQuizLevel);

// Convert to number
let quizLevel = parseInt(retrievedQuizLevel, 10);
console.log(quizLevel);


// 3. Deletes a specific key-value pair
// sessionStorage.removeItem(key);
sessionStorage.removeItem('mode');


// 4. Deletes all key-value pairs from the current session's storage.
// sessionStorage.clear()

// sessionStorage.clear();




// ========================= Example with an Object (Requires JSON)
// Since sessionStorage only stores strings, you must use the JSON.stringify() and JSON.parse() methods to handle objects and arrays.

const order = {
    id: 'ORD-456',
    items: ['milk', 'bread'],
    subtotal: 15.50
};
console.log(order);

// Stringify and store object
sessionStorage.setItem('order', JSON.stringify(order));

// Retrive the object
const retrivedOrder = sessionStorage.getItem("order");
console.log(retrivedOrder);


// convert the string back to object
const orderData = JSON.parse(retrivedOrder);
console.log(orderData);

// Log object and individual items
console.log("Odrer Id: " + orderData.id);
console.log("Odrer items: " + orderData.items);
console.log("Bill: " + orderData.subtotal);
console.log("Item Count: ", orderData.items.length);




// Example 1: Maintaining State on Form Navigation
// Function to save form data
function saveFormData(stepName, objectData) {
    sessionStorage.setItem(`form-${stepName}`, JSON.stringify(objectData));
    console.log(`Data for step '${stepName}' saved to sessionStorage.`);
}

// Function to load form data
function loadFormData(stepName) {
    const storedData = sessionStorage.getItem(stepName);

    if (storedData) {
        const formData = JSON.parse(storedData);
        console.log(formData); //log data
        return formData;
    } else {
        return null;
    }
}


// --- Usage Simulation ---
const step1Data = { name: "Tony Stark" };
const step2Data = { name: "Tony Stark", email: "tony@stark.com" };
const step3Data = { name: "Tony Stark", email: "tony@stark.com", profession: "Inventor" };

// save data to session
saveFormData('contact', step1Data);

// Load data
const retrievedFormData = loadFormData("form-contact");
if (retrievedFormData) {
    console.log(`Welcome back, pre-filling form for '${retrievedFormData.name}'.`);
    // In a real app, you would set input values here:
    // document.getElementById('nameInput').value = retrievedData.name;
} else {
    console.log("No form data was retrieved");

}
// Simulate the user returning to the form page



// Example 2: Temporary Cart Storage
// Function to add an item to the session cart

function addToCart(item) {
    // 1. Get the current cart string (or null if empty)
    const storedCartData = sessionStorage.getItem('shoppingCart');

    // 2. Convert to JS array, or initialize a new one
    const cart = storedCartData ? JSON.parse(storedCartData) : [];

    // 3. Check if item exists 
    const exist = cart.some((cartItem) => {
        return cartItem.productId === item.productId;
    });

    if (exist) {
        console.log("Item already exist");
        return;
    };

    // 4. Add the new item
    cart.push(item);

    // 5. Save the updated array back as a string
    sessionStorage.setItem("shoppingCart", JSON.stringify(cart));
    console.log("Successfully added to cart");

    // log item
    console.log(`${item.name} added. Cart total items: ${cart.length}`);

}

// --- Usage Simulation ---
addToCart({ productId: 55, name: 'Coffee Mug', qty: 1, price: 15.00 });
addToCart({ productId: 56, name: 'T-Shirt', qty: 2, price: 25.00 });


// Check the cart content
function checkCartContent(cartName) {
    const storedCartData = sessionStorage.getItem(cartName);
    const content = JSON.parse(storedCartData);
    return content;
}

const cartContent = checkCartContent("shoppingCart")
console.log(cartContent);


const WELCOME_MODAL_KEY = 'welcomeModalShown';

// Function to check and show the modal
function showWelcomeModalOncePerSession() {
    // Check if the flag is set in sessionStorage
    const isModalShown = sessionStorage.getItem(WELCOME_MODAL_KEY);

    if (isModalShown !== 'true') {
        // --- Show Modal Logic ---
        console.log("Welcome! Showing the modal for the first time this session.");
        
        // --- Set the flag to prevent it from showing again ---
        sessionStorage.setItem(WELCOME_MODAL_KEY, 'true');
        
    } else {
        console.log("Modal was already shown this session. Skipping.");
    }
}

// --- Usage Simulation ---
console.log("--- First Page Load ---");
showWelcomeModalOncePerSession();

console.log("\n--- Second Page Load (same tab) ---");
showWelcomeModalOncePerSession();

// If the user refreshed the page, the output would be:
// Output:
// --- First Page Load ---
// Welcome! Showing the modal for the first time this session.
//
// --- Second Page Load (same tab) ---
// Modal was already shown this session. Skipping.