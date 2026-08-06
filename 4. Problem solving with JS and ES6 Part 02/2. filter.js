


/*
  Problem: Passing Students Filter
  getPassingStudents(students, threshold) — return only the students
  whose marks are greater than or equal to the given threshold.

  Input:
    students = [
      { name: "Rafi", marks: 75 },
      { name: "Karim", marks: 40 },
      { name: "Utsho", marks: 60 },
    ]
    threshold = 60

  Output:
    [
      { name: "Rafi", marks: 75 },
      { name: "Utsho", marks: 60 },
    ]
*/

// filter()-এ callback-এর return value array-তে যোগ হয় না। বরং JavaScript শুধু দেখে return value truthy নাকি falsy। যদি truthy হয় → element থাকবে। যদি falsy হয় → element বাদ যাবে।

// map() : "তুমি যা return করবে, সেটাই নতুন array-এর element হবে।"
// filter() : "তুমি যা return করবে, সেটা element হবে না; শুধু সিদ্ধান্ত নেবে element থাকবে নাকি বাদ যাবে।"

// → পুরো array check করে।
// → সব matching element নিয়ে নতুন array return করে.
const getPassingStudents = (arrStudents, threshold) => {
    const filteredStudents = arrStudents.filter( (elem) => {
        return elem.marks >= threshold;
    });
    return filteredStudents;
};


let students = [
  { name: "Rafi", marks: 75 },
  { name: "Karim", marks: 40 },
  { name: "Utsho", marks: 60 },
  { name: "Akash", marks: 59 },
];
console.log(getPassingStudents(students, 50));



