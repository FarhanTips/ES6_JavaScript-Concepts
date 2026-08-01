


// ===============================
// var = Function Scoped
// ===============================

function testVar() {
    if (true) {
        var x = 10; // var if block-এর ভিতরে declare করা হয়েছে
    }

    console.log(x); // 10
    // কারণ var শুধু function scope মানে,
    // তাই পুরো function-এর ভিতর থেকে x ব্যবহার করা যায়।
}

testVar();


// ===============================
// let, const = Block Scoped
// ===============================

function testLet() {
    if (true) {
        let y = 20; // let শুধু এই block ({}) এর জন্য
        console.log(y); // 20
    }

    // console.log(y);
    // Error
    // কারণ let block scope,
    // তাই block-এর বাইরে y পাওয়া যাবে না।
}

testLet();


// ===============================
// আরেকটি সহজ Example
// ===============================

if (true) {
    var a = 100;
    let b = 200;
}

console.log(a); // 100
// কারণ var block scope মানে না।

// console.log(b);
// Error
// কারণ let শুধু if block-এর ভিতরেই থাকে।


// var ➜ Function Scoped (পুরো function-এর ভিতরে ব্যবহার করা যায়)
// let, const ➜ Block Scoped (শুধু { } এর ভিতরে ব্যবহার করা যায়)