// findIndex() is an array method in JavaScript that returns the index of the first element in an array that satisfies a provided testing function. If no element passes the test, it returns -1. It's a useful method when you need to find the position of a specific element based on a condition, rather than just checking if it exists.

// Example 1: Finding an object in an array
interface User {
    id: number;
    name: string;
}
const users: User[] = [
    { id: 101, name: 'Alice' },
    { id: 102, name: 'Charlie' },
    { id: 103, name: 'Bob' }
];

const personBob: string = '   Bob   ';

const bobIndex: number = users.findIndex((user: User) => {
    return user.name.toLowerCase() === personBob.toLowerCase().trim();
});
console.log(bobIndex);


// Example 2: No match found
interface People {
    id: number;
    name: string;
}

const people: People[] = [
    { id: 1, name: 'Dave' },
    { id: 2, name: 'Eve' }
];

function personIndexSearch(peopleData: People[], personName: string): void {

    const personIndex: number = peopleData.findIndex((person: People) => {
        return person.name.toLowerCase() === personName.toLowerCase();
    });

    if (personIndex === -1) {
        console.log(` The search returned the index '${personIndex}', so it does not exists in the database`);
    } else {
        console.log(` The search returned '${personIndex}' so it exists in the database`);
    }
}

personIndexSearch(people, 'dave');



// Example 3: Deleting an Item from an Array
// findIndex() is perfect for finding the index of an object you want to remove. Once you have the index, you can use methods like splice() to remove it.
interface ShoppingCart {
    id: number;
    name: string;
    price: number;
}

const shoppingCart: ShoppingCart[] = [
    { id: 1, name: 'T-Shirt', price: 20 },
    { id: 2, name: 'Jeans', price: 50 },
    { id: 3, name: 'Socks', price: 5 }
];
console.log(shoppingCart);

const itemIdToDelete: number = 2; // We want to delete the jeans

function deleteItem(itemToDelete: number, cartArray: ShoppingCart[]) {
    const itemIdex: number = cartArray.findIndex((cartItem: ShoppingCart) => {
        return cartItem.id === itemToDelete;
    });

    console.log(itemIdex);
    if (itemIdex === -1) {
        console.log(`Item not found`);
    } else {
        // delete count of 1
        const deletedItem = cartArray.splice(itemIdex, 1);
        console.log(`Item found for deletion`);
        console.log(deletedItem);
        console.log(`Remaining cart items`);
        console.log(cartArray);
    }

}
deleteItem(itemIdToDelete, shoppingCart);




// Example 4: Updating an Object in an Array
// Similar to deleting, you can use findIndex() to locate an object by its unique ID and then update one of its properties.
interface StudentDataArray {
    id: number;
    name: string;
    grade: string;
}

const studentDataArray: StudentDataArray[] = [
    { id: 101, name: 'Alice', grade: 'B' },
    { id: 102, name: 'Bob', grade: 'C' },
    { id: 103, name: 'Charlie', grade: 'A' }
];

const studentId: number = 102;

function updateGrade(studentId: number, studentDataBase: StudentDataArray[], newGrade: string) {
    const itemIdex: number = studentDataBase.findIndex((studentInfo: StudentDataArray) => {
        return studentInfo.id === studentId;
    });

    console.log(itemIdex);
    if (itemIdex !== -1 && studentDataBase[itemIdex] !== undefined) {

        console.log(`Student info exist`);
        console.log(studentDataBase[itemIdex]); //current info

        studentDataBase[itemIdex].grade = newGrade; // Update grade
        console.log(studentDataBase[itemIdex]);

        console.log(`Entire database`);
        console.log(studentDataBase);// Update Info(grade)

    } else {
        console.log(`Student info not found`);
    }

}
updateGrade(studentId, studentDataArray, 'A');


// Example 5: Finding the Index of a Condition Match
const temperatures = [28, 32, 19, 25, 35, 21];

// Find the index of the first temperature above 30
const firstHotDayIndex = temperatures.findIndex((temp) => {
    return temp > 30; //greater than 30 degs
})

if (firstHotDayIndex !== -1) {
    console.log(`First temperature above 30 at index "${firstHotDayIndex}".`);
    console.log(`The temperature is: ${temperatures[firstHotDayIndex]}`);

} else {
    console.log('No temperature above 30°C was found.');
}

