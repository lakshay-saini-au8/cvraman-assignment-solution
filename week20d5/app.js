// const { addition, multiplication } = require("./calc");

// const res = addition(4, 5);
// const res1 = multiplication(4, 5);
// console.log(res, res1);

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.setHeader("Content-type", "application/json");
//     res.end(
//       JSON.stringify({
//         data: {
//           hello: "hi",
//         },
//       })
//     );
//   }
//   if (req.url === "/login") {
//     res.end("Login page");
//   }
// });
// const port = process.env.PORT || 8000;
// server.listen(port, console.log(`Server is runing at ${port}`));

// var arrayList = ["a", "b", "c", "d", "e", "f"];
// const data = {
//   name: "saman",
// };
// for (const item of arrayList) {
//   console.log(item);
// }
// arrayList = [];
// arrayList.slice
// console.log("orginal", arrayList);

// arrayList[20] = "asdfsdf";
// console.log("length", arrayList.length);
// console.log("data", arrayList[15]);

var bar = true;
console.log(+true);
console.log(bar + "xyz");
console.log(bar + true);
console.log(bar + false);
