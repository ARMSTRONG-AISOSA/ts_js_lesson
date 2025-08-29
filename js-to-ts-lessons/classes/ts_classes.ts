console.log("It works");



class Product {

    // Define properties with their types
    item: string;
    price: number;

    constructor(item: string, price: number) {
        this.item = item;
        this.price = price;
    }

    logProduct(): void {
        console.log(`Product: ${this.item}`);
        console.log(`Price: ${this.price}`);
    }

    calcTotal(saleTax: number): number {
        let totalPrice = this.price + (this.price * salesTax);
        return totalPrice;
    }
}

const salesTax = 0.05;

const product2 = new Product('Jeans', 13500);

product2.logProduct();

let product2TotalPrice: number = product2.calcTotal(0.05);

console.log(`${product2TotalPrice}`);

// ts-node ts_classes.ts