// A cookie is a small piece of data (text) that a server sends to a user's web browser. The browser may then store it and send it back with the next request to the same server. Cookies are primarily used to:
//      Session Management: Keeping a user logged in.
//      Personalization: Remembering user preferences, like language or theme settings.
//      Tracking: Recording and analyzing user behavior.

// PS: Use console for this lesson

// Check if enabled
console.log("\nCheck Browser if cookies are enabled:");
console.log(navigator.cookieEnabled);



// =========================== 1. Setting a Cookie
// document.cookie = "fictionalCharacter=Reed Richards; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
document.cookie = "fictionalCharacter1=Dracula Tepes; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
document.cookie = "fictionalCharacter2=Sonic Hedgehog; expires=Mon, 2 January 2030 12:00:00 UTC; path=/";

// interface SetCookie {
//     name: string;
//     value: string;
//     daysToLive: number;
// }

// Function to create Cookie
function setCookie(name: string, value: string | null, daysToLive: number): void {
    const date: Date = new Date(); //GMT == UTC (+0100 => WAT))

    // date.getTime() => Return current time in millisecond
    // (daysTolive * 24(hrs) * 60(mins) *60(secs) * 1000(milli)) => time to expire converted to millisecond
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000)); //UTC millisecond
    let expires: string = "expires=" + date.toUTCString(); //Convert millisec to UTC string format

    document.cookie = `${name}=${value}; ${expires}; path=/;`; //create Cookie
}


// Create Cookies
setCookie("email", "tony@gmail.com", 2);
// setCookie("phone", "2349000000", 1 );
setCookie("store", "zara", 1);




// =========================== 2. Getting a Cookie
const allCookies: string = document.cookie;
console.log("All Cookies: " + allCookies);

// Function to get cookie(value) by name
function getCookie(name: string) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; "); // split ito array
    // console.log(cArray);
    let cookieValue: string | null = null;

    // runs a callback fuction on each element in the array
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

console.log("The cookie value of 'email' is: " + getCookie('email'));
console.log("The cookie value of 'fictionalCharacter1' is: " + getCookie('fictionalCharacter1'));

// =========================== 3. Deleting a Cookie
// expire cookie: use a past date/time
document.cookie = "fictionalCharacter=Reed Richards; expires=Sun, 1 January 2000 12:00:00 UTC; path=/";

// Function to delete Cookie
function deleteCookie(name: string) {
    setCookie(name, null, -1);
}

// Delete Function call
deleteCookie("phone");

