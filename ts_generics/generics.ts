// Example Without Generics

function identify(arg: any): any {
    return arg;
}
console.log(identify(10));

// Problem ❌: any removes type safety → you can’t be sure what type comes back.

// =============================================================

//With Generics
function identity<T>(arg: T): T {
    return arg;
}

let num = identity<number>(108);
console.log("\n" + num);

let str = identity<string>("James");
console.log(str + "\n");

// Here, <T> is a generic type parameter.
// It adapts to whatever type you pass in but keeps it safe.



// -------------------------------------------------------------------
// Generic Functions: More than one generic type

function merge<T, U>(a: T, b: U): [T, U] {
    return [a, b];
}

const result = merge<string, number>("age", 25);
console.log("\n" + result);


// -------------------------------------------------------------------
// Generic Interfaces
// ex. 1
interface Box1<T> {
    value: T;
}
const numberBox: Box1<number> = { value: 100 };
const stringBox: Box1<string> = { value: "hello" };


// ex. 2
interface Box2<T, U> {
    value1: T;
    value2: U;
}

const dataBox: Box2<string, number> = { value1: "Honey", value2: 100 };


// -------------------------------------------------------------------
// Generic Classes
// ex. 1
class Container<T> {

    private data: T;

    constructor(value: T) {
        this.data = value;
    }

    getData(): T {
        return this.data;
    }
}

const c1 = new Container<number>(123);
console.log(c1);

const c2 = new Container<string>("abc");
console.log(c2);
console.log("\n");

// ex. 2

class StorageContainer<T> {
    private contents: T[];

    constructor() {
        this.contents = [];
    }

    addItem(item: T): void {
        this.contents.push(item);
    }

    getItem(idx: number): T | undefined {
        return this.contents[idx];
    }
}

const usernames = new StorageContainer<string>();
usernames.addItem("Jakob Weeby");
usernames.addItem("Ben Franklin");
console.log(usernames.getItem(0));

const calories = new StorageContainer<number>();
calories.addItem(2504);
calories.addItem(2804);
calories.addItem(1904);
console.log(calories.getItem(1));
console.log("\n");


// -------------------------------------------------------------------
// Generic Constraints: Sometimes you want generics, but with restrictions.

function getLength<T extends { length: number }>(arg: T): number {
    return arg.length;
}

const length1 = getLength("hello"); // 5
console.log(length1);

const length2 = getLength([2, 5, 8]); // 5
console.log(length2);

// const length3 = getLength(10); // ❌ Error: number has no length
// console.log(length3);
console.log("\n");


// -------------------------------------------------------------------
// Default Generic Types

function wrap<T = string>(value: T): T {
    return value;
}


wrap("Hello");// string
wrap(123);     // number
const storeWrap3 = wrap<boolean>(true); //boolean
console.log(storeWrap3);







// console.log("\n");
// ts-node generics.ts