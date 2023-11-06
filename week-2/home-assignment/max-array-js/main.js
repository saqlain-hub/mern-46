const arrayP = document.querySelector("#array-p");
const maxP = document.querySelector("#max-p");

let arr = [104, 103, 89, 110];
arrayP.innerText = `arr = [ ${arr.map((item) => ` ${item} `)} ]`;

let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  } else {
    continue;
  }
}

maxP.innerText = `Max = ${max}`;
