const express = require("express");
const router = express.Router();
const nav = require('./admin/nav');
const user = require('./admin/user');

router.get("/", (req, res) => {
  res.send("后台管理首页");
})

router.use("/nav", nav);
router.use("/user", user);


module.exports = router;