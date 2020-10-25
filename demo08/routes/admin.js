const express = require("express");
const router = express.Router();
const nav = require('./admin/nav');

router.get("/", (req, res) => {
  res.send("后台管理首页");
})

router.use("/nav", nav);


module.exports = router;