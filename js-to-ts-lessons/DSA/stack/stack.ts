console.log("Stack TS Lesson Works!");


// FIFO
let stack: (number | string)[] = [];

// Push
stack.push("One");
stack.push(2);
stack.push("Three");
stack.push(4);
stack.push("Five");

console.log(stack);

// The 'popped' variable is inferred to be of type 'string | number | undefined' because the pop() method can return undefined if the array is empty.
let popped = stack.pop();
console.log(popped);

console.log(stack);

// Peek (view last element)
let peekedElement = stack[stack.length - 1];
console.log(peekedElement);

// Size : Get the size(++length) of the stack
console.log(stack.length);



// ================================== Custom Stack Class

class StackClass<T> {

    private items: T[];

    // Check @ Index 1.0 -notes.txt
    constructor() {
        this.items = [];
    }

    // Push/Add Element to array
    pushElement(elements: T): void {
        this.items.push(elements);
    }

    //pop element
    popElement(): void {
        if (this.items.length === 0) {
            console.log("Array is Empty");
        } else {
            let poppedElement = this.items.pop();
            console.log(poppedElement);
        }
    }

    // Peek top of stack
    peekStack(): void {
        let peekedElement = this.items[this.items.length - 1];
        console.log(peekedElement);
    }

    // Size/Array Length
    arrSize(): void {
        let arrSize = this.items.length;
        console.log(arrSize);
    }

    // Display Array
    displayArr(): void {
        console.log(this.items);
    }

    // Note: "this" refers to the specific object that is being created by the StackClass = (stackClass1)
}

const stackClass1 = new StackClass<string | number>();

// Push element into array
stackClass1.pushElement("taste");
stackClass1.pushElement(12);
stackClass1.pushElement("another one");
stackClass1.pushElement("String");


// Pop Element
stackClass1.popElement();

// Peek the stack Top
stackClass1.peekStack();

// size
stackClass1.arrSize();

// Display Array
stackClass1.displayArr();
console.log(stackClass1);
// console.log(stackClass1.items);  //Property 'items' is private and only accessible within class 'StackClass<T>
