const para = document.querySelector("p");

let num = prompt("Enter a valid number");

if (isNaN(num) || num === "" || num === null) {
  alert("Enter a valid number");
  num = 1;
} else {
  num = Math.abs(num);
}

let sum = 0;

for (let i = 1; i <= num; i++) {
  sum = sum + i;
}

para.innerText = `Sum of ${num} N Numbers = ${sum}`;

console.log(sum);
