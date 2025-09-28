// =========================== Storing Objects/Arrays
// Cookies only store strings. You must convert it to a string first — usually with JSON.stringify() — and then parse it back later with JSON.parse().

interface User {
    id: number,
    firstName: string,
    secondName: string,
    isMale: boolean,
    age: number,
};

const user1: User = {
    id: 1,
    firstName: "Tony",
    secondName: "Hawks",
    isMale: true,
    age: 19,
};

// Save to cookie (must stringify)
// Syntax: document.cookie = "name=value; expires=UTC; path=/";
document.cookie = `user1=${encodeURIComponent(JSON.stringify(user1))}; expires=Sun, 1 January 2030 12:00:00 UTC; path=/;`;

document.cookie = `character=Blade; expires=Sun, 1 January 2030 12:00:00 UTC; path=/;`;

// Retrieve and parse
function getCookie2(name: string): string | null {
    const cookies: string[] = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name && value !== undefined) {
            return decodeURIComponent(value);
        };
    }
    return null;
}

// Usage
console.log(getCookie2("user1"));

// Parse back into object
const unParsedData: string | null = getCookie2("user1");
if (unParsedData !== null ) {
    console.log(JSON.parse(unParsedData));
}

console.log(getCookie2("character"));