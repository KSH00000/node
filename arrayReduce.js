//filename: arrayReduce.js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0; //초기값 0
const sumWithInitial = array1.reduce(
  //(a, b) => { return a + b},
  function(a,b){ return a + b},
  initialValue,
);
console.log(sumWithInitial);
// Expected output: 10

emps = [ {name:'park', age:20, point : 100 }, 
         {name:'choi', age:26, point : 200 },
         {name:'kim', age:10, point : 150 },
]

let basePoint = 1000;
const totalPoint = emps.reduce(
    (a,b) => a + b.point, //a는저장할변수 b는 배열의요소({name:'park', age:20, point : 100 }) => a라는변수에 b.point를 하나씩+하겠다
    basePoint,
)
console.log(totalPoint);