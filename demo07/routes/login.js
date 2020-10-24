const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login", {});
});

router.post("/doLogin", (req, res) => {
  let body = req.body;
  console.log(body);
  res.send("执行提交" + body.username);
});

module.exports = router;