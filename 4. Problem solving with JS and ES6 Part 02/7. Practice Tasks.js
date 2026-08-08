


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