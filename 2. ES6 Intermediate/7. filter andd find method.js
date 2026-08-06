
// filter(): filter out elements and create new array based on condition

// filter()-এ callback-এর return value array-তে যোগ হয় না। বরং JavaScript শুধু দেখে return value truthy নাকি falsy। যদি truthy হয় → element থাকবে। যদি falsy হয় → element বাদ যাবে।

// map() : "তুমি যা return করবে, সেটাই নতুন array-এর element হবে।"
// filter() : "তুমি যা return করবে, সেটা element হবে না; শুধু সিদ্ধান্ত নেবে element থাকবে নাকি বাদ যাবে।"

// → পুরো array check করে।
// → সব matching element নিয়ে নতুন array return করে.

let arr = [2,3,4,5,6];
let filtered = arr.filter((elem) => elem >= 5);

console.log(filtered);



// find(): find out first element based on condition
// find একদম হুবুহু same filter এর, শুধু পার্থক্য হচ্ছে find প্রথম match করা element-টাই return kore, আর filter সকল matched element array তে return করে।
// find()-এ callback-এর return value array-তে যোগ হয় না। বরং JavaScript শুধু দেখে return value truthy নাকি falsy। প্রথম match করা element-টাই return হবে

// find(): "তুমি যা return করবে, সেটা result হবে না; শুধু সিদ্ধান্ত নেবে বর্তমান element-টা match করেছে কিনা। find() প্রথম match পেলেই loop বন্ধ করে দেয়।
let arr2 = [2,3,7,4,5,6];
let findOut = arr2.find((elem) => elem >= 5);

console.log(findOut);


