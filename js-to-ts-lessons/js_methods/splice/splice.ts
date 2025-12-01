// splice() method in JavaScript changes the contents of an array by removing, replacing, or adding elements. It modifies the original array in place and returns an array containing the deleted elements.

// Removing Elements: array.splice(start, deleteCount)
// Replacing Elements: array.splice(start, deleteCount, item1, item2, ...)
// Adding Elements: array.splice(start, 0, item1, item2, ...)


// Example 1. Removing Elements
const houseItems: string[] = ['chair', 'tables', 'cabinent', 'fridge', 'television', 'shelf'];
const removedHouseItems: string[] = houseItems.splice(2, 3);
console.log("\nLeft Over house items:");
console.log(houseItems);
console.log("\nRemoved house items:");
console.log(removedHouseItems);


// Example 2. Replacing Elements
const colors: string[] = ['red', 'green', 'purple', 'blue'];
const removedColors: string[] = colors.splice(1, 3, 'yellow', 'pink', 'brown', 'orange');
console.log("\nRemoved colors:");
console.log(removedColors);
console.log("\nReplaced colors:");
console.log(colors);

// Example 3. Adding Elements
const animals: string[] = ['dog', 'cat'];
const removedAnimal: string[] = animals.splice(1, 0, 'sheep', 'goat');
console.log("\nRemoved Animals:");
console.log(removedAnimal);
console.log("\nUpdated Animal Array:");
console.log(animals);

// Example 4: Removing All Elements from a Certain Point
const groceryList: string[] = ['milk', 'eggs', 'bread', 'cheese', 'ham', 'juice'];
const removedGroceryListItems: string[] = groceryList.splice(3);
console.log("\nRemoved Grocery Items:");
console.log(removedGroceryListItems);
console.log("\nGrocery list:");
console.log(groceryList);
