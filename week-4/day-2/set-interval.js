let i = 1;
const intervalId = setInterval(() => {
  console.log(i);
  i += 1;
  if (i === 20) {
    i = 0;
    clearTimeout(intervalId);
  }
}, 1000);
