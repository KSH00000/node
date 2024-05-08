//filename:arrayFilter.js
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
//age가 20이상인 회원만 필터링
emps = [ {name:'park', age:20 }, 
         {name:'choi', age:26 },
         {name:'kim', age:10 },
]
const member = emps.filter((a) => a.age >= 20);

console.log(member);