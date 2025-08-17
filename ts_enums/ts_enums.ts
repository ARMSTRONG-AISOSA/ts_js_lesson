// @ Check notes.txt

// 1. Numeric Enums (default): by default, enums are numeric and start from 0 unless you set a value.

enum Directtion {
    Up, //0
    Down,   //1
    Left,   //2
    Right,  //3
}

let move: Directtion = Directtion.Up;
console.log(Directtion); //Prints everything
console.log("\n" + move + "\n"); //0


// You can also assign custom values
enum DirecttionKey {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
}

let moveKey: DirecttionKey = DirecttionKey.Up;
console.log(DirecttionKey);
console.log("\n" + moveKey + "\n");


// 2. String Enums: instead of numbers, you can assign string values:

enum DirAlphKeys {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

let moveAlphaKey: DirAlphKeys = DirAlphKeys.Up;
console.log(DirAlphKeys);
console.log("\n" + moveAlphaKey + "\n");

// Notes: String enums are more readable when debugging.


// 3. Mixed Enums (number + string): though it’s not common:

enum MedResult {
    BloodSugar = "LOW",
    EyeScore = 10,
}
console.log(MedResult);


//4. Reverse Mapping (numeric only): numeric enums allow reverse lookup (of string names from number):

enum CompassDirecttion {
    North, //0
    South, //1
    West,  //2
    East,  //3
}

console.log(CompassDirecttion[0]); //North
console.log(CompassDirecttion[2]); //West
console.log(CompassDirecttion.North);
// Note: This does not work with string enums.


// 5. Const Enums (optimized) : if you don’t need runtime objects and only want compile-time safety

const enum DirObject {
    Up,
    Down,
    Left,
    Right
}

let moveObj: DirObject = DirObject.Up;
console.log("\n" + moveObj + "\n"); // 0
// This makes the output JavaScript smaller & faster.

// When to Use Enums: to represent fixed sets of values (e.g., directions, user roles, states)

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

function checkAccess(userRole: Role) {
    if (userRole === Role.Admin) {
        console.log("Full access granted");
    } else {
        console.log("Limited access");
    }
};

checkAccess(Role.User); //Limited access
checkAccess(Role.Admin); //Full access Granted


// tsc --init
// ts-node ts_enums.ts