// ES6 Module = An external file that contains reusable code that can be imported into other JavaScript files can contain variables, classes, functions ... and more introduced as part of ECMAScript 2015 update

// MathUtils
import { PI as pie, getCircumference, getArea, getVolume } from './mathUtils.js';

// Test Utils
import writtenUtils from './testUtils.js';
import genNamedUtils from './testUtils.js';  // renamed

console.log("The value of PI is: " + pie);

console.log("The Circumference of a sphere 10 radius is: " + getCircumference(10).toFixed(3));

const area = getArea(10);
console.log("The area value is: " + area.toFixed(2));

const volume = getVolume(10);
console.log(`The volume is: ${volume.toFixed(2)}`);


// // Example BMI calculation: 70kg and 1.75m
// console.log(calculateBMI(70, 1.75)); // 22.86
// */

console.log(writtenUtils.greet());
console.log(genNamedUtils.greet("Charlamagne"));

console.log( writtenUtils.calculateBMI(82, 1.75));
console.log("Your Bmi is: " + writtenUtils.calculateBMI(72, 1.75));
console.log(genNamedUtils.calculateBMI("s", "i")); //error

