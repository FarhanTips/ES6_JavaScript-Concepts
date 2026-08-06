
// filter(): filter out elements and create new array based on condition.
// filter()-এ callback-এর return value array-তে যোগ হয় না। বরং JavaScript শুধু দেখে return value truthy নাকি falsy। যদি truthy হয় → element থাকবে। যদি falsy হয় → element বাদ যাবে।

// map() : "তুমি যা return করবে, সেটাই নতুন array-এর element হবে।"
// filter() : "তুমি যা return করবে, সেটা element হবে না; শুধু সিদ্ধান্ত নেবে element থাকবে নাকি বাদ যাবে।"


let arr = [2,3,4,5,6];
let filtered = arr.filter((elem) => elem >= 5);

console.log(filtered);



// find(): find out first element based on condition
let arr2 = [2,3,7,4,5,6];
let findOut = arr2.find((elem) => elem >= 5);

console.log(findOut);


