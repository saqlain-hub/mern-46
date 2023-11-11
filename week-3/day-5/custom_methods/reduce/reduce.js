// Reduce method reduces the array to a single value
// common example: sum of all numbers in the array
// the reduce method takes up to 4 arguments - generally 3 are given
// reduce(callback, previousValue, currentValue, initialValue)

// built-in reduce()
const arr = [2, 4, 5, 6, 7, 10, 20];
console.log(
  "reduce(): ",
  arr.reduce((total, num) => (total += num), 0)
);

// customReduce()

function customReduce(array, callback, initialValue) {
  let previousValue = initialValue;
  let total;
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    total = callback(previousValue, currentValue);
    previousValue = total;
  }

  return previousValue;
}

const callbackFx = function (total, num) {
  return total + num;
};

const total = customReduce(arr, callbackFx, 0);
console.log("customReduce(): ", total);
