const para = document.querySelector("#factorial");

let num = prompt("Enter a valid number");
let fact = 1;

if (isNaN(num)) {
  alert("You did not enter a valid number");
  num = 0;
} else {
  num = Math.abs(num);
  if (num === 0 || num === 1) {
    fact = 1;
  } else {
    for (let i = 2; i <= num; i++) {
      fact = fact * i;
    }
  }
}
para.innerText = `${num} factorial = ${fact}`;

//

/* Factorial Number formula
5 , 5 x 4 x 3 x 2 x 1
4 , 4 x 3 x 2 x 1
3 , 3 x 2 x 1 
2 , 2 x 1
1 , 1
0 , 1
*/
