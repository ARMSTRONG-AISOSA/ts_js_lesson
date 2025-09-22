const firstName = document.querySelector<HTMLInputElement>("#firstName");
const lastName = document.querySelector<HTMLInputElement>("#lastName");
const submitBtn = document.querySelector<HTMLButtonElement>("#submitBtn");
const getCookieBtn = document.querySelector<HTMLButtonElement>("#getCookieBtn");



// Event listeners with null checks
submitBtn?.addEventListener("click", () => {
    // Inside the click handlers, explicit if statements check if firstName and lastName exist before attempting to access their values.
    if (firstName?.value && lastName?.value) {
        setCookie("firstName", firstName.value, 1);
        setCookie("lastName", lastName.value, 1);
    }
});



getCookieBtn?.addEventListener("click", () => {
    // we need to check that the cookie(value) exist (not null) before running the rest of the code
    const storedFirstName = getCookie("firstName");
    const storedLastName = getCookie("lastName");

    if (firstName && storedFirstName !== null) {
        firstName.value = storedFirstName;
    }

    if (lastName && storedLastName !== null) {
        lastName.value = storedLastName;
    }
});


// 2. Null Checks and Optional Chaining
// TypeScript enforces null and undefined checks. If an element isn't found, document.querySelector returns null. Without checks, accessing a property on null would cause a runtime error.
// The ?. (optional chaining) operator is used on the event listeners, as in submitBtn?.addEventListener. This ensures the code only runs if the element exists.




// Create Cookie Function
// Read Cookies.js for understanding
function setCookie(name: string, value: string, daysTolive: number) {
    const date = new Date(); //new date
    date.setTime(date.getTime() + (daysTolive * 24 * 60 * 60 * 1000)); //UTC => millisecond + days(millisecond)

    let expires = "expires=" + date.toUTCString(); //Convert millisec to UTC string format

    document.cookie = `${name}=${value}; ${expires}; path=/;`; //create Cookie
}

// Function to get cookie(value) by name
function getCookie(name: string): string | null {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; "); // split into array
    let cookieValue: string | null = null;

    cArray.forEach((element: string) => {

        // which element has the cookie name, which if true returns (postion/index) 0
        //example visual: 'email'=tony@gmail.com
        if (element.indexOf(name) === 0) {
            //example visual: email='tony@gmail.com'
            cookieValue = element.substring(name.length + 1);
        }
    });

    return cookieValue;
}
// log all cookies
const logCookies = document.cookie;
console.log(logCookies);
