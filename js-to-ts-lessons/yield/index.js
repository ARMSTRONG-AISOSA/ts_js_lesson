// Both yield and return are ways of sending values out of a function, but they work very differently in how and when those values are sent.

// return — one-time output, ends the function
// When you use return, you send one value once, and the function ends immediately.

// yield — pauses the function, returns control, then resumes later
// yield is used inside generator functions (those with function*).

// Each yield:
//      Sends out a value
//      Pauses the function execution
//      Allows it to be resumed later from where it left off

// Example 1:
function* getNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

const iterator = getNumbers();
console.log(`\n`); // newline
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }


// Example 2: Loop though all with for of loop
console.log(`\n`); // newline
for (const value of getNumbers()) {
    console.log(value);
}


// Another way to loop though all
// External variable so while expression can be valid read from out side the loops code block
function* getValues() {
    yield "Position 1 0f 3";
    yield "Position 2 0f 3";
    yield "Position 3 0f 3";
};

let values = getValues();
let result = values.next(); // start things off

// Run as long as result.done object value is false
console.log(`\n`); // newline
while (result.done === false) {
    console.log(result.value); // log out current result
    result = values.next(); // move to next value and store in result
};
console.log(`Done`);


// Example 3: Sending Values into a function Generator
// You can even send values back in using .next(value).

function* gameDialog() {
    const playerName = yield "NPC: What's your name?";
    const npcName = yield `Player: My name is, ${playerName}!`;
    yield `NPC: Hello ${playerName}.`;

    yield `NPC: My name is ${npcName}.`;

    yield `Player: Nice to meet you, ${npcName}.`;
    yield `NPC: Here is your quest, ${playerName}.`;
}

console.log(`\n`); // newline
const chat = gameDialog();
console.log(chat.next().value);
console.log(chat.next("Alice").value);
console.log(chat.next("Eragon").value);
console.log(chat.next().value);
console.log(chat.next().value);
console.log(chat.next().value);
console.log(chat.next().value);




// Example 4: combining with a freturn statement
console.log(`\n`); // newline

function* startUp() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
// The return value (4) marks the generator as “done”, so it’s not included in iteration.

// For of Loop
for (const count of startUp()) {
    console.log(count);
}

// spread values
console.log(...startUp());
console.log([...startUp()]);
console.log("Start Count Array: " + [...startUp()]);



