// 1. http 모듈 포함
const http = require('http');
const url = require("url");
const hostname = '127.0.0.1';
const port = 3000;

let emps = [ {no:100, name:'park', age:20 }, 
             {no:101, name:'choi', age:26 },
             {no:102, name:'kim', age:10 },
]

// 2.서버 생성
const server = http.createServer((req, res) => { 
  const _url = url.parse(req.url, true)
  const pathname = _url.pathname;
  res.writeHead(200, {"Content-Type": "application/json"});
  if(pathname == '/emp'){
    res.end(JSON.stringify(emps))
  } else if(pathname == '/empInfo'){ //empInfo?no=100
    //filter
    res.end(JSON.stringify(emps.filter(a => a.no == _url.query.no)));
  } else if(pathname == '/empDelete'){ //empDelete?no=100
    //splice
    
    res.end(JSON.stringify(emps.splice(a,1) => { for(a=0; a<emps.length; a++){if(a+100 == _url.query.no){
}}
}));
  } else if(pathname == '/empInsert'){ //empInsert?no=104&name=hong&age=30
    //push
    res.end(JSON.stringify(emps)
  } else {
    res.statusCode = 404;
    res.end();
  }
});


// 3. 지정된 포트 및 호스트이름으로 수신 대기
server.listen(port, hostname, () => { 
    console.log(`Server running at http://${hostname}:${port}/`);
});