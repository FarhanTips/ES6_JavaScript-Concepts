


// const arr = [2,3,45];
// arr[0]=20;
// arr.push(100);
// console.log(arr);

const teacher = {
    name: "Morshed Khan",
    age: 43,
    subject: "Physics",
    expyear: 6
};

console.log(Object.keys(teacher));
console.log(Object.values(teacher));
console.log(Object.entries(teacher));

delete teacher.expyear;
delete teacher.age;
console.log(teacher);



let bankAcount = {
    accountNumber: 12345,
    name: "Farhan",
    balance: 5000
}

Object.seal(bankAcount); // Now, we cannot delete or add any property. But, we can edit or update property values.

delete bankAcount.name;
bankAcount.something = "hello";
bankAcount.balance = 2000;
console.log(bankAcount);

Object.freeze(bankAcount); // Now, we cannot delete or add any property or update or edit property values.

// console.log(bankAcount);
bankAcount.balance = 9000;
console.log(bankAcount);