const express = require("express");
const router = express.Router();

const mysql = require("../mysql");

const sql = {
    reviewList : "select * from review",
    reviewInfo : "select * from review where rwNum=?",
    reviewInst : "insert into review set ?",
    reviewUpdt : "update review set ? where rwNum=?",
    reviewDel : "delete from review where rwNum=?"
}

//전체조회
router.get("/", async (req, res) => {
    let result = await mysql.query(sql.reviewList);
    res.send(result);
 });
//단건조회
router.get("/:rwNum", async (req, res) => {
    const rwNum = req.params.rwNum;
    let result = await mysql.query(sql.reviewInfo,rwNum);
    res.send(result);
});
//등록 req.body
router.post("/", async (req, res) => {
    //const customer = {name:req.body.name, email:req.body.email, phone:req.body.phone, address:req.body.address};
    let result = await mysql.query(sql.reviewInst, req.body);
    if(result.affectedRows == 1){
        res.send(true);
    } else{
        res.send(false);
    }
});
//수정 req.body req.params.id
router.put("/:id", async (req, res) => {
    const rwNum = req.params.rwNum;
    let result = await mysql.query(sql.reviewUpdt,[req.body,rwNum]);
    res.send(result);
});

//삭제 req.params.id
router.delete("/:rwNum", async (req, res) => {
    const rwNum = req.params.rwNum;
    let result = await mysql.query(sql.reviewDel,rwNum);
    res.send(result);
});

module.exports = router;