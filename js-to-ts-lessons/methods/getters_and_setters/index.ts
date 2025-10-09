// JavaScript Getters and Setters are special methods that allow you to define how an object's property is accessed and modified. They are known as accessor properties, as opposed to standard data properties.

// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

// A class is like a blueprint for creating objects. Here, Rectangle is a template for creating rectangle objects that will have certain properties (like width and height) and can later have methods (like calculating area, perimeter, etc.).
class Rectangle {
    // Explicitly declare the private backing fields with their type.
    // Initialization to 'undefined' or '0' is required if they are not initialized in the constructor.
    private _width: number | undefined;
    private _height: number | undefined;

    // The constructor is a special method in a class. It automatically runs when you create a new object with new.
    constructor(width: number, height: number) {
        // this: Refers to the specific instance of the class (the object) whose width is being set.
        // ex. rectangle2.width = 4

        // this.width = width; means store the parameter(value) in the object(rectangle2) key(width).

        // myObject.width === this.width; 
        // for assignment of object key value (e.g., myObject.width = 10;)
        //  rectangle2.width = 4
        this.width = width;
        this.height = height;
    }

    // Object property/key value(s) are writtable via setters
    // In addition it allows you to validate input before assigning properties.
    set width(newWidth: number) {
        if (newWidth > 0) {
            this._width = newWidth;

            // Why use _width instead of width?
            // this._width = newWidth; vs this.width = newWidth;
            // The second would create an infinite recursion (the setter would call itself forever) and cause a stack overflow error. By using a different name (_width) for the internal storage, the setter modifies the internal state without triggering itself again.
        } else {
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight: number) {
        if (newHeight > 0) {
            this._height = newHeight;

            // this: Refers to the specific instance of the class (the object) whose height is being set (ex. rectangle2).

            // _height (The Underscore Convention):
            // This is the name used for the internal storage property of the object.
            // The underscore (_) is a convention in JavaScript (and many other languages) that signals to other developers that this property is intended to be private or protected.
            // It means that the property should only be read or written via the public get (getter) and set (setter) methods (get width() and set width()), not directly (e.g., avoid doing myObject._width = 10;).
        } else {
            console.error("Height must be a positive number");
        }
    }


    // Object property/key value(s) are made readable via getters
    get width(): number | undefined {
        return this._width;
    }

    get height(): number | undefined {
        return this._height;
    }

    get area(): string {
        // Added a check for undefined/NaN before calculation, 
        // in case initial validation failed and _width/_height were not set.
        if (this._width && this._height && this._width > 0 && this._height > 0) {
            return `${(this._width * this._height).toFixed(1)} cm^2`;
        }
        return "N/A (Invalid dimensions)";
    }
}

// const rectangle1 = new Rectangle(-4, "corn dog");
const rectangle1 = new Rectangle(-4, -3);
const rectangle2 = new Rectangle(4, 8);

console.log("\nrectangle1");
console.log("height: " + rectangle1.height);
console.log("width: " + rectangle1.width);
console.log("Area: " + rectangle1.area);
// console.log(rectangle1);

// with getters and setters you can update values after
rectangle1.width = 3;
rectangle1.height = 5;

console.log("\nUpdated rectangle1");
console.log("height: " + rectangle1.height);
console.log("width: " + rectangle1.width);
console.log("Area: " + rectangle1.area);
// with getters you can add additional logic that aren't part of the original constructor object but can be accessed as if they were properties
console.log(rectangle1);


console.log("\nrectangle2");
console.log("Rectangle 2 height: " + rectangle2.height);
console.log("Rectangle 2 width: " + rectangle2.width);
console.log("Rectangle 2 Area: " + rectangle2.area);
console.log(rectangle2);
// Uddate width key, value
rectangle2.width = 2;
console.log("Rectangle 2 new width: " + rectangle2.width);




// BMI Calculator
// weight = kg
// Height = metres

class CalcBmi {
    private _weight: number | undefined;
    private _height: number | undefined;

    constructor(weight: number, height: number) {
        this.weight = weight;
        this.height = height;
    }

    set weight(newWeight: number) {
        if (newWeight > 0) {
            this._weight = newWeight;
        } else {
            console.error("Weight must be a positive number");
        }
    }

    set height(newHeight: number) {
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number");
        }
    }

    get weight(): number | undefined {
        return this._weight;
    }

    get height(): number | undefined {
        return this._height;
    }

    get bmi(): number | string {
        if (this._weight && this._height && this._height > 0 && this._weight > 0) {
            return this._weight / (Math.pow(this._height, 2));
        };

        return "N/A (Invalid dimensions)";
    }

    get bmiStatus() {
        // Used to call the getter
        const bmiValue: number | string = this.bmi;

        // True if "bmiValue" holds a NaN javascript value
        if (typeof bmiValue === 'number') {
            switch (true) {
                case (bmiValue < 18.5):
                    return "Underweight";
                case (bmiValue >= 18.5 && bmiValue < 25.0):
                    return "Healthy Weight";
                case (bmiValue >= 25.0 && bmiValue < 30.0):
                    return "Overweight";
                case (bmiValue >= 30.0 && bmiValue < 35.0):
                    return "Obese";
                case (bmiValue >= 35.0 && bmiValue < 40.0):
                    return "Severe Obesity";
                case (bmiValue >= 40):
                    return "Morbid Obesity";
                default:
                    return "BMI status indeterminate";
            }
        } else {
            return "Invalid Data provided for calculation";
        }

    }

}


const bmiJohn = new CalcBmi(90, 1.85928);
console.log("\nDesryl's BMI");
console.log(bmiJohn);
console.log(bmiJohn.bmi);
console.log(bmiJohn.height);
console.log(bmiJohn.bmiStatus);



// Person Data

interface IPersonData {
    firstName: string;
    lastName: string;
    age: number;
    gender: 'male' | 'female'; // Use literal types for gender validation
    profession: string;
    email: string;
    telePhone: number;
}

// PascalCase convention
class PersonData {
    // // Explicitly declare properties. Initializing to undefined is correct here.
    private _firstName: string | undefined;
    private _lastName: string | undefined;
    private _age: number | undefined;
    private _gender: string | undefined;
    private _profession: string | undefined;
    private _email: string | undefined;
    private _telePhone: number | undefined;

    // Constructor with clear typing.
    constructor(
        firstName: string,
        lastName: string,
        age: number,
        gender: string,
        profession: string,
        email: string,
        telePhone: number,
    ) {
        // Setters are called to validate and store the initial values
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.profession = profession;
        this.email = email;
        this.telePhone = telePhone;
    }

    // First name
    set firstName(newFirstName: string) {
        if (newFirstName.length > 0) {
            this._firstName = newFirstName;
        } else {
            console.error("Enter a valid first name string!");
        }
    }

    // Last name
    set lastName(newLastName: string) {
        if (newLastName.length > 0) {
            this._lastName = newLastName;
        } else {
            console.error("Enter a valid last name string!");
        }
    }

    // Age
    set age(newAge: number) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.error("Enter a positive number!");
        }
    }

    // Gender
    set gender(newGender: string) {
        // .trim() to handle whitespace from user input
        const lowerCaseGender: string = newGender.trim().toLowerCase();

        if (lowerCaseGender === 'male' || lowerCaseGender === 'female') {
            this._gender = lowerCaseGender;
        } else {
            console.error(`Invalid gender: "${newGender}". Must be 'male' or 'female'.`);
        }

    }

    // Profession
    set profession(newProfession: string) {
        if (typeof newProfession === 'string' && newProfession.length > 0) {
            this._profession = newProfession;
        } else {
            console.error("Enter a valid profession string!");
        }
    }

    // email
    set email(newEmail: string) {
        if (newEmail.length > 0) {
            this._email = newEmail.toLowerCase();
        } else {
            console.error("Enter a valid email address!");
        }
    }

    // Telephone
    set telePhone(newTelePhone: number) {
        if (newTelePhone > 0) {
            this._telePhone = newTelePhone;
        } else {
            console.error("Enter a positive number!");
        }
    }

    get firstName(): string | undefined {
        return this._firstName;
    }

    get lastName(): string | undefined {
        return this._lastName;
    }

    get age(): number | undefined {
        return this._age;
    }

    get gender(): string | undefined {
        return this._gender;
    }

    get profession(): string | undefined {
        return this._profession;
    }

    get email(): string | undefined {
        return this._email;
    }

    get telePhone(): number | undefined {
        return this._telePhone;
    }
}

const personData1 = new PersonData("John", "Spartan", 21, "Male", "Software Developer", "JohnSpartan@Gmail.com", 2349090111231);

console.log(personData1);

// Issue: The original type (string | number)[] for personObjArray is too generic for the spread operation with the Person constructor. The constructor needs arguments in a specific order
// const personObjArray: (string | number)[] = ["Jane", "Suzy", 23, " Female ", "Writer", "TheJaneSuze@Gmail.com", 3249911516231];

// Correctly type the array using a tuple for the spread operation
// A tuple array ensures the order and type for the spread operator matches the constructor signature.
const personArrayTuple: [string, string, number, string, string, string, number] = ["Jane", "Suzy", 23, " Female ", "Writer", "TheJaneSuze@Gmail.com", 3249911516231];

// The spread operator unpacks the array, so the constructor correctly receives the seven elements as seven separate arguments.
const personData2 = new PersonData(...personArrayTuple);
console.log(personData2);

