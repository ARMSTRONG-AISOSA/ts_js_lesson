//Fizz Buzz
// A program to print no. 1 - 1-00.
//Print fizz for no. divisible by 3 and buzz for those divisible by 5

for (let count: number = 1; count <= 100; count++) {
    if (count % 3 === 0 || count % 5 === 0) {
        if (count % 3 === 0) {
            console.log(`Fizz`);
            continue;

        } else if (count % 5 === 0) {
            console.log(`Buzz`);
            continue;

        }
    }
    console.log(`Current count: ${count}`);
}