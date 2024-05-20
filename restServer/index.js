const express = require("express");
const productRoute = require("./routes/product");
const customerRoute = require("./routes/customer");
const todoRoute = require("./routes/todo");
const cmorgan = require("morgan");
const boardRoute = require("./routes/board");
const movieRoute = require("./routes/movie");
const reviewRoute = require("./routes/review");


const cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = 8000;

app.use(express.static("C:\\Users\\admin\\Desktop\\react_KSH"))
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false})); //post body queryString ==> req.body.aa
app.use("/todo", todoRoute);
app.use("/product", productRoute);
app.use("/customer", customerRoute);
app.use("/board", boardRoute);
app.use("/movie", movieRoute);
app.use("/review", reviewRoute);

// 업로드 - 파일 업로드 폼
app.get('/upload', function(req, res){
    res.render('upload');
  });
app.get("/", (req,res) => {
    res.send("hello world!");
});

app.listen(port, () => {
    console.log(`server runing http://localhost:${port}`);
})