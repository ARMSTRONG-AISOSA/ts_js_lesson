// Check @ notes.txt

// Example 1: Transforming Numbers
// Triple every element in an array on numbers

const numbers = [1, 2, 3, 4, 5];
const tripledNums = numbers.map(number => number * 3);
// console.log(numbers);
console.log(tripledNums);


// Example 2: Transforming Objects
const users = [
    { id: 1, name: 'Tony', role: 'web developer' },
    { id: 2, name: 'Eric', role: 'graphics designer' },
    { id: 3, name: 'James', role: 'cloud developer' },
    { id: 4, name: 'Cynthia', role: 'project manager' },
    { id: 5, name: 'Misty', role: 'backend developer' }
];

// User Names
const userNames = users.map(user => user.name);
console.log(userNames);

// User Roles
const userRoles = users.map(user => user.role);
console.log(userRoles);




// Example 3: Formatting an Array of Dates
const dates = [
    new Date('2025-01-01'),
    new Date('2025-03-11'),
    new Date('2025-02-07')
];

const formattedDates = dates.map(date => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-indexed
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
});

console.log(formattedDates);


// Example 4.1: Adding a Property to an Array of Objects
const products = [
    { id: 101, name: 'Laptop', price: 1200 },
    { id: 102, name: 'Mouse', price: 25 },
    { id: 103, name: 'Keyboard', price: 75 }
];

const productsWithTax = products.map(product => {
    const tax = product.price * 0.1;
    const finalPrice = tax + product.price;

    return {
        ...product,
        tax: tax,
        finalPrice: finalPrice
    };
});

console.log(productsWithTax);


// Example 4.2: Adding a Property to an Array of Objects
const menuItems = [
    { name: 'Ice Cream', price: 20 },
    { name: 'Pizza', price: 45 },
    { name: 'Egg Roll', price: 17 },
];
const menuWithPrice = menuItems.map(menuItem => {
    const tax = menuItem.price * 0.1;
    const finalPrice = menuItem.price + tax;

    return {
        ...menuItem,
        tax: tax,
        finalPrice: finalPrice,
    };
});
console.log(menuWithPrice);



// Example 5: Extracting Data Using the Index
// check @ Notes.txt -> index 2.0

const hunters = [
    { name: 'Natsu' },
    { name: 'Erza' },
    { name: 'Grey' },
    { name: 'Laxus' },
    { name: 'Lucy' },
];

const ranks = [
    10,
    4,
    11,
    2,
    42,
];


const abilities = [
    {
        ability: 'Dragon Slayer',
        finishingMove: 'Dragon Roar'
    },
    {
        ability: 'Weapon Specialist/Summoner',
        finishingMove: 'Nakagami Starlight'
    },
    {
        ability: 'Devil Slayer',
        finishingMove: 'Ice Devil’s Rage'
    },
    {
        ability: 'Dragon Slayer',
        finishingMove: 'Lightning Dragon’s Heavenward Halberd'
    },
    {
        ability: 'Summoner',
        finishingMove: 'Urano Metria'
    },
];

const huntersInfo = hunters.map((hunter, index) => {

    const rank = ranks[index];
    const { ability: hunterAbility, finishingMove: finalMove } = abilities[index]; // check @ Notes.txt -> index 2.0

    return {
        ...hunter,
        rank: rank,
        ability: hunterAbility,
        finishingMove: finalMove,
        id: index + 1,
    }
});

console.log(huntersInfo);
