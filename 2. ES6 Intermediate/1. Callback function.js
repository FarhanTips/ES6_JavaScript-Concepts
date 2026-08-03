// A callback function is a function that is passed as an argument to another function and is executed later by that function.




// Here display() is the callback function, because it is passed as an argument to another function and later invoked.


function multiply(a,b,cb){
    let mul = a * b;
    cb(mul);
}
function add(a,b,cb){
    let sum = a + b;
    cb(sum);
}

function display(result){
    console.log(result);
}

add(10,60,display);
multiply(10,60,display);


