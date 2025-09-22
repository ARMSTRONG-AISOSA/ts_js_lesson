const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const submitBtn = document.querySelector("#submitBtn");
const getCookieBtn = document.querySelector("#getCookieBtn");

console.log(firstName);


// Event listener
submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstName.value, 1);
    setCookie("lastName", lastName.value, 1);
});

getCookieBtn.addEventListener("click", () => {
    firstName.value = getCookie("firstName");
    lastName.value = getCookie("lastName");
})



// Create Cookie Function
// Read Cookies.js for understanding
function setCookie(name, value, daysTolive) {
    const date = new Date(); //new date
    date.setTime(date.getTime() + (daysTolive * 24 * 60 * 60 * 1000)); //UTC => millisecond + days(millisecond)

    let expires = "expires=" + date.toUTCString(); //Convert millisec to UTC string format

    document.cookie = `${name}=${value}; ${expires}; path=/;`; //create Cookie
}

// Function to get cookie(value) by name
function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; "); // split into array
    let cookieValue = null;

    cArray.forEach((element) => {

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
