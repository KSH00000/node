//mysql 모듈 로드
const mysql = require("mysql2");

//mysql 접속정보
const conn = {
    host: "localhost", //192.168.56.1
    port: "3306",
    user: "hr2",
    password: "4567",
    database: "hr2",
    connectionLimit: 10,
    timezone:"Asia/Seoul",
    dateStrings:"true",
};

//DBCP 커넥션 생성
let pool = mysql.createPool(conn);

const query = (sql, values) => {
    return new Promise( (resolve, reject) => {
        pool.query(sql, values, (err, results) => {
            if(err){ 
                console.log(err);
                reject(err);
            }
            resolve(results);
        });
    });
};

//require 할때도 {pool} = require로 작성
module.exports = {pool,query}; 

//module.exports = query;