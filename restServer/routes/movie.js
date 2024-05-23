const express = require("express");
const router = express.Router();

const path = "C:\\Users\\admin\\Desktop\\react_KSH"

const mysql = require("../mysql");
const multer = require('multer');

const upload = multer({ dest: path});

const sql = {
    movieList : "select * from movie order by mRank",
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
router.post("/", upload.single('movieImgFile'), async (req, res) => {
    //const customer = {name:req.body.name, email:req.body.email, phone:req.body.phone, address:req.body.address};
    console.log(req.file);

    const data = req.body
    if(req.file){
        data.movieImg= req.file.filename;
    }
    let result = await mysql.query(sql.movieInst, data);
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