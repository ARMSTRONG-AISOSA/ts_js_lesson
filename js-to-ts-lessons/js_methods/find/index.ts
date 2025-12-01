// find() is an array method in JavaScript that returns the value of the first element in an array that satisfies a provided testing function. If no element passes the test, it returns undefined. It's used when you want to get the actual object or value that matches a condition, not just its index.

// Process: The method stops iterating as soon as the callback function returns a true value for an element and then returns that element.

// Example 1: Finding an object in an array
interface User {
    id: number;
    name: string;
}

const users: User[] = [
    { id: 101, name: 'Alice' },
    { id: 102, name: 'Bob' },
    { id: 103, name: 'Charlie' }
];

const result1 = users.find((user) => {
    return user.name === 'Bob';
});

const result2 = users.find((user) => {
    return user.name.toLowerCase() === 'alice';
});
const result3 = users.find((user) => {
    return user.id === 103;
});

console.log(result1);
console.log(result2);
console.log(result3);


// Example 2: No match found
// If the condition is never met for any element in the array, find() returns undefined.
interface People {
    id: number;
    name: string;
}

const people: People[] = [
    { id: 1, name: 'Dave' },
    { id: 2, name: 'Eve' }
];

const frank = people.find((person) => {
    return person.name === 'frank';
});

console.log(frank);
// This behavior is useful for checking if an item exists without throwing an error if it doesn't.

// Example 3: Finding an item in a list by its unique ID
interface Product {
    id: string;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 'a1b2', name: 'Smartphone', price: 699 },
    { id: 'c3d4', name: 'Laptop', price: 1200 },
    { id: 'e5f6', name: 'Headphones', price: 99 }
];

const productId: string = 'c3d4';

const selectedProduct: Product | undefined = products.find((product) => {
    return product.id === productId;
});

if (selectedProduct) {
    console.log(`The ${selectedProduct.name} is in stock and cost $${selectedProduct.price}.`);
} else {
    console.log(`The product with the id ${productId} is not in stock`);
}

// Example 4: Finding a specific user in a database
interface UserList {
    userId: number;
    username: string;
    active: boolean;
}

const usersList: UserList[] = [
    { userId: 1, username: 'alice', active: true },
    { userId: 2, username: 'bob', active: false },
    { userId: 3, username: 'charlie', active: true }
];

const searcheUsername: string = 'Charlie';

const searchResult: UserList | undefined = usersList.find((user) => {
    return user.username === searcheUsername.toLowerCase();
});

if (searchResult) {
    console.log(`The found user ${searchResult.username} is an ${searchResult ? "active" : "inactive"} account.`);
} else {
    console.log(`The user ${searcheUsername.toLowerCase()} was not found.`);
}


// Example 5: Finding the first item that meets a complex condition
// The callback function in find() can contain complex logic.
interface Employees {
    name: string;
    role: string;
    email: string | null;
}

const employees: Employees[] = [
    { name: 'John', role: 'guest', email: null },
    { name: 'Maria', role: 'admin', email: 'maria@example.com' },
    { name: 'Pedro', role: 'admin', email: null },
    { name: 'Zoe', role: 'user', email: 'zoe@example.com' }
];

const firstAdminWithEmail: Employees | undefined = employees.find((employee) => {
    return employee.role === 'admin' && employee.email !== null;
});

if (firstAdminWithEmail) {
    console.log(`The first admin found on the list is ${firstAdminWithEmail.name} with the login mail "${firstAdminWithEmail.email}".`);
} else {
    console.log(`No admin with an email found.`);
}
