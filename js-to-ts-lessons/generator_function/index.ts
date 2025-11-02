// A generator function is a special type of function that can pause and resume its execution.
//      Generator functions can:
//      Yield multiple values over time,
//      Pause midway, and
//      Resume right where they stopped.

// The Syntax
// function: function* myGenerator() { yield x; }
// function call: const iterator = myGenerator();

// notice: myGenerator() does not execute immediately — it returns an iterator object.
// You must “pull” values from it using .next():
// console.log(iterator.next()); // { value: x, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

// 1. The generator starts suspended.
// 2. The first .next() starts it and runs until the first yield.

// Example 1: 
// Function defination
function* myGenerator(): Generator<number, void, unknown> {
    yield 1;
    yield 2;
    yield 3;
}

// func call
const iterator: Generator<number, void, unknown> = myGenerator();

// "pull" values
console.log(`\nExample 1:`);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Example 1.5: using .value property
// Function defination
function* myGeneratorV2(): Generator<number, void, unknown> {
    yield 1.5;
    yield 2.5;
    yield 3.5;
}

// func call
const iterator2: Generator<number, void, unknown> = myGeneratorV2();

// "pull" values
console.log(`\nExample 1.5:`);
console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value);



// Example 2: Using for...of with Generators
function* phoneBrands(): Generator<string, void, unknown> {
    yield "Samsung";
    yield "HMD";
    yield "Redmi";
    yield "Infinix";
}

console.log(`\nExample 2:`);
for (const phone of phoneBrands()) {
    console.log(phone);
}



// Example 3: yield vs return
// The return value "Nothing" marks the generator as “done”, so it’s not included in iteration.

let evenNums = 0;

function* evenNumbers(): Generator<number, string, unknown> {
    yield evenNums = evenNums + 2;
    yield evenNums = evenNums + 2;
    yield evenNums = evenNums + 2;
    return "Nothing"; // terminates it here
}

console.log(`\nExample 3:`);
for (const evenValue of evenNumbers()) {
    console.log(evenValue);
}


// Example 4: Sending Values into a Generator
// You can even send values back in using .next(value).

function* gameDialog(): Generator<string, void, string> {
    const playerName = yield "What's your name?";
    yield `my name is ${playerName}.`;
}

const talkWithNpc1: Generator<string, void, string>  = gameDialog();
console.log(`\nExample 4:`);
console.log(talkWithNpc1.next().value);
console.log(talkWithNpc1.next("Armstrong").value);




// Example 4: Sending Values into a Generator & using a switch statement within
function* gameDialog2(): Generator<string, void, string>  {
    const characterClass = yield `Select a character class\n Mage\nWarrior\nArcher\nArcane\n`;

    const selectedClass = characterClass.toLowerCase().trim();


    switch (selectedClass) {
        case "mage":
            yield `You selected the class Mage.`;
            break;
        case "warrior":
            yield `You selected the class Warrior.`;
            break;
        case "archer":
            yield `You selected the class Archer.`;
            break;
        case "arcane":
            yield `You selected the class Arcane.`;
            break;
        default:
            yield `Enter the name of a valid class`;
    }

}

const classDialog = gameDialog2();


console.log(`\nExample 4.5:`);
console.log(classDialog.next().value);
console.log(classDialog.next("Arcane").value);





// Example 5: ⚡ Async Generators
// Generators can also handle asynchronous operations (like await + yield):

async function* fetchItems(): AsyncGenerator<string, void, unknown> {
    const storageUrls: string[] = ["/Potatos", "/Yams", "/Eggs", "/Bell-Peppers", "/Garden-Eggs"];

    for (const url of storageUrls) {
        const itemData = await new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve(`fetched ${url.toLowerCase()}`)
            }, 1000)
        });

        yield itemData; // send each fetched item one by one
    }
}


// ============= Call Method 1
// async function getItems() {
//     console.log(`\nExample 5: Items stored in an inventory`);

//     for await (const item of fetchItems()) {
//         console.log(`${item}`);
//     };
// }
// getItems(); // fuction call



// ============= Call Method 2
(async () => {
    console.log(`\nExample 5: Items stored in an inventory`);

    for await (const item of fetchItems()) {
        console.log(`${item}`);
    };
})();

// Explanation
// special JavaScript pattern called an Immediately Invoked Async Function Expression (async IIFE).

// Syntax:
//      (async () => {
// some async code
//      })();

// “Define an anonymous async function, then immediately execute it right now.”

