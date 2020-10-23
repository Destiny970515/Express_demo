const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

// 配置 cookieParser 中间件
app.use(cookieParser("Destiny"));

app.get("/", (req, res) => {
  
  // maxAge 的使用
  // res.cookie("username", "zhangsan", {maxAge: 1000*60*60})
  
  // path 的使用
  // res.cookie("username", "zhangsan", {maxAge: 1000*60*60, path: "/login"})
  
  // domain 的使用（多个域名共享cookie）
  // res.cookie("username", "zhangsan", {maxAge: 1000*60*60, domain: ".itying.com"})

  // cookie 使用中文
  // res.cookie("username", "张三", {maxAge: 1000*60*60})
  
  /*
   * cookie 使用加密步骤
   * 
   * 1、配置 cookie-parser 中间件的时候需要传入加密的参数
   *    app.use(cookieParser("Destiny"));
   * 2、设置 cookie 的时候 设置 signed：ture
   *    res.cookie("username", "张三", {maxAge: 1000*60*60, signed: true})
   * 3、获取加密 cookie 的时候要使用 signedCookie
   *    
  */ 
  res.cookie("username", "张三", {maxAge: 1000*60*60, signed: true})


  res.send("首页");
})

app.get("/login", (req, res) => {
  // 获取cookie
  let username = req.cookies.username;
  res.send("登录页面" + username);
})

app.get("/user", (req, res) => {
  // 获取加密 cookie
  let username = req.signedCookies.username;
  res.send("用户页面" + username);
})


app.listen(80);