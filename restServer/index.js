const express = require("express");
const productRoute = require("./routes/product");
const customerRoute = require("./routes/customer");
const todoRoute = require("./routes/todo");
const cmorgan = require("morgan");

const cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false})); //post body queryString ==> req.body.aa
app.use("/todo", todoRoute);
app.use("/product", productRoute);
app.use("/customer", customerRoute);

app.get("/", (req,res) => {
    res.send("hello world!");
});

app.listen(port, () => {
    console.log(`server runing http://localhost:${port}`);
})