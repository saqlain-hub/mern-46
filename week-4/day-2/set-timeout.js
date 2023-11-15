// the setTimout takes two arguments a callback and a the amount of time it should wait
// after that period of time it will run the code for once.
// the second argument is passed in milliseconds
// setTimeout(callback, 3000) ---- the code in callback will run after 3 seconds or 3000 milliseconds
// it is syncrhonous and blocking function it will block the rest of the code.

// setTimeout(() => {
//   console.log("hello");
// }, 3000);

const callbackfx = function () {
  console.log("Something");
};
setTimeout(callbackfx, 3000);

setTimeout(hello, 3000);
function hello() {
  console.log("Hello");
}
