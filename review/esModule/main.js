//모듈전체 import  -> as 객체 이름지정
// import * as md from "./module.js";
// md.module("전체 module run");
// md.modulea("전체 module run");

//2.필요한것만
// import {module} from "./module.js";
// module("전체 module run");

// import {movie} from "../promise_await.js";
// movie()

//1. myarry 모듈을 임포트
import {totalPoint} from "./myarray";
//2.함수 실행
let result = totalPoint();
console.log(result);