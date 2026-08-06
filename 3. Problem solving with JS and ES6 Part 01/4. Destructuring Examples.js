

/*
  Problem 1: Nested Response Extractor
  Extract specific fields from a nested API-like response object using
  destructuring, with renaming + default value.

  Example: { user: { name: "Rafi", age: 22 } } -> extract name as
  userName, default age = 18 if missing
*/

const responseExtractor = (obj) => {
    const {user:{name:userName, age = 18}} = obj;   // default age value set while destructuring.
    console.log(userName, age);
}

responseExtractor({ user: { name: "Rafi", age: 22 } });
responseExtractor({ user: { name: "Mayank"} });
responseExtractor({ user: { name: "Farhan", age: 25 } });







/*
  Problem 2: Swap & Rest Extractor
  Swap two variables and extract first/rest elements from an array
  using destructuring, no temp variable.

  Example: [a, b] = [b, a]
  Example: [first, ...rest] = [10,20,30,40] -> first=10, rest=[20,30,40]
*/

let a = 10;
let b = 20;

[b, a] = [a, b];
console.log(a,b);

let nums = [10, 20, 30, 40, 50, 60];
let [first, second, ...rest] = nums;
console.log(first, second, rest);

