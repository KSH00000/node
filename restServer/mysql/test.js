//test.js
const pool = require("./index");

//selectInfo();
//insert();
//update();
//deleteInfo();

//삭제
function deleteInfo(){
    const sql = "delete from customer where id=?"
    const id = 4;
    pool.query(sql, id, (err,result) => {
        if(err) { console.log(err)}
        console.log(result);
    })
}
//수정
function update(){
    const sql = "update customer set ? where id=?";
    const customer = {address:'부산', phone:'010111'};
    const id = 1;
    pool.query(sql, [customer,id], (err, result) => {
        if(err){ console.log(err)}
        console.log(result);
    })
}
//등록
function insert(){
    const sql = "insert into customer set ?";
    const customer = {name: '도롱뇽', email:'test11', phone:'333', address:'카이로'};
    pool.query(sql, customer, (err, result) => {
        if(err){ console.log(err)}
        console.log(result);
    });
};
//단건조회
function selectInfo(){
    const sql = "SELECT * FROM customer where id=?";
    const id = 1;
    pool.query(sql, id, (err, result) => {
        if(err) { console.log(err)}
        console.log(result);
    });
};

//SQL 실행
function selectAll(){
const sql = "SELECT * FROM customer";
pool.query(sql, function (err, results) { //fields안쓰면 빼도됨
    if (err){console.log(err); }
    //결과처리
    console.log(results);
})
}