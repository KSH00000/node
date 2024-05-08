/* fsyncSync.js
동기식 = 블록킹 함수
*/
const fs = require("fs"); //html <script src='xxx.js'>
let data = fs.readFileSync("test.txt", "utf8");
console.log(data);         //1
console.log("the end");    //2