//filename: mysql.js
//mysql 연결 및 쿼리 실행 테스트
//mysql 모듈 로드
const mysql = require("mysql2");

//mysql 접속 정보
const conn = { host: "192.168.0.9",
               port: "3306",
               user: "hr",
               password: "hr",
               database: "test",
               connectionLimit: 10,
};

//DB 커넥션 생성
// let connection = mysql.createConnection(conn);
//console.log(connection);

//DB 접속체크
// connection.connect((err) => {
//     if(err){
//         console.log("error connection" + err.stack);
//         return;
//     }
// });

//DB 커넥션 생성
let pool = mysql.createPool(conn);
module.exports = pool;