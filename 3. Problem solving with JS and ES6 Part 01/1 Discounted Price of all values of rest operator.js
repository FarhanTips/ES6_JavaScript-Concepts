
// Write a JavaScript function discountedPrice() that accepts a discount percentage and any number of product prices. Calculate and return the final price after applying the discount.



// Traditional way
function discoutedPrice(dis=0, ...val){
    console.log(dis, val);
    let sum = 0;
    for (let i of val){
        sum += i;
    }
    return sum - ((dis/100) * sum);
}

console.log(discoutedPrice(undefined,200,100));
console.log(discoutedPrice(10,200,100));
console.log(discoutedPrice(20,200,100));





// ES6 way
function discoutedPrice(dis=0, ...val){
    console.log(dis, val);
    let sum = val.reduce( (acc, curr) => acc+curr, 0);
    return sum - ((dis/100) * sum);
}

console.log(discoutedPrice(undefined,200,100));
console.log(discoutedPrice(10,200,100));
console.log(discoutedPrice(20,200,100));

