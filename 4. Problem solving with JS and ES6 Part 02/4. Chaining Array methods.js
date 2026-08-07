/*
  Problem: Filtered Cart Total (Chaining filter -> reduce)
  getExpensiveItemsTotal(cart, minPrice) — from the cart, keep only
  items priced at or above minPrice, then calculate the total cost
  (price * qty) of just those items — all in ONE chained expression.

  Input:
    cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Headphone", price: 800, qty: 1 },
      { name: "Notebook", price: 50, qty: 2 },
      { name: "Watch", price: 1500, qty: 1 },
    ]
    minPrice = 500

  Output:
    2300   (800*1 + 1500*1)
*/


const getExpensiveItemsTotal = (cart, minPrice) => {
    return cart
    .filter((elem) => elem.price >= minPrice)
    .reduce((acc, current) => acc + (current.price * current.qty),0);
};


let cart = [
    { name: "Pen", price: 20, qty: 3 },
    { name: "Headphone", price: 800, qty: 1 },
    { name: "Notebook", price: 50, qty: 2 },
    { name: "Watch", price: 1500, qty: 1 },
];

console.log(getExpensiveItemsTotal(cart, 500));


