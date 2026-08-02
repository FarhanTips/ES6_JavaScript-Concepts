


const user = {
  name: "Utsho",
  age: 26,
  "my address": "something",
  something: [20, 30, 40, 500],
  company: {
    name: "Programming Hero",
    address: {
        location: "Mirpur DOHS",
        street: "something"
    }
  },
};
const user2 = {
  name: "Habib",
  age: 45,
  "my address": "something",
  something: [20, 30, 40, 500]
};

//access property: Dot notation and bracket notation
// console.log(user.age, user.something, user.company);

const key = "company";
// console.log(user[key]);
// console.log(user["my address"]);


// optional chaining operator (?.)
// এর কাজ হলো: যদি কোনো property না থাকে (null বা undefined হয়), তাহলে error না দিয়ে undefined return করবে। ?. মানে "যদি থাকে, তাহলে সামনে যাও; না থাকলে থেমে undefined দাও।" তাই Optional Chaining (?.)-এর মূল উদ্দেশ্য হলো nested object access করার সময় TypeError এড়ানো।

// dot notation
console.log(user.company.name, user.company.address.location);

// optional chaining dot operation
console.log(user2?.company?.name, user2?.company?.address?.location);

// optional chaining bracket operation
console.log(user2?.["my address"], user2?.["location-street"]?.["address"]?.["company name"]);



// Object loop
// for in loop
for (let key in user){
    console.log(key, user[key]);
}

const keys = Object.keys(user)
const values = Object.values(user)
const entries = Object.entries(user)

// for of loop
for(let key of keys){
    console.log(key, user[key]);
}

for(let elem of entries){
    const [key, value] = elem
    console.log(key, value);
}