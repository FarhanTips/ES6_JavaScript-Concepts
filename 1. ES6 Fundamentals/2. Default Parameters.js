
console.log("WithOUT Default Parameter ------------------------------------")

function withOutDefaultParam(name){
    return "Hello "+name
}

console.log(withOutDefaultParam("Farhan"));
console.log(withOutDefaultParam());

console.log("With Default Parameter ------------------------------------")
function withDefaultParam(name = "Guest"){
    return "Hello "+name
}

console.log(withDefaultParam());