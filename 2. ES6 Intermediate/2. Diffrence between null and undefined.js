

// null and undefined are both primitive values in JavaScript, but they mean different things.

// undefined means a variable exists, but it has not been assigned a value yet. Default value of uninitialized variables. Type is "undefined"
let name;
console.log(name);

// function
function greet() {
    console.log("Say Hello");
}
console.log(greet());

// Object
const person = {
  name: "Farhan"
};

console.log(person.age);



// null means the value is intentionally empty. Used to represent an empty or missing value intentionally. typeof null is "object" (this is a historical JavaScript bug).
let user = null;

console.log(user);



