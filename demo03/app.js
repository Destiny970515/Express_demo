const express = require("express");
const ejs = require("ejs");

// 第三方中间件 body-parser
const bodyParser = require("body-parser");

const app = express();

// 配置第三方中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// 配置模板引擎
app.engine("html", ejs.__express);
app.set("view engine", "html");

// 内置中间件（可以配置静态web目录）
app.use(express.static("static"));

// 应用级中间件（用于权限判断）
app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.send("首页")
})

app.get("/login", (req, res) => {
  // req.query 获取get传值
  res.render("login", {});
})

app.post("/doLogin", (req, res) => {
  // 通过 第三方中间件（body-parser） req.body 获取post传值
  let body = req.body;
  console.log(body);
  res.send("执行提交" + body.username);
})


// 路由级中间件 (用的比较少)
app.get("/news/add", (req, res, next) => {
  console.log("访问/news/add");
  next();
});
app.get("/news/:id", (req, res) => {
  res.send("访问动态路由news");
});

// 错误处理中间件（用于路由匹配完成时）
app.use((req, res, next) => {
  res.status(404).send("404");
});



app.listen(3000);