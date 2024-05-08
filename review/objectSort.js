//filename : objectSort.js
emps =[ {name:'park', age:20 }, 
        {name:'choi', age:26 },
        {name:'kim', age:10 },
]
//age로 정렬
emps.sort((a,b) => a.age - b.age); //return값은 항상 숫자로  양수, 음수, 0
console.log(emps);
//name 정렬
emps.sort((a,b) => a.name > b.name ? 1 : a.name == b.name ? 0 : -1); //a.name > b.name만 하면 return이 boolean
console.log(emps);
