console.log("It works");



class Product {

    // The constructor method
    constructor(item, price) {
        this.item = item;
        this.price = price;
    }

    // a method within a class
    logProduct() {
        console.log(`Product: ${this.item}`);
        console.log(`Price: ${this.price}`);
    }

    calcTotal(saleTax) {
        let totalPrice = this.price + (this.price * salesTax);
        return totalPrice;
    }
}

const salesTax = 0.05;

// Create an object (instance) of the 'Product' class
const product2 = new Product('Jeans', 13500);

// Call a method on the object
product2.logProduct();

let product2TotalPrice = product2.calcTotal(0.05);
console.log(`${product2TotalPrice}`);


// Notes
