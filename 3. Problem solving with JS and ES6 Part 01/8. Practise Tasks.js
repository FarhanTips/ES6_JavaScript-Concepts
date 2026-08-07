


// Task - 01

const calculateBill = (amount, taxRate = 0.05) => amount + (amount *taxRate);

console.log(calculateBill(1000));
console.log(calculateBill(1000, 0.10) );



// Task - 02

const display = obj => {
    return `${obj.name}
${obj.title} at ${obj.company}`;
};

console.log(display({ name: "Arif", title: "Developer", company: "Programming Hero" }));




// Task - 03
const getLowestPrice = prices => {
    // Math.min() সাধারণত আলাদা আলাদা number চায়, কিন্তু আমার কাছে আছে একটা array, তাই আমি spread operator দিয়ে array-কে আলাদা আলাদা argument বানিয়েছি।
    // এটা internally হয়ে যায়: Math.min(340, 120, 560, 90); 
    return Math.min(...prices);
};

let arr = [340, 120, 560, 90] 
console.log(getLowestPrice(arr));




// Task - 04
const swapValues = (a, b) => {
    [b, a] = [a, b];
    return [a,b];
};

console.log(swapValues(5, 10) );




// Task - 05
const getEmployeeDept = employee =>{
    let { job: {title, department}} = employee;
    return {title, department};  // This is like magic, see output!
};


let info = { 
    name: "Nadia", 
    job: { title: "PM", department: "Product" } 
};
console.log(getEmployeeDept(info));