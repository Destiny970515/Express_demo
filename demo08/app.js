const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();

// 引入外部 routes 模块
const index = require("./routes/index");
const admin = require("./routes/admin");
const api = require("./routes/api");

// 配置模板引擎
app.engine("html", ejs.__express);
app.set("view engine", "html");

// 配置静态 web 目录
app.use(express.static("static"));

// 配置 body-parser 中间件获取 post 提交的数据
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// 配置路由模块
app.use("/", index);
app.use("/admin", admin);
app.use("/api", api);

app.listen(3000);