// Js Object in TS
const Product = {
    id: 2,
    productName: "Honey",
    expYear: 2028,
};

// ====================================== Interface
// @ Check Notes
interface ProductTsInterface {
    readonly id: number;  //Prevents modification:
    productName: string;
    expYear: number;
    isEdible?: boolean;
}

const ProductTs: ProductTsInterface = {
    id: 3145,
    productName: "Corn Flakes",
    expYear: 2027,
    isEdible: true,
}

// ====================================== Function Interface
interface AddOp {
    (a: number, b: number): number;
}

const addValues: AddOp = (a, b) => {
    return a + b;
}

console.log(addValues(3, 7));



// ======================================Extending Interface
interface ShopInventoryInterface {
    productName: string;
    productNumber: number;
}

interface BusinessInterface extends ShopInventoryInterface {
    BizName: string;
    BizInfo: (boolean | number | string)[]; // Operational?, age, stateHq
}

const businessData: BusinessInterface = {
    productName: "Honey",
    productNumber: 3000,
    BizName: "Honey Comb Ventures",
    BizInfo: [true, 4, "Arizona"],
}

console.log(businessData);




// ======================================Interface Declaration Merging
// Interfaces can be merged (auto-extended)

interface Laptop {
    releaseYear: number;
}

interface Laptop {
    // feature: (string | string | string | string)[];
    feature: string[];
}

interface Laptop {
    series: string;
    modelName: string;
}

const Lenovo: Laptop = {
    releaseYear: 2024,
    feature: [
        "Built on the Intel Evo platform",
        "Spill-resistant backlit keyboard with redesigned air intake keys",
        "Dolby Atmos Speaker System and Dolby Voice",
        "Multiple security features including a match-on-chip fingerprint reader and webcam privacy shutter"
    ],
    series: "ThinkPad",
    modelName: "X1 Carbon Gen 10",
}

console.log(Lenovo);


// Types cannot be merged