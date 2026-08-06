


/*
  Problem 2: Cart Total Calculator
  
  You have an array of cart items, each with a name, price, and qty
  (quantity). Calculate:
    1. Total number of items in the cart (sum of all qty)
    2. Total cost (sum of price x qty for each item)

  Then print one final message using a template string:
    "Total: X items, Y Taka"

  Input:
    [
      { name: "Pen", price: 100, qty: 1 },
      { name: "Notebook", price: 100, qty: 2 }
    ]

  Output:
    "Total: 3 items, 300 Taka"

  Bonus: if the cart is missing (null/undefined), don't crash —
  print "Total: No items, 0 Taka" instead.
*/


const cartCalculator = (cart) => {
    let totalQuantity = 0;
    let totalPrice = 0;
    for (let i of cart){
        let {price, qty} = i;
        totalQuantity += qty;
        totalPrice += (price * qty);
    }
    return `Total: ${totalQuantity===0 ? "No" : totalQuantity} items, ${totalPrice} Taka`;
}

let cartArr =     [
      { name: "Pen", price: 100, qty: 1 },
      { name: "Notebook", price: 100, qty: 2 }
    ];

console.log(cartCalculator(cartArr));
console.log(cartCalculator([]));

