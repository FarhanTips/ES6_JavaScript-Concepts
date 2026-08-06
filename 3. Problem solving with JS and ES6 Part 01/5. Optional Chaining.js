


// Optional chaining (?.) is a JavaScript operator that lets you safely access properties, call methods, or access elements without throwing an error if the value before ?. is null or undefined.


const user = {
    name: "Farhan",
    address: {
        city: "Dhaka"
    }
};

console.log(user.address.city);


const user2 = {
    name: "Farhan"
};
console.log(user2.address);
//console.log(user2.address.city);   // TypeError: Cannot read properties of undefined (reading 'city')

// Optional Chaining fixes this

console.log(user2.address?.city);









const company = {
    ceo: {
        contact: {
            email: "ceo@test.com"
        }
    }
};

console.log(company.ceo?.contact?.email);
console.log(company.ceo?.address?.street);


// ?. checks the value immediately to its left. If that value is null or undefined, it stops and returns undefined. Otherwise, it continues.




