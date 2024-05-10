const express = require("express");
const router = express.Router();

const mysql = require("../mysql");

const sql = {
    todoList : "select * from todo",
    todoInst : "insert into todo set ?",
    todoDele : "delete from todo where id=?",
    todoUpdt : "update todo set ? where id=?"
}

//전체조회
router.get("/", async (req, res) => {
    let result = await mysql.query(sql.todoList);
    res.send(result);
});
//등록
router.post("/", async (req,res) => {
    let result = await mysql.query(sql.todoInst,req.body);
});
//삭제
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    let result = await mysql.query(sql.todoDele,id);
    res.send(result);
});
//수정(체크)
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    let result = await mysql.query(sql.todoUpdt, [req.body.complete,id]);
    res.send(result);
});

module.exports = router;