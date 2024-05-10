const express = require("express");
const router = express.Router();

const mysql = require("../mysql");

const sql = {
    customerList : "select * from customer",
    customerInfo : "select * from customer where id=?",
    customerInst : "insert into customer set ?",
    customerUpdt : "update customer set ? where id=?",
    customerDel : "delete from customer where id=?"
}

//전체조회
router.get("/", async (req, res) => {
    let result = await mysql.query(sql.customerList);
    res.send(result);
 });
//단건조회
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    let result = await mysql.query(sql.customerInfo,id);
    res.send(result);
});
//등록 req.body
router.post("/", async (req, res) => {
    //const customer = {name:req.body.name, email:req.body.email, phone:req.body.phone, address:req.body.address};
    let result = await mysql.query(sql.customerInst, req.body);
    if(result.affectedRows == 1){
        res.send(true);
    } else{
        res.send(false);
    }
});
//수정 req.body req.params.id
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    let result = await mysql.query(sql.customerUpdt,[req.body,id]);
    res.send(result);
});

//삭제 req.params.id
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    let result = await mysql.query(sql.customerDel,id);
    res.send(result);
});

module.exports = router;