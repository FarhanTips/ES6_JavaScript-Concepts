

// console.log(sayGreet());   // funny but it will work before initialization
// console.log(sayGreet("Utsho"));  // funny but it will work before initialization

// function sayGreet(name) {
//   return `Hello ${name}, Good morning.`;
// }

// Arrow function syntax
// const sayGreet  = ()=>{
// return "something"
// }


// for empty and multiple parameter -> first bracket is required
// for single parameter -> first bracket is optional


// console.log(sayGreet("Farhan"));  // ReferenceError
const sayGreet = (name) => `Hello ${name}, Good morning.`; //implicit return
console.log(sayGreet());
console.log(sayGreet("Farhan"));




const sumFirstThenMultiplyByThree = (a, b) => {
  const sum = a + b;
  const multiply = sum * 3;
  return multiply;
};

console.log(sumFirstThenMultiplyByThree(5, 5));



const sayHi = () => "Hi";
console.log(sayHi());


// console.log(this);


const student = {
    name: "Utsho",
    age: 26,
    showName: function(){
        // console.log(this);
        return `Name: ${this.name}. Age: ${this.age}`
    },
    showAge: ()=> {
        // console.log(this);
        return `Age: ${this.age}`
    }
}

console.log(student.showName());
console.log(student.showAge());
