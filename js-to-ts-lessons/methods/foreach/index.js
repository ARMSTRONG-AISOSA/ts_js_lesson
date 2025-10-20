const productList = document.querySelector('#listHolder');

// forEach() is a method in JavaScript that executes a provided function once for each element in an array

// Key Characteristics
//      No return value
//      Immutable: It does not mutate the original array.
//      Read-only: You can't break or continue the loop from within a forEach() callback.
//      Performance: For simple iterations, its performance is comparable to a for loop.


// Example 1: Using forEach with the currentValue
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
    console.log(`The current value of the array is: ${number}.`);
});


// Example 2: Using forEach with the currentValue and index
const fruits = ['apple', 'banana', 'cherry', 'grape', 'pumpkin'];

fruits.forEach((fruit, index) => {
    console.log(`The current item is: ${fruit} at index ${index}.`);
})


// Example 3: Updating an HTML List
// forEach() is great for dynamically rendering content from an array, such as creating a list of items on a web page.
const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 },
];
console.log(productList); //check Ui

function updateUiProductList(productsData) {
    productsData.forEach((product) => {
        const listItem = document.createElement('li');// Create list tag
        listItem.textContent = `${product.name} - $ ${product.price.toFixed(2)}`;// Add content to each list tag
        productList.appendChild(listItem);// Append List tag to an ul tag in the html
    });
}

updateUiProductList(products);




// Example 4: Calculating a Total Sum
// You can use forEach() to perform a calculation on each item in an array and accumulate a result.
const cartItems = [
  { item: 'Shirt', price: 25.50, quantity: 2 },
  { item: 'Jeans', price: 50.00, quantity: 1 },
  { item: 'Socks', price: 5.00, quantity: 3 },
];

let totalCost = 0;

function cartPrice(cartList) {
    cartList.forEach((cartItem) => {
        totalCost = totalCost + (cartItem.price * cartItem.quantity);
    })

    console.log(`The total cost of cart items is $${totalCost.toFixed(2)}.`);
}

cartPrice(cartItems);



// Example 5: Modifying Array Elements
// Although forEach() doesn't return a new array, you can use it to modify the elements of an existing array in place. This is often used when you need to perform an operation that changes the original data.
const users = [
    { id: 1, name: 'Alice', active: false },
    { id: 2, name: 'Bob', active: false },
    { id: 3, name: 'Charlie', active: false },
];

// Here, the activateUsers function uses forEach() to loop through the users array and set the active property of each user object to true.
function activateUsersAccount(userList) {
    userList.forEach((userAcct) => {
        userAcct.active = true;
    })
}
console.log(users); // check array

activateUsersAccount(users);
console.log(users); // check array
