const para = document.querySelector("p");

let isPrime = true;
let num = prompt("Enter a valid number");

if (isNaN(num) || num === "" || num === null) {
  alert("Enter a valid number");
  num = 1;
} else {
  num = Math.abs(num);
}

if (num === 1 || num === 2) {
  isPrime = true;
} else {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }
}

if (isPrime) {
  console.log(num, "is prime");
  para.innerText = `${num} is a Prime Number`;
} else {
  console.log(num, "is not prime");
  para.innerText = `${num} is a not Prime Number`;
}
