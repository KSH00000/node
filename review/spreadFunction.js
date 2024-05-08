//filename: spreadFunction.js

function hap(first, ...rest){ //rest가 배열이므로 first를 초기값으로두고 rest의 배열값들을 더하기
 return rest.reduce(
    (a,b) => a+b,
    first,
  )
 
}
console.log(hap(10,20,30,40));

function hap2(first, ...rest){
    let total = first;
    for(value of rest){  //rest배열의 밸류값을 total에 하나씩더하기
      total = total + value;
    }
    return total;
}
console.log(hap2(10,20,30,40,50));

emps = [ {name:'park', age:20, point : 100 }, 
         {name:'choi', age:26, point : 200 },
         {name:'kim', age:10, point : 150 },
]
//첫번째 사원의이름
let [emp1,emp2,emp3] = emps;
console.log(emp1.name);

//object 분해
const {name, age} = emp1;
console.log(name);

const {empname} = {empname:'park', age:20, point : 100 };
// Object.empname  ---> empname

const arr = [1,2,3];
const [a,b,...c] = [1,2,3];
// arr[0] -----> a