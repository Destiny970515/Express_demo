const multer = require("multer");
const path = require("path");
const sd = require('silly-datetime');
const mkdirp = require('mkdirp');

let tools = {
  multer() {
    const storage = multer.diskStorage({
      destination: async (req, file, cb) => {
        // 1、获取当前日期
        let day = sd.format(new Date(), 'YYYYMMDD')
        let dir = path.join("static/upload", day);
        console.log(dir);
        // 2、按照日期生成图片存储目录 mkdirp是一个异步方法
        await mkdirp(dir)
        // 3、设置上传文件目录
        cb(null, dir)
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