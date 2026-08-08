


// Task - 01
const getFormattedPrices = prices => prices.map(elem => `$${elem}`);

let arr1 = [100, 250, 75];
console.log(getFormattedPrices(arr1));
console.log(arr1);


// Task - 02

const getAvailableProducts = products => {
    return products.filter(elem => elem.stock > 0);
};

let info = [
    {
        name: "Pen",
        stock: 5
    },
    {
        name: "Bag",
        stock: 0
    },
    {
        name: "Notebook",
        stock: 2
    }];

console.log(getAvailableProducts(info));



// Task - 03

const findProductByName = (products, name) => {
    // find(), কিছুই true না হলে → undefined return করে
    return products.find(elem => elem.name===name) || "Not found";
    // A || B ====> A truthy হলে A নাও, আর A falsy হলে B নাও।

};

let products = [
    {
        name: "Pen",
        price: 10
    },
    {
        name: "Bag",
        price: 500
    }];

console.log(findProductByName(products, "Bag"));
console.log(findProductByName([{ name: "Bold Pen", price: 12}], "Bag"));




// Task - 04

const getTotalStockValue = products =>{
    return products.reduce( (acc, curr) => (acc + curr.price * curr.stock),0 );
};

console.log(getTotalStockValue([{ price: 50, stock: 4 }, { price: 20, stock: 10 }]  ));




// Task - 05
// const getDiscountedTotalForCategory = (products, category) => {
//     return products.filter( elem => elem.category===category).reduce( (acc, curr) => (acc + curr.price),0) * 0.9;
// };


const getDiscountedTotalForCategory = (products, category) => {
    return products
        .filter(elem => elem.category === category)
        .map(elem => elem.price * 0.9)
        .reduce((acc, curr) => acc + curr, 0);
};

let products2 = [
    { name: "Pen", 
        category: "stationery", 
        price: 100 
    }, 
    { 
        name: "Bag",
        category: "accessory", 
        price: 500 
    }, 
    { 
        name: "Notebook", 
        category: "stationery", 
        price: 60 
    }
];

console.log(getDiscountedTotalForCategory(products2, "stationery"));

