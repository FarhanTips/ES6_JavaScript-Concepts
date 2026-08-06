


/*
  Problem 1: Bulk Discount Applier
  applyDiscount(prices, rate) — apply a discount % to every price in the
  array and return a NEW array. The ORIGINAL prices array must stay
  exactly the same.

  Input:
    prices = [500, 1000, 250]
    rate   = 10   (10% discount)

  Output:
    [450, 900, 225]

  Original prices array must remain [500, 1000, 250] afterwards.
*/


// map() return new modified array. It does not change the original array.
const applyDiscount = (prices, rate=0) => {
  const pricesAfterDiscount = prices.map( (elem) => {
    return elem - ((elem * rate)/100);
  });
  return pricesAfterDiscount;
};

let productPrices = [500, 1000, 250, 400, 700];
console.log(applyDiscount(productPrices, 10));
console.log(productPrices);
