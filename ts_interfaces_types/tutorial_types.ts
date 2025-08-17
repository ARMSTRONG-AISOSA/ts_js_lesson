// ====================================== Type
// @ Check Notes
// 1. Number
let age: number = 26;

// 2. String
let name: string = "Tennyson";

// 3. Boolean
let confession: boolean = false;

// 4. Array
let calories: number[] = [2403, 3310, 1850];
let movies: string[] = ["Mission Impossible", "The Lorax", "Max Steel"];

// 5. Tuple (fixed length & types)
let dog: [string, number, boolean] = ["Serbarian", 4, false];

// 6. Any (disables type checking - use sparingly ⚠️)
let randomValue: any = "Hello World";
randomValue = 42;
console.log(randomValue);

// 7. Unknown (safre alternative to any)
let randomValue2: unknown = 369;
randomValue2 = "mad hat";
if (typeof randomValue2 === "string") {
    console.log(randomValue2.toUpperCase());
}

// 8. Void (functions that don’t return anything)
function logMessage(message: string): void {
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
let id: string | number;
id = 101;
id = "ABC"

// Type Aliases: you can create your own custom types
type ID = string | number | boolean;

let userId: ID;
userId = 123;
userId = false;
userId = "abc123"

let productId: ID;
productId = 7125;
productId = "Canned Totato";
productId = true;


// Literal Types(aliases): limit a variable to specific values
type DiretionalKeys = "up" | "down" | "left" | "right";

let moveBtn: DiretionalKeys;
moveBtn = "down";
moveBtn = "right";
moveBtn = "left";
// moveBtn = "forward"; // ❌ Error


// Intersection Types: combine multiple types (aliases)
type Person = { name: string };
type Gender = { name: string };
type EmployeeId = { name: number };

type Staff = Person & Gender & EmployeeId;

const staffInfo = {
    firstName: "Alison",
    Gender: "Male",
    id: 202,
};
console.log(staffInfo);

// Note: The Intersection can be from multiple interfaces

interface BusinessPartner {
    fullName: string;
    creditScore: number;
}

interface UserIdentity {
    id: number | string;
    email: string;
}

type Employee = BusinessPartner & UserIdentity

const signContact = (employee:Employee) => {
    console.log("Contract was signed by " + employee.fullName +" with email " + employee.email );
}

// object
const Tony: Employee = {
    fullName: "Tony Stovic",
    creditScore: 789,
    id: "abc123",
    email: "tonystovi@gmail.com",
}

signContact(Tony);


// Function Types: you can define types for function signatures

type MathOpp = (a: number, b: number) => number;
// ex .1
const addFunc: MathOpp = (a, b) => {
    return a + b;
}
console.log(addFunc(2, 3));
// ex .2
const subtractFunc: MathOpp = (a, b) => a - b;
console.log(subtractFunc(2, 3));

// Object Types
//  ex. 1
type LaptopData = {
    brand: string;
    model: string;
    series: string;
    releaseYear: number;
    isAvailable: boolean;
};

const hpLaptop: LaptopData = {
    brand: "HP",
    model: "Spectre x360 14-inch (2024)",
    series: "Spectre",
    releaseYear: 2024,
    isAvailable: true,
}
console.log(hpLaptop);

//  ex. 2
type Phone = {
    model: string;
    deviceType: string;
    releaseDate: number;
    keyFeatures: string[];
}

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
}
console.log(samsung);
