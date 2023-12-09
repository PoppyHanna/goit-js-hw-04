'use strict'

function isEnoughCapacity(products, containerSize) {
  
  const totalProducts = Object.values(products).reduce((acc, count) => acc + count, 0);

  return totalProducts <= containerSize;
}


const products = { apples: 2, grapes: 4, oranges: 3 };
const containerSize = 10;

const result = isEnoughCapacity(products, containerSize);
console.log(result);  


console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false