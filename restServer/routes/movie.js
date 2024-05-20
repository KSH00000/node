const express = require("express");
const router = express.Router();

const mysql = require("../mysql");

const sql = {
    movieList : "select * from movie",
    movieInfo : "select * from movie where movieCd=?",
    movieInst : "insert into movie set ?",
    movieUpdt : "update movie set ? where movieCd=?",
    movieDel : "delete from movie where movieCd=?"
}

//전체조회
router.get("/", async (req, res) => {
    let result = await mysql.query(sql.movieList);
    res.send(result);
 });
//단건조회
router.get("/:movieCd", async (req, res) => {
    const movieCd = req.params.movieCd;
    let result = await mysql.query(sql.movieInfo,movieCd);
    res.send(result);
});
//등록 req.body
router.post("/", async (req, res) => {
    //const customer = {name:req.body.name, email:req.body.email, phone:req.body.phone, address:req.body.address};
    let result = await mysql.query(sql.movieInst, req.body);
    if(result.affectedRows == 1){
        res.send(true);
    } else{
        res.send(false);
    }
});
//수정 req.body req.params.id
router.put("/:movieCd", async (req, res) => {
    const movieCd = req.params.movieCd;
    let result = await mysql.query(sql.movieUpdt,[req.body,movieCd]);
    res.send(result);
});

//삭제 req.params.id
router.delete("/:movieCd", async (req, res) => {
    const movieCd = req.params.movieCd;
    let result = await mysql.query(sql.movieDel,movieCd);
    res.send(result);
});

module.exports = router;