const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const app = express();

// 配置 session 的中间件
app.use(session({
  secret: "this is session",  // 用于生成 session 服务器端的签名
  resave: false,              // 强制保存 session 即使它并没有变化
  saveUninitialized: true,    // 强制将未初始化的 session 存储
  name: "Destiny",            // 修改 session 对应 cookie 的名称
  cookie: {                   // 配置 cookie
    maxAge: 1000*60*60,       // 设置 cookie 过期时间
    secure: false             // true 表示只有 https 协议才能访问 cookie
  },
  rolling: true,              // 在每次请求时强行设置 cookie, 这将重置 cookie 过期时间（默认：false）
  store: new MongoStore({
    url: "mongodb://127.0.0.1:27017/shop",
    touchAfter: 24 * 3600 // 不管发出多了多少请求 在24小时内只更新一次 session 除非你改变了这个 session
  }),
}));

app.get("/", (req, res) => {
  // 获取 session
  if (req.session.username) {
    res.send(req.session.username + "，已登录");
  } else {
    res.send(req.session.username + "，未登录");
  }
})

app.get("/login", (req, res) => {
  // 设置 session
  req.session.username = "张三"
  res.send("执行登录");
})

app.get("/loginOut", (req, res) => {
  // 1、设置 session 的过期时间为 0 （不建议使用，如果存在多个 session 的时候，会把所有 session 都销毁）
  // req.session.cookie.maxAge = 0;
  
  // 2、销毁指定 session (常用)
  // req.session.username = ""

  // 3、销毁所有 session destroy
  req.session.destroy((err) => {

  });

  res.send("退出登录");
})

app.listen(3000);