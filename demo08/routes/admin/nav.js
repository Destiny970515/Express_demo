const express = require("express");
const router = express.Router();
// const upload = multer({ dest: "static/upload" }) // 上传文件前 目录 必须存在
const tools = require("../../modle/tools");
router.get("/", (req, res) => {
  res.send("admin 导航")
})

router.get("/add", (req, res) => {
  res.render("admin/nav/add")
})
router.post("/doAdd",tools.multer().single("pic") ,(req, res) => {
  // 获取表单数据
  // let body = req.body;
  res.send({
    body: req.body,
    file: req.file
  });
})

module.exports = router;