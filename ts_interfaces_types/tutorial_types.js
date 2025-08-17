"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ====================================== Type
// @ Check Notes
// 1. Number
let age = 26;
// 2. String
let name = "Tennyson";
// 3. Boolean
let confession = false;
// 4. Array
let calories = [2403, 3310, 1850];
let movies = ["Mission Impossible", "The Lorax", "Max Steel"];
// 5. Tuple (fixed length & types)
let dog = ["Serbarian", 4, false];
// 6. Any (disables type checking - use sparingly ⚠️)
let randomValue = "Hello World";
randomValue = 42;
console.log(randomValue);
// 7. Unknown (safre alternative to any)
let randomValue2 = 369;
randomValue2 = "mad hat";
if (typeof randomValue2 === "string") {
    console.log(randomValue2.toUpperCase());
}
// 8. Void (functions that don’t return anything)
function logMessage(message) {
    console.log(message);
}
logMessage("It works");
// 9. Never (functions that never return)
// function throwError(msg: string): never {
//     throw new Error(msg);
// }
// throwError("This doesn't never returns anything");
// ===============================================
// Union Types: allow multiple possible types.
let id;
id = 101;
id = "ABC";
let userId;
userId = 123;
userId = false;
userId = "abc123";
let productId;
productId = 7125;
productId = "Canned Totato";
productId = true;
let moveBtn;
moveBtn = "down";
moveBtn = "right";
moveBtn = "left";
const staffInfo = {
    firstName: "Alison",
    Gender: "Male",
    id: 202,
};
console.log(staffInfo);
// ex .1
const addFunc = (a, b) => {
    return a + b;
};
console.log(addFunc(2, 3));
// ex .2
const subtractFunc = (a, b) => a - b;
console.log(subtractFunc(2, 3));
const hpLaptop = {
    brand: "HP",
    model: "Spectre x360 14-inch (2024)",
    series: "Spectre",
    releaseYear: 2024,
    isAvailable: true,
};
console.log(hpLaptop);
const samsung = {
    model: "Galaxy Z Fold6",
    deviceType: "Foldable Smartphone",
    releaseDate: "July 24, 2024",
    keyFeatures: [
        "Galaxy AI integration (Circle to Search, Live Translate, Note Assist)",
        "Slimmer and lighter design than its predecessor",
        "Improved Armor Flex Hinge for enhanced durability",
        "S Pen support (sold separately)"
    ],
};
console.log(samsung);
//# sourceMappingURL=tutorial_types.js.map