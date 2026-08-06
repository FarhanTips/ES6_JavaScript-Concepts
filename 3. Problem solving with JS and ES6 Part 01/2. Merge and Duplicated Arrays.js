




// Traditional way
let lst1 = [10, 20, 30, 40, 50];
let lst2 = [50, 60, 20, 90];
let together = [...lst1, ...lst2];
let newLst = [];

for (let i of together){
    if (!newLst.includes(i)){
        newLst.push(i);
    }
}
console.log(newLst);










// ES6 way
let arr1 = [10, 20, 30, 40, 50];
let arr2 = [50, 60, 20, 90];

let merged = [...arr1, ...arr2];
console.log(merged);
let newArr = [...new Set(merged)];
console.log(newArr);
