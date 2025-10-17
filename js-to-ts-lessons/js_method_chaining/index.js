// Method Chaining = calling one method after another in one continuous line of code

// Buttons
const noChainBtn = document.querySelector("#noChainBtn");
const chainBtn = document.querySelector("#chainBtn");

let username = "";

function processInputV1(entry) {
    username = entry; //assign entry to username

    // First Character
    username = username.trim(); //trim white spaces
    let firstLetter = username.charAt(0); // return first letter
    firstLetter = firstLetter.toUpperCase(); // convert first letter to uppercase

    // Remaining Characters
    let remainingLetters = username.slice(1); //slice processInputafter the first characteroff all 
    remainingLetters = remainingLetters.toLowerCase(); // convert all to lowercase

    // Merge Results
    username = firstLetter + remainingLetters; //merge letters

    console.log(username); // log result
}



// ---------------- Method Chaining --------------
function processInputV2(entry) {
    username = entry.trim();

    // Caution: abuse of this leads to difficult to read code
    processedUsername = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase(); //merge letters

    console.log(processedUsername); // log result
}



// Event Listners
noChainBtn.addEventListener("click", () => {
    const entry = window.prompt("Enter Username: ");
    processInputV1(entry);
});

chainBtn.addEventListener("click", () => {
    const entry = window.prompt("Enter Username: ");
    processInputV2(entry);
})