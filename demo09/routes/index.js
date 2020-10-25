const express = require("express");
const router = express.Router();
const footer = require("./index/footer");

router.get("/", (req, res) => {
  res.send("前台首页");
})
router.get("/login", (req, res) => {
  res.send("前台登陆页面");
})
router.get("/register", (req, res) => {
  res.send("前台注册页面");
})

router.use("/footer", footer);


module.exports = router;