


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



// Task - 06
const promoteEmployee = (employee, newTitle) =>{
    // let newEmp = {...employee};
    // newEmp.title = newTitle;
    // return newEmp;

    // OR
    return {
        ...employee,
        title: newTitle
    };
};

let info2 = { 
    name: "Rafi", 
    title: "Junior Dev" 
};
console.log(promoteEmployee(info2, "Senior Dev"));
console.log(info2);




// Task - 07
const sumAllPrices = prices =>{
    let sum = 0;
    for (let price of prices){
        sum += price;
    }
    return sum;
};

let arr1 = [100, 250, 75];
console.log(sumAllPrices(arr1)); 




// Task - 08
const getManagerName = emp =>{
    return emp.manager?.name;    //"আগে দেখো manager আছে কিনা। থাকলে তার name নাও। manager না থাকলে error না দিয়ে undefined দাও। manager না থাকলে আর সামনে যেও না।"
};

console.log(getManagerName({ name: "Mim", manager: { name: "Tanvir" } } ));
console.log(getManagerName({ name: "Rafi" }  ));
console.log(getManagerName({ name: "Rafi" , manager: { post: "GM" }}  ));





// Task - 09

const splitFirstRest = arr =>{
    let [first, ...rest] = arr;
    return {
        first, 
        rest
    };
};

console.log(splitFirstRest([10, 20, 30, 40] ));




// Task - 10
const cloneAndUpdate = (arr, index, newValue) => {
    const newArr = [...arr];
    newArr[index] = newValue;

    return newArr;
};

const original = [5, 10, 15];

console.log(cloneAndUpdate(original, 1, 99));
console.log(original);



