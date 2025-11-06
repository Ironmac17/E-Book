const multer = require("multer");

const storage = multer.memoryStorage();

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(file.originalname.toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        cb(null, true);
    } else {
        cb("Error: Images only!");
    }
}

const upload = multer({
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
}).single("coverImage");

module.exports = upload;
