// const {query} = require("./index");

// function insert(){
//     query();
// }

const mysql = require("./index");


//전체조회
// async function selectAll(){
//     const sql = "select * from customer";
//     const result = await mysql.query(sql);
//     console.log(result);
// }

const selectAll = async () =>{
    const sql = "select * from customer";
    const result = await mysql.query(sql);
    console.log(result);
}

// mysql.query(sql)
//     .then(res => console.log(result));

//단건조회
const selectInfo = async () => {
    const sql = "select * from customer where id=?";
    const id = 1;
    const result = await mysql.query(sql,id);
    console.log(result);
}        

//selectAll();         //hoisting
selectInfo();
