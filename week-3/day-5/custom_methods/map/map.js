const array = [1, 2, 3, 4, 5];

function customMap(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i]);
    newArr.push(result);
  }
  return newArr;
}

const callbackFx = function (item) {
  return item * 2;
};

const result = customMap(array, callbackFx);
console.log(result);
