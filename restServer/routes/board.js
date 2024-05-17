const express = require("express");
const router = express.Router();

const mysql = require("../mysql");

const sql = {
    boardList : "select * from board",
    boardInst : "insert into board set ?",
    boardDele : "delete from board where id=?",
    boardUpdt : "update board set ? where id=?"
}

//전체조회
router.get("/", async (req, res) => {
    let result = await mysql.query(sql.boardList);
    res.send(result);
});
//등록 req.body
router.post("/", async (req,res) => {
    let result = await mysql.query(sql.boardInst,req.body);
    res.send(result);
});
//삭제 req.body, req.param.id
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    let result = await mysql.query(sql.boardDele,id);
    res.send(result);
});
//수정(체크) req.params.id
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    let result = await mysql.query(sql.boardUpdt, [req.body,id]);
    res.send(result);
});

module.exports = router;