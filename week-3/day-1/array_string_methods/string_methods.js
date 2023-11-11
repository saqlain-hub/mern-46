// String Methods
// JavaScript supports multi-paradigm programming but the most preferred way is functional programming these string functions provide ease of performing tasks without rewriting the same logic again and again.

// startsWith()
// will return true or false if a certain string starts with certain character sequence passed in as the arguments to this function
// it is case-sensitive.

function checkStartsWith() {
  const str = "Some String";
  const startsWith1 = str.startsWith("some");
  const startsWith2 = str.startsWith("Some");
  console.log(`str = '${str}'`);
  console.log("str.startsWith('some'): ", startsWith1);
  console.log("str.startsWith('Some'):", startsWith2);
}
// checkStartsWith();

//

// endsWith()
// will return true or false if a certain string ends with certain character sequence passed in as the arguments to this function
// it is a case-sensitive function

function checkEndsWith() {
  const str = "Something ends with something";
  const endsWith1 = str.endsWith("something");
  const endsWith2 = str.endsWith("Something");

  console.log(`str = '${str}'`);
  console.log("str.endsWith('something'): ", endsWith1);
  console.log("str.endsWith('Something'):", endsWith2);
}
// checkEndsWith();

//

// includes()
// will return true or false a certain string contains a sequence of character within it.
// it is case-sensitive

const doesIncludes = () => {
  const str = "Does this string includes something";
  const includes1 = str.includes("something");
  const includes2 = str.includes("Something");

  console.log(`str = '${str}'`);
  console.log("str.includes('something'): ", includes1);
  console.log("str.includes('Something'):", includes2);
};

// doesIncludes();

// slice()
// will take an element or a sequence of elements from a string, provided that it is given at least two arguments a start index and an end index,
// slice(1, 5)  --- it will start from index 1 till 5 but will not include 5
// slice(-1) --- will return the sequence from the end of string

const slices = () => {
  const str = "Some string that has to be sliced";
  const newStr1 = str.slice(0, 5);
  const newStr2 = str.slice(-1);
  console.log(`str = '${str}'`);
  console.log(`newStr1 = str.slice(0, 5): ${newStr1}`);
  console.log(`newStr2 = str.slice(-1): ${newStr2}`);
};

// slices();

//toUpperCase()
// will transform a sequence of characters to uppercase
// will return a new string because strings are immutable will not affect the original string

function changeCase() {
  const str1 = "convert me to uppercase";
  const uppercase = str1.toUpperCase();

  console.log(`str1 = '${str1}'`);
  console.log(`str1.toUppercase(): ${uppercase}`);

  console.log("\n");

  const str2 = "CONVERT ME TO LOWERCASE";
  const lowercase = str2.toLowerCase();
  console.log(`str2 = '${str2}'`);
  console.log(`str2.toLowercase(): ${lowercase}`);
}

// changeCase();

//

// charAt()
// will take an index and check if there is an element available on that index if it does it will return that one character from a string
// charAt(index)
// if the element is not present at specified index it will return "" or empty string.

function checkCharAt() {
  const str = "It might be there or it might not be there";
  const charat1 = str.charAt(5);
  const charat2 = str.charAt(10);
  const charat3 = str.charAt(50);

  console.log(`str = '${str}'`);
  console.log(`str.charAt(5): ${charat1}`);
  console.log(`str.charAt(10): ${charat2}`);
  console.log(`str.charAt(50): ${charat3}`);
}

// checkCharAt();

//

// split()
// will return an array of the same string if the provided character is not found to split by or it will return all elements splitted by a certain character in string
// split("") -- will return an array that contains each individual elements as characters in array
// split(" ") -- will check for a space and will return character or sequence of characters in array
// split(",") -- will check for occurrence of a comma and will split a string on the occurrence of a comma
// split("=") == if a certain sequence does not match it will return the whole string as one array element

function checkSplit() {
  const str = "First you divide them then you conquer them and then rule them";
  const str2 = "comma,separated,string";
  const split1 = str.split("");
  const split2 = str.split(" ");
  const split3 = str.split("=");

  const split4 = str2.split(",");

  console.log(`str = '${str}'`);
  console.log("\n");
  console.log(`str.split(""): `, split1);
  console.log("\n");
  console.log(`str.split(" "): `, split2);
  console.log("\n");
  console.log(`str.split("="): `, split3);

  console.log("\n");
  console.log(`str2 = '${str2}'`);
  console.log(`str2.split(","): `, split4);
}

// checkSplit();

//

// replace()
// will take at least two parameters one sequence of character that you need to replace and the other sequence of character that you want to replace with.
// replace("Hate", "Love") - will replace "Hate" with "Love"
// it is case-sensitive

function checkReplace() {
  const str = "Divide, Conquer and Rule";
  const replace1 = str.replace("Divide", "Love");
  const replace2 = str.replace("divide", "Love");

  console.log(`str = '${str}'`);
  console.log(`str.replace("Divide", "Love"): `, replace1);
  console.log(`str.replace("divide", "Love"): `, replace2);
}

// checkReplace();

//repeat()
// will return a certain string repated the number of times passed in the argument
// if the 0 value is passed it will return nothing

function checkRepeat() {
  const str = "Something will repeat";
  console.log(str.repeat());
  console.log(str.repeat(1));
  console.log(str.repeat(2));
  console.log(str.repeat(3));
}

// checkRepeat();
