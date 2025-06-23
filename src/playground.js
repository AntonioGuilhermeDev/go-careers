setTimeout(() => {
  console.log("I will print 2 seconds after the program starts");
}, 2000);

/*
setInterval(() => {
  console.secondslog("I will print every 2 ");
}, 2000);
*/

const interval = setInterval(() => {
  console.log("I will print every 2 seconds");
}, 2000);

setTimeout(() => {
  clearInterval(interval);
}, 10000);
