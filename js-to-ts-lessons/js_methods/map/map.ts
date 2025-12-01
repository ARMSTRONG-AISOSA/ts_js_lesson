// Check @ notes.txt

// Example 1: Transforming Numbers
// Triple every element in an array on numbers

const numbers: number[] = [1, 2, 3, 4, 5];
const tripledNums: number[] = numbers.map(number => number * 3);
// console.log(numbers);
console.log(tripledNums);


// Example 2: Transforming Objects
interface User {
    id: number;
    name: string;
    role: string;
}

const users: User[] = [
    { id: 1, name: 'Tony', role: 'web developer' },
    { id: 2, name: 'Eric', role: 'graphics designer' },
    { id: 3, name: 'James', role: 'cloud developer' },
    { id: 4, name: 'Cynthia', role: 'project manager' },
    { id: 5, name: 'Misty', role: 'backend developer' }
];

// User Names
const userNames: string[] = users.map(user => user.name);
console.log(userNames);

// User Roles
const userRoles: string[] = users.map(user => user.role);
console.log(userRoles);




// Example 3: Formatting an Array of Dates
const dates: Date[] = [
    new Date('2025-01-01'),
    new Date('2025-03-11'),
    new Date('2025-02-07')
];

const formattedDates: string[] = dates.map(date => {
    const day: number = date.getDate();
    const month: number = date.getMonth() + 1; // Month is zero-indexed
    const year: number = date.getFullYear();

    return `${day}/${month}/${year}`;
});

console.log(formattedDates);


// Example 4.1: Adding a Property to an Array of Objects
interface Product {
    id: number;
    name: string;
    price: number;
}
const products: Product[] = [
    { id: 101, name: 'Laptop', price: 1200 },
    { id: 102, name: 'Mouse', price: 25 },
    { id: 103, name: 'Keyboard', price: 75 }
];

interface ProductWithTax extends Product {
    tax: number;
    finalPrice: number;
}

const productsWithTax: ProductWithTax[] = products.map(product => {
    const tax: number = product.price * 0.1;
    const finalPrice: number = tax + product.price;

    return {
        ...product,
        tax: tax,
        finalPrice: finalPrice
    };
});

console.log(productsWithTax);


// Example 4.2: Adding a Property to an Array of Objects
interface MenuItems {
    name: string;
    price: number;
}

const menuItems: MenuItems[] = [
    { name: 'Ice Cream', price: 20 },
    { name: 'Pizza', price: 45 },
    { name: 'Egg Roll', price: 17 },
];

interface MenuWithTax extends MenuItems {
    tax: number;
    finalPrice: number;
}

const menuWithTax: MenuWithTax[] = menuItems.map(menuItem => {
    const tax = menuItem.price * 0.1;
    const finalPrice = menuItem.price + tax;

    return {
        ...menuItem,
        tax: tax,
        finalPrice: finalPrice,
    };
});
console.log(menuWithTax);



// Example 5: Extracting Data Using the Index
// check @ Notes.txt -> index 2.0

const hunters: { name: string; }[] = [
    { name: 'Natsu' },
    { name: 'Erza' },
    { name: 'Grey' },
    { name: 'Laxus' },
    { name: 'Lucy' },
];

const ranks: number[] = [
    10,
    4,
    11,
    2,
    42,
];


const abilities: { ability: string; finishingMove: string; }[] = [
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

interface HuntersInfo {
    rank: number | undefined;
    ability: string | undefined;
    finishingMove: string | undefined;
    id: number;
    name: string;
}

const huntersInfo: HuntersInfo[] = hunters.map((hunter: { name: string; }, index: number) => {

    const rank: number | undefined = ranks[index];
    const ability: string | undefined = abilities[index]?.ability;
    const finishingMove: string | undefined = abilities[index]?.finishingMove;

    return {
        ...hunter,
        rank: rank,
        ability: ability,
        finishingMove: finishingMove,
        id: index + 1,
    }
});

console.log(huntersInfo);
