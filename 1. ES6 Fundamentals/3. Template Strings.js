


let variable = 650;
const name = "Farhan";
// without template string or back-tick
console.log("Hello "+name+". Your paid amount is "+variable+"tk.");

// with template string or back-tick
console.log(`Hello ${name}. Your paid amount is ${variable}tk. With discount: ${650 * 0.9}tk.`);







function admissionConfirmationMail(name = "Student", amount){
    return `Hello ${name}.
        Your payment is successful.
             Your paid amount is ${amount}tk.`
}

console.log(admissionConfirmationMail("Farhan",1250))
console.log(admissionConfirmationMail(undefined,5500))
console.log(admissionConfirmationMail("Sajib",4300))