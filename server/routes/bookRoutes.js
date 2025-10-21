const express=require('express');
const router=express.Router();
const {
    createBook,
    getBooks,
    getBooksById,
    updateBook,
    deleteBook,
    updateBookCover,
}=require("../controller/bookController");

const {protect}=require("../middlewares/authMiddleware");
const upload=require("../middlewares/uploadMiddleware");

router.use(protect);

router.route("/").post(createBook).get(getBooks);
router.route("/:id").get(getBooksById).put(updateBook).delete(deleteBook);
router.route("/cover/:id").put(upload,updateBookCover);

module.exports=router;