// some()
// methods checks if any value in the array satisfies the condition passed through callback
// it will return true or false based on the condition
// arr.some(callback: item)

const arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];

console.log(arr.some((item) => item < 4));

function customSome(array, callback) {
  let result;
  for (let i = 0; i < array.length; i++) {
    result = callback(array[i]);
    if (result) {
      break;
    }
  }
  console.log(result);
}

const callbackFx = function (item) {
  if (item < 4) {
    return true;
  }
  return false;
};

customSome(arr, callbackFx);
