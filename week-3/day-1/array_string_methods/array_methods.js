// Array Methods

// toString()
// will convert elements of an array, element or object value into a string and return as a one string or sequence of characters
// arr.toString() -- on arary of numbers will return --- 1,2,3,4,5
// arr.toString() -- on arary of strings will return -- Something,anything,nothing
// arr.toString() -on arary of objects will return -- will return [object Object],[object Object],[object Object],

function arrayToString() {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = ["Something", "anything", "nothing"];
  const arr3 = [{ title: "wendy" }, { title: "darlene" }];

  console.log(arr1.toString());
  console.log(arr2.toString());
  console.log(arr3.toString());
}

// arrayToString();

//

// join()
// is an array methods but will return a string a of the elements of array joined by a separator commonly the separator can be a comma, a space or a slash
// arr.join(" ") -- return a string of all elements in the array joined by space.

function joinArrayElements() {
  const arr = [
    "Something",
    "is",
    "joined",
    "with",
    "something",
    "separated",
    "by",
    "space",
    "or",
    "comma",
  ];
  const joinedStr1 = arr.join(" ");
  const joinedStr2 = arr.join(",");
  console.log(`arr =`, arr);
  console.log("\n");
  console.log(`arr.join(" "): `, joinedStr1);
  console.log(`arr.join(","): `, joinedStr2);
}

// joinArrayElements();

//

// concat() -- can take multiple parameters
// Will take the existing string and a new sequence of characters passed to it and will return a new concatenated string
// something.concat(' antyhing') --- 'something anything'
// if it is applied on an array it will add that string or element to an array and return a new array
// [1, 2, 3].concat(4) --- [1, 2, 3, 4]
// it cannot be applied to an object direclty but it can be applied to the values of the object which again are either an array or string or number

concatenate = () => {
  const arr = [1, 2, 3];
  const newArr1 = arr.concat(4, 5, 6);
  const newArr2 = arr.concat(4, "five", 6);
  const str = "Something";
  const newStr1 = str.concat(" ", "Anything");

  console.log(`arr = `, arr);
  console.log(`arr.concat(4, 5, 6): `, newArr1);
  console.log(`arr.concat(4, 'five', 6): `, newArr2);

  console.log("\n");

  console.log(`str = `, str);
  console.log(`str.concat(" ", "Anything"): `, newStr1);
};
// concatenate();

// slice() -- will take start index and end index then will return a return an array starting from that start index and ending at the end index
// arr1.slice(1, 4) -- start at index 1 and end before 4 -- [2, 3, 4]
// const arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.slice(3, 5));

// splice() -- will take start index and the number of elements you want to pluck out of an array.
// and will remove those elements from original array and return new array of those numbers

// splice can also be used to replace elements

const arr = [1, 2, 3, 4, 5, 6];
function spliceCheck() {
  console.log(`before splice()`);
  console.log(`arr = [${arr}]`);
  console.log("\n");

  console.log(`after splice()`);
  const newArr = arr.splice(2, 3);
  console.log(`arr = [${arr}]`);
  console.log(`newArr = [${newArr}]`);
}
// spliceCheck();

function replaceWithSplice() {
  console.log(`arr = [${arr}]`);
  console.log("replacing elements with splice()");
  const newArr = arr.splice(3, 2, 40, 50);
  console.log(`after replacing: arr = [${arr}]`);
}
// replaceWithSplice();

// splice cannot be used with strings it is an array function,
// use replace method with strings
const replaceStr = "Something";
console.log(replaceStr.replace("Some", "Any"));

//

// indexOf()
// will take an element and check if it is present at any index on array
// it will only return index of first occurrence of an element passed through argument
// arr.indexOf(4) --> 3
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(4));
// console.log("something".indexOf("thing"));  // return 4 the first occurence of letter t

// lastIndexOf()
// will only return the last occurrence of an element in the array or string
// const arr = [1, 2, 3, 3, 4, 5];
// console.log(arr.lastIndexOf(3)); // will return the last occurrence of element 3
