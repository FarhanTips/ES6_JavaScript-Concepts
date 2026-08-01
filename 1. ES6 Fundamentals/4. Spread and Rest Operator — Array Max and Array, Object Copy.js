

// Primitive (number, string, boolean, null, undefined, bigint, symbol) → Value Copy করে।
let num1 = 5;
let num2 = num1;
num1 = 7;

console.log(num1);
console.log(num2);

/**
 * 
প্রথমে
num1 ---> 5
num2 = num1

num1 ---> 5
num2 ---> 5

দুইটা আলাদা copy
num1 পরিবর্তন করলেও num2 পরিবর্তন হয় না, কারণ num2-এর কাছে 5-এর নিজের copy আছে।
 */




// Object / Array / Function → Reference Copy

let arr1 = [2,3,4,5,6,7];
let arr2 = arr1;

arr1.push(5000);

console.log(arr1);
console.log(arr2);

/**
 * এখানে arr2 = arr1 করলে copy হয় না, বরং দুটো variable একই array-কে reference করে।
 * 
 * 
 * arr1 ----\
            ----> [1, 2, 3]
   arr2 ----/

   arr1.push(5000) করলে একই array পরিবর্তন হয়, তাই arr2-তেও পরিবর্তন দেখা যায়।

   spread operator(...) helps to make arr2 independent.
 */


let arr3 = [1,2,3,4];
let arr4 = [...arr3];     // ...arr3 (spread operator) converts the array into separate values. ...arr3 array-টাকে ভেঙে দেয়।
let arr5 = [...arr3, 16, 32];
arr3.push(6000);
console.log(arr3);
console.log(arr4);
console.log(arr5);

