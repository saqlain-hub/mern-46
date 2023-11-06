const arrayP = document.querySelector("#array-p");
const minP = document.querySelector("#min-p");

let arr = [104, 103, 89, 110];
arrayP.innerText = `arr = [ ${arr.map((item) => ` ${item} `)} ]`;

let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  } else {
    continue;
  }
}

minP.innerText = `Min = ${min}`;
