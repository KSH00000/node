/* fs.js
비동기식 = non-blocking 함수 => 콜백함수이용
*/
const fs = require("fs");
fs.readFile("test.txt", "utf8", (err,data) => console.log(data)); //1
console.log("the end");                                           //2
