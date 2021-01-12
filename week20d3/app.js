// const hello = require("./test");
// import done, { hello } from "./test.js";
// const app = () => "hello";
// console.log(done);

// const isPrime = (n) => {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// for (let i = 0; i <= 10; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

// commonjs
// module

function timer() {
  for (var i = 0; i <= 5; i++) {
    (function (i) {
      setTimeout(function clog() {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}
timer();
