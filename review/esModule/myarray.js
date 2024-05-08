let emps = [ {name:'park', age:20, point : 100 }, 
             {name:'choi', age:26, point : 200 },
             {name:'kim', age:10, point : 50 },
]

//emps의 point 필드의 합계
function totalPoint(){
    return emps.reduce((a,b) => a + b.point,0,)
};

//totalPoint 함수만 노출
export{totalPoint}