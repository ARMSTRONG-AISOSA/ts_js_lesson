// Pi constant
export const PI = 3.14159;

// get circumference function
export function getCircumference(radius: number): number {
    return 2 * PI * radius;
}

// get area function
export function getArea(radius: number): number {
    return PI * Math.pow(radius, 2);
}

// get volume function
export function getVolume(radius: number): number {
    return (4/3) * PI * radius * radius * radius;
}
