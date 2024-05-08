//filename: server.js

//movie.js임포트
const movie = require("./movie")

//1. http 모듈포함

const http = require ("http");

// 2. http 서버 생성
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "application/json"});
    (async () => {
        let movieNm = await movie();
        let m = {movieNm:movieNm, movieCd:1}
        res.end(JSON.stringify(m)); 
    })();    
});

//3.지정된 포트및 호스트이름으로 수신대기
//4. 서버가 준비되면 콜백함수 호출
server.listen(3000, "127.0.0.1", ()=> {
    console.log("server running http://127.0.0.1:3000")
});
