const express = require("express");
const router = express.Router();
const tools = require("../../modle/tools");

const cpUpload = tools.multer().fields([
  {
    name: "pic1",
    maxCount: 1
  },
  {
    name: "pic2",
    maxCount: 1
  }
]);

router.get("/", (req, res) => {
  res.send("admin 用户列表")
})
router.get("/add", (req, res) => {
  res.render("admin/user/add")
})
router.post("/doAdd", cpUpload, (req, res) => {
  // 获取表单数据
  // let body = req.body;
  res.send({
    body: req.body,
    files: req.files
  });
})

module.exports = router;