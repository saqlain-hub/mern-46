const ul = document.querySelector(".table");

const num = prompt("Enter a number");
let numMulti;

if (num === "" || num === null || isNaN(num)) {
  alert("Please enter positive integer numbers");
} else {
  for (let i = 1; i <= 10; i++) {
    numMulti = num * i;

    const li = document.createElement("li");
    li.innerText = `${num} x ${i} = ${numMulti}`;
    ul.appendChild(li);
  }
}
