const express = require("express");
const pool = require("./mysql");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello world!");
});

//전체조회 : path variable => GET, req.params
app.get("/customer", (req, res) => {      

    //SQL 실행
    sql = "SELECT * FROM customer";
    pool.query(sql, function (err, results, fields) {
    if (err){
        console.log(err);
    }
    //결과처리
    console.log(results);
    res.send(results);
});

//DB 접속종료
// connection.end();
//     res.send({cmd:"고객정보 조회",no});
});

//단건조회 : path variable => GET, req.params
app.get("/customer/:id", (req, res) => {
    const id = req.params.id;
 
        //SQL 실행
        sql = "select * from customer where id=" + id;
        pool.query(sql, function (err, results, fields) {
        if (err){
            console.log(err);
        }
        //결과처리
        console.log(results);
        res.send(results);  
        })
});

// 등록 POST, req.body
app.post("/customer", (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    //SQL 실행
    sql = `insert into customer (name, email, phone, address)
    values ("${name}", "${email}", "${phone}", "${address}")`;
    pool.query(sql, function (err, results, fields) {
    if (err){
        console.log(err);
    }
    //결과처리
    console.log(results);
    res.send(results);  
    })
});

//수정 PUT , json => req.body
app.put("/customer/:id", (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    //SQL 실행
    sql = `update customer set name = "${name}", email = "${email}", phone = "${phone}", address = "${address}" where id=`+ id;
    pool.query(sql, function (err, results, fields) {
    if (err){
        console.log(err);
    }
    //결과처리
    console.log(results);
    res.send(results);  
    })
});

//삭제 
app.delete("/customer/:id", (req, res) => {
    const id = req.params.id;
    //SQL 실행
    sql = "delete from customer where id="+ id;
    pool.query(sql, function (err, results, fields) {
    if (err){
        console.log(err);
    }
    //결과처리
    console.log(results);
    res.send(results);  
    })
});

app.listen(port, () => {
    console.log(`server runing http://localhost:${port}`);
})