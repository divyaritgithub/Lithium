const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
});
router.get("/bookList", BookController.bookList)

router.post("/createBook", BookController.createBook  )
router.get("/getBooksInYear", BookController.getBooksInYear  )

router.get("/getParticularBooks", BookController.getParticularBooks)
router.get("/getXINRBooks",BookController.getXINRBooks)
router.get("/getRandomBooks",BookController.getRandomBooks)
module.exports = router; 