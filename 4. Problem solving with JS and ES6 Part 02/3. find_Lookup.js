

/*
  Problem: User Lookup by ID
  findUserById(users, id) — find and return the single user object
  whose id matches. If no user matches,returns "User not found".

  Input:
    users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ]
    id = 2

  Output:
    { id: 2, name: "Karim" }
*/


// find একদম হুবুহু same filter এর, শুধু পার্থক্য হচ্ছে find প্রথম match করা element-টাই return kore, আর filter সকল matched element array তে return করে।
// find()-এ callback-এর return value array-তে যোগ হয় না। বরং JavaScript শুধু দেখে return value truthy নাকি falsy। প্রথম match করা element-টাই return হবে

// find(): "তুমি যা return করবে, সেটা result হবে না; শুধু সিদ্ধান্ত নেবে বর্তমান element-টা match করেছে কিনা। find() প্রথম match পেলেই loop বন্ধ করে দেয়।

const findUserById = (users, id) =>{
    const expectedUser = users.find( (elem) => elem.id===id);
    return expectedUser ? expectedUser : "User not found";
};


let users = [
    { id: 1, name: "Rafi" },
    { id: 2, name: "Karim" },
];


console.log(findUserById(users, 2));
console.log(findUserById(users, 20));


