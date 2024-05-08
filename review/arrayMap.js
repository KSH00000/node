//filename : arrayMap.js
let arr = [1, 4, 9];
let arr2 = arr.map( x => x * 2);
console.log(arr2[0]);
emps = [ {name:'park', age:20 }, 
         {name:'choi', age:26 },
         {name:'kim', age:10 },
]
let emps2 = emps.map( a => {
    a.age >= 20 ? a.auth = true : a.auth = false; //if문 (조건) ? (true일때) : (false일때)
    return a});
console.log(emps2);

