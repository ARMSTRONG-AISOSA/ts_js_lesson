// Typescript Annotation
// Types are the foundation of TypeScript — they let you describe the kind of data a variable, function, or object should hold, so errors are caught before runtime.

// Basci Type
let phoneDigits: number = 2349009876543;
let company: string = "Activison Blizzard";
let isMale: boolean = true;
let ageArr:number[] = [10, 34, 21];
let personData1: (string | number | boolean)[] = ["Kelvin", 21, true];

let firstName: any = "Pedro";
let personData2: any[] = ["Kelvin", 21, true];

// Function
const concatenateValues = (a: string, b: string): string => {
    return a + b;
};

const addValues = (a: number, b: number): number => {
    return a + b;
};

console.log(concatenateValues("Hello", " World"));
console.log(addValues(50, 10));

