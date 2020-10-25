const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("footer内容");
})
router.get("/gongsi", (req, res) => {
  res.send("footer公司内容");
})
module.exports = router;