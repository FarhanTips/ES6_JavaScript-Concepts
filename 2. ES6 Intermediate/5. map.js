


// map: to modify array elements and get new modified array. array এর each element change করে new array return.
// map() : "তুমি যা return করবে, সেটাই নতুন array-এর element হবে।"

let arr = [2,3,4,5,6];

// using traditional function
let double = arr.map(function (elem){
    return elem*2;
});

// using arrow function
let triple = arr.map((elem) => elem * 3);
console.log(arr);
console.log(double);
console.log(triple);


