



// Accessing array traditional way
let arr = [2,3,4,5,6,7];
let num1 = arr[1];
let num2 = arr[5];
console.log(num1, num2);

// Accessing array (Destructing)
let [, n1, n2, , , n5] = arr;  // এটা আসলে JavaScript নিজেই array-এর element গুলো একে একে variable-এ বসিয়ে দেয়। যে element দরকার নেই, সেখানে শুধু comma দিয়ে skip করা হয়।
console.log(n1,n2,n5);

// অর্থাৎ Destructuring হলো এক লাইনে array থেকে একাধিক value বের করার সহজ ও পরিষ্কার উপায়। এতে arr[1], arr[2], arr[5] আলাদা আলাদা লিখতে হয় না।


let students = [
    {
        name: "Farhan",
        age: 24
    },
    25,
    12,
    {
        name: "Sunny",
        age: 23,
        marks: {
            phy: 78,
            math: 64
        }
    },
    ["Zilla School", "BRAC University", "BUET College"]
];

let [{age, name}, , , {marks: {math}}, [, uni]] = students;
console.log(age, name, math, uni);





// array destructin এ element order must maitain করতে হয়, but object e order maintain দরকার হয় না।


// Accessing object traditional way
let teacher = {
    name: "Parag Kumar",
    age: 57,
    degree: {
        SSC: "A+",
        HSC: "A+",
        BSc: "First Class",
        MSc: "Second Class"
    },
    Experience: 4,
    Subject: "Hindi",
    expInstitute: ["Zilla School", "BRAC University", "BUET College"]
};

let msc = teacher.degree.MSc;
console.log(msc);

// Accessing object Destructing
let {Subject, name:fullName, expInstitute: [, , third], degree: {BSc, MSc}} = teacher;
console.log(Subject, fullName, BSc, MSc, third);

// console.log(teacher);