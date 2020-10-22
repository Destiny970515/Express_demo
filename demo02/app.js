const express = require('express');
const ejs = require("ejs");
const app = express();

// 配置模板引擎
app.set("view engine", "ejs")

// 托管静态资源
app.use(express.static("static"));


app.get("/", (req, res) => {
  let title = "你好Ejs"
  res.render("index", {
    title:title
  });
});

app.get("/news", (req, res) => {
  let userinfo = {
    username: "李四",
    age: 21
  }
  let article = "<h3>我是一个h3</h3>";
  let list = [
    {
      name: "javascript",
      price: "￥99"
    },
    {
      name: "php",
      price: "￥20"
    }
  ]

  res.render("news", {
    userinfo:userinfo,
    article: article,
    flag: true,
    list: list
  });
});



app.listen(3000);