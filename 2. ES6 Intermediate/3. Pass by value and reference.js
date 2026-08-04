


// Pass by Value (Pass by primitive data-type)

function check(name, age){
    name = "New Name";
    age++;
    console.log("Inside function-----------------------");
    console.log(name, age);
}

let myName = "Farhan";
let myAge = 24;
console.log("Outside function, before going to function-----------------------");
console.log(myName, myAge);

check(myName, myAge);

console.log("Outside function, After returning from function-----------------------");
console.log(myName, myAge);

// No changes in myName and myAge because primitive data-type passes a copy of the value not the memory reference.










// Pass by Reference (Pass by non-primitive data-type) Mutate inside function

function check1(obj){
    obj.name = "Aree montu";
    obj.marks.push(35);
    console.log("Inside function-----------------------");
    console.log(obj);
}

let myInfo = {
    name: "Farhan",
    address: "Dhaka",
    marks: [78, 66, 96, 72]
};

console.log("Outside function, before going to function-----------------------");
console.log(myInfo);

check1(myInfo);

console.log("Outside function, After returning from function-----------------------");
console.log(myInfo);



// myInfo is changed because primitive data-type passes the memory reference. So, mutate করলে original-এও পরিবর্তন হয়। এখানে object বদলিনি, object-এর ভিতরের data বদলেছি অর্থাৎ memory address same আছে কিন্তু অই memory address-এর ভিতরের data অথবা জিনিস-পত্র পরিবর্তন হয়েছে। কিন্তু function এর ভিতর Reassign করলে original-এ পরিবর্তন হয় না।



function check2(ob){
    ob = {                    // "এখন থেকে ob নতুন object-কে point করুক।"
        name: "Shami Kabab",
        price: 320
    };
    console.log("Inside function-----------------------");
    console.log(ob);
}

let teacher = {
    name: "Jalil Guljar",
    address: "Karachi",
};

console.log("Outside function, before going to function-----------------------");
console.log(teacher);

check2(teacher);

console.log("Outside function, After returning from function-----------------------");
console.log(teacher);

// teacher-এ কোনো পরিবর্তন হয়নি কারণ function এর ভিতরে mutate করে নাই, direct re-assign করেছে অর্থাৎ নতুন address আনা হয়েছে। Function এর ভিতরে Reassign করলে original object পরিবর্তন হয় না।





// Example of mutation

let arr1 = [1,2,3];
let temp1 = arr1;
temp1.push(35);
console.log(arr1, temp1);



// Example of Reassign

let arr2 = [10, 20, 30];
let temp2 = arr2;
temp2 = [100, 200, 300, 400, 500];
console.log(arr2, temp2);


