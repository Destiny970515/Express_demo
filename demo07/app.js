const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const login = require("./routes/login");

const app = express();

// 配置模板引擎
app.engine("html", ejs.__express);
app.set("view engine", "html");

// 配置静态 web 目录
app.use(express.static("static"));

// 配置第三方中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 挂载 login 模块
app.use("/login", login);

app.get("/", (req, res) => {
  res.send("首页");
})

app.listen(3000);