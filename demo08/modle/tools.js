const multer = require("multer");
const path = require("path");

let tools = {
  multer() {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "static/upload")
      },
      filename: (req, file, cb) => {
        // 获取后缀名
        let extname = path.extname(file.originalname);
        // console.log(extname);
        cb(null, file.fieldname + '-' + Date.now() + extname);
      }
    })
    const upload = multer({ storage: storage });

    return upload;    
  },
  md5() {}
}

module.exports = tools;