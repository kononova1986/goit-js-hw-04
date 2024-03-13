function isEnoughCapacity(products, containerSize) {
    const productsValue = Object.values(products);
    let sumProducts = 0;
    for (const product of productsValue) {
        sumProducts += product;
        } 
        if (sumProducts < containerSize) {
            return true;
    }
    return false;
    }


console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true