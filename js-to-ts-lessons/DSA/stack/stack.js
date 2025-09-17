console.log("Stack TS Lesson Works!");

// FIFO
let stack = [];

// Push
stack.push("One");
stack.push(2);
stack.push("Three");
stack.push(4);
stack.push("Five");

console.log(stack);

// Pop
let popped = stack.pop();

// Sores the popped value
console.log(popped);

console.log(stack);

// Peek (view last element)
let peekedElement = stack[stack.length - 1];
console.log(peekedElement);

// Size
console.log(stack.length + '\n');


// ================================== Custom Stack Class

class StackClass {

    // Check @ Index 1.0 -notes.txt
    constructor() {
        this.items = [];
    }

    // Push/Add Element to array
    pushElement(elements) {
        this.items.push(elements);
    }

    //pop element
    popElement() {
        if (this.items.length === 0) {
            console.log("Array is Empty");
        } else {
            let poppedElement = this.items.pop();
            console.log(poppedElement);
        }
    }

    // Peek top of stack
    peekStack() {
        let peekedElement = this.items[this.items.length - 1];
        console.log(peekedElement);
    }

    // Size/Array Length
    arrSize() {
        let arrSize = this.items.length;
        console.log(arrSize);
    }

    // Display Array
    displayArr() {
        console.log(this.items);
    }

    // Note: "this" refers to the specific object that is being created by the StackClass = (stackClass1)
}

const stackClass1 = new StackClass();

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
console.log(stackClass1.items);
