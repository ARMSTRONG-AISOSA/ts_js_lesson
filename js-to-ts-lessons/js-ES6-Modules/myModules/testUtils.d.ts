interface WrittenUtils {
    greet: (name?: string) => string;
    calculateBMI: (weightKg: number, heightMeters: number) => number | null;
}
declare const writtenUtils: WrittenUtils;
/**
EXPORT DEFAULT SYNTAX:
This exports the 'writtenUtils' object as the single default export.
When importing in another file, you can call it anything, like 'Utils':
import UtilsTools from './utils.js';
Then you access functions like: UtilsTools.calculateBMI(70, 1.75);
 */
export default writtenUtils;
//# sourceMappingURL=testUtils.d.ts.map