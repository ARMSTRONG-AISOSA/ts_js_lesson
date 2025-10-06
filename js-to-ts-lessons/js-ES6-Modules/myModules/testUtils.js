const greet = (name = "Guest") => {
    return `Hello, ${name}! Welcome to the module world.`;
};
const calculateBMI = (weightKg, heightMeters) => {
    // Input validation: ensure inputs are positive numbers
    if (typeof weightKg !== 'number' || typeof heightMeters !== 'number' || weightKg <= 0 || heightMeters <= 0) {
        console.error("Invalid input: Weight and height must be positive numbers (kg and meters).");
        return null;
    }
    // Calculate BMI
    const bmi = weightKg / (heightMeters * heightMeters);
    // Return BMI rounded to 2 decimal places for clean display
    return parseFloat(bmi.toFixed(2));
    // return Number(bmi.toFixed(2));
    // Documentaion
    // The JavaScript global function parseFloat() parses a string argument and returns a floating-point number.
    // A floating-point number is a number that has a decimal part (e.g., 3.14, 1.0, 100.5).
    // Syntax: parseFloat(string);
    // Step 1: toFixed(2) converts the number (e.g., 22.85714...) into a STRING ("22.86")
    // Step 2: parseFloat converts that STRING ("22.86") back into a NUMBER (22.86)
};
const writtenUtils = {
    greet,
    calculateBMI
};
/**
EXPORT DEFAULT SYNTAX:
This exports the 'writtenUtils' object as the single default export.
When importing in another file, you can call it anything, like 'Utils':
import UtilsTools from './utils.js';
Then you access functions like: UtilsTools.calculateBMI(70, 1.75);
 */
export default writtenUtils;
//# sourceMappingURL=testUtils.js.map