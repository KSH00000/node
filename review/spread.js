//filename: spread.js

// ...
let arr1 = [1,2,3];
let arr2 = [1,2,3];
let arr3 = arr1;
let arr4 = arr1.map( (a) => a)
let arr5 = [...arr1];
console.log(arr5);
arr5[0] = 200;
console.log(arr1);
console.log(arr5);

let arr6 = { ...arr1, ...arr2} //요소갯수 6개
let arr7 = { arr1, ...arr2} // 요소갯수 4개
console.log(arr7[0][0]);