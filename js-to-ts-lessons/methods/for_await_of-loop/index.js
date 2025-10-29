// The for await...of loop is a JavaScript construct used to iterate over asynchronous iterable objects, such as streams, or when dealing with iterables (like arrays) that contain Promises.

// Introduced in ES2018 and provides a clean, synchronous-looking syntax for consuming asynchronous data sources.

// Note on Iterating Arrays
// When iterating over a regular array using for await...of, the loop behaves exactly like a regular for...of loop if the array elements are not Promises. 
// However, if the array contains Promises (as in the example above), the for await...of loop is the clean, readable way to await them sequentially.

// Syntax:
// async function consumeAysncData() {
//     for await (const element of asyncIterable) {
//         // 'element' is the resolved value of the Promise for the current iteration
//         console.log(element);
//     }
// }


// How It Works 💡
// The most common use case is iterating over an array of Promises, where you need to process them sequentially.

// Example 1: Processing Promises Sequentially
// In this common pattern, we want to ensure each Promise is fully resolved before starting the next one.

// A utility function that returns a Promise which resolves after a delay
function delayedValue(value, ms) {
    // So we wrap setTimeout() in a Promise that resolves after the delay.
    return new Promise((resolve) => {
        // setTimeout doesn’t pause your code — it just schedules a future task.
        // The waiting for is done by the combination of asyc/await and (resoloved) promis
        setTimeout(() => {
            resolve(value);
        }, ms);
    });
}


// An array containing Promises
const promiseArray = [
    delayedValue('A', 1500), // takes 1.5 secs
    delayedValue('B', 1000), // takes 1 sec
    delayedValue('C', 500), // takes .5 secs
    delayedValue('D', 2500), // takes 2.5 sec
];

function processInput(value, ms) {
    setTimeout(() => {
        console.log(`${value}`);
    }, ms);
}

async function processPromises() {

    // Note: Using await makes the next line wait until the previous one finishes.
    await processInput("Loading Program Processing...", 300);

    await processInput("Starting Sequential Processing...", 500);


    // The loop pauses for the time taken by each Promise to resolve
    for await (const result of promiseArray) {
        console.log(`Processing resolved result: ${result}`);
    }

    await processInput("Finalizing...", 400);

    console.log(`All processing finished`);
}

// Function call
processPromises();




// Example 2: Looping Over Results from a Generator
// You can combine the power of async/await with generators to create a sequence of asynchronous operations that run one after the other, using yield statements that return Promises.


// The function returns an async generator, not a Promise.
//  Each yield produces a Promise that resolves later.
// The for await...of loop in getSequentialData() consumes each value one by one as they resolve.

// If you used return instead
// Then you’d only get the first item, because return:
// Ends the function right away.
// Signals the generator is “done”.
// Ignores the rest of the URLs.
async function* dataFetcher(urls) {
    for ( const url of urls) {
        console.log(`\n Attempting to fetch data from: ${url}`);
        
    }
}