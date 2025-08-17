"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Js Object in TS
const Product = {
    id: 2,
    productName: "Honey",
    expYear: 2028,
};
const ProductTs = {
    id: 3145,
    productName: "Corn Flakes",
    expYear: 2027,
    isEdible: true,
};
console.log(ProductTs);
if (!ProductTs.isAvailable) {
    console.log("Don't know if product is available");
}
else {
    console.log("We know if product is available or not.");
}
const addValues = (a, b) => {
    return a + b;
};
console.log(addValues(3, 7));
const businessData = {
    productName: "Honey",
    productNumber: 3000,
    BizName: "Honey Comb Ventures",
    BizInfo: [true, 4, "Arizona"],
};
console.log(businessData);
const Lenovo = {
    releaseYear: 2024,
    feature: [
        "Built on the Intel Evo platform",
        "Spill-resistant backlit keyboard with redesigned air intake keys",
        "Dolby Atmos Speaker System and Dolby Voice",
        "Multiple security features including a match-on-chip fingerprint reader and webcam privacy shutter"
    ],
    series: "ThinkPad",
    modelName: "X1 Carbon Gen 10",
};
console.log(Lenovo);
const Individual = {
    id: 3245,
    name: "Tony",
    greet(msg) {
        console.log(msg);
    },
};
Individual.greet("Hello James");
// ts-node tutorial_interface.ts
// Types cannot be merged
//# sourceMappingURL=tutorial_interface.js.map