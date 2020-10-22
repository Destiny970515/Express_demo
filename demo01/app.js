const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("你好 express !");
});
app.get("/article", (req, res) => {
  res.send("新闻页面");
});


app.get("/login", (req, res) => {
  res.send("登陆页面");
});
app.post("/register", (req, res) => {
  res.send("注册成功");
});
app.put("/editUser", (req, res) => {
  res.send("修改用户成功");
});
app.delete("/deleteUser", (req, res) => {
  res.send("删除用户成功");
});

// 路由里面可以配置多级目录
app.get("/admin/user/add", (req, res) => {
  res.send("admin user add");
}); 
app.get("/admin/user/edit", (req, res) => {
  res.send("admin user edit");
}); 

// 动态路由  
app.get("/article/:id", (req, res) => {
  let id = req.params["id"] // 获取动态路由传值
  res.send("动态路由"+ id);
});

// get 传值
app.get("/product", (req, res) => {
  let query = req.query; // 获取 get 传值
  console.log(query);
  res.send(query);
});



app.listen(3000)