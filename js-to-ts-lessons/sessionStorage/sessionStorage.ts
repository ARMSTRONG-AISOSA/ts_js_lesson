// 1. Store a key-value pair.
// sessionStorage.setItem(key, value);
sessionStorage.setItem('quizLevel', '2');
sessionStorage.setItem('newLetterPopUpShown', 'true');
sessionStorage.setItem('mode', 'flight');


// 2. Retrieves the value for a given key.
// sessionStorage.getItem(key);
const retrievedQuizLevel: string | null = sessionStorage.getItem('quizLevel');
console.log(retrievedQuizLevel);

// Convert to number
let quizLevel: number = retrievedQuizLevel ? parseInt(retrievedQuizLevel, 10) : 0;
console.log(quizLevel);


// 3. Deletes a specific key-value pair
// sessionStorage.removeItem(key);
sessionStorage.removeItem('mode');


// 4. Deletes all key-value pairs from the current session's storage.
// sessionStorage.clear()

// sessionStorage.clear();




// ========================= Example with an Object (Requires JSON)
// Since sessionStorage only stores strings, you must use the JSON.stringify() and JSON.parse() methods to handle objects and arrays.
interface Order {
    id: string;
    items: string[];
    subtotal: number;
};

const order: Order = {
    id: 'ORD-456',
    items: ['milk', 'bread'],
    subtotal: 15.50
};
console.log(order);

// Stringify and store object
sessionStorage.setItem('order', JSON.stringify(order));

// Retrive the object
const retrivedOrder: string | null = sessionStorage.getItem("order");
console.log(retrivedOrder);


// convert the string back to object
const orderData: Order | null = retrivedOrder ? (JSON.parse(retrivedOrder) as Order) : null;
console.log(orderData);

// Log object and individual items safely
if (orderData) {
    console.log("Order Id: " + orderData.id);
    console.log("Order items: " + orderData.items.join(", "));
    console.log("Bill: " + orderData.subtotal.toFixed(2));
    console.log("Item Count: ", orderData.items.length);
} else {
    console.log("No order found in sessionStorage.");
}




// Example 1: Maintaining State on Form Navigation
// Function to save form data
interface ObjectData {
    name?: string;
    email?: string;
    profession?: string;
}

function saveFormData(stepName: string, objectData: ObjectData): void {
    sessionStorage.setItem(`form-${stepName}`, JSON.stringify(objectData));
    console.log(`Data for step '${stepName}' saved to sessionStorage.`);
}

// Function to load form data
function loadFormData(stepName: string): ObjectData | null {
    const storedData: string | null = sessionStorage.getItem(`form-${stepName}`);

    if (storedData) {
        const formData: ObjectData = JSON.parse(storedData);
        console.log(formData); //log data
        return formData;
    } else {
        return null;
    }
}


// --- Usage Simulation ---
const step1Data: ObjectData = { name: "Tony Stark" };
const step2Data: ObjectData = { name: "Tony Stark", email: "tony@stark.com" };
const step3Data: ObjectData = { name: "Tony Stark", email: "tony@stark.com", profession: "Inventor" };

// save data to session
saveFormData('contact', step1Data);
saveFormData('contact', step3Data);

// Load data
const retrievedFormData: ObjectData | null = loadFormData("contact");
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

interface Cart  {
    productId: number;
    name: string;
    qty: number;
    price: number; 
};

function addToCart(item: Cart): void {
    // 1. Get the current cart string (or null if empty)
    const storedCartData: string | null = sessionStorage.getItem('shoppingCart');

    // 2. Convert to JS array, or initialize a new one
    const cart: Cart[] = storedCartData ? JSON.parse(storedCartData) : [];

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
function checkCartContent(cartName: string): Cart[] {
    const storedCartData: string | null = sessionStorage.getItem(cartName);
    const content: Cart[] = storedCartData ? JSON.parse(storedCartData) : [];
    return content;
}

const cartContent = checkCartContent("shoppingCart")
console.log(cartContent);


// Example 3: Tracking Simple UI State (Modal Status)
const WELCOME_MODAL_KEY: string = 'welcomeModalShown';

// Function to check and show the modal
function showWelcomeModalOncePerSession(): void {
    // Check if the flag is set in sessionStorage
    const isModalShown: string | null = sessionStorage.getItem(WELCOME_MODAL_KEY);

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