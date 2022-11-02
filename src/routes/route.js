const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
//-------------------------------------------------
//const BooksController= require("../controllers/booksController")
const AuthorController= require("../controllers/authorController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//-----------------------------------------

 router.get("/priceRange",AuthorController.priceRange)
router.post("/createAuthor", AuthorController.createAuthor  )
router.get("/getBookByAuthor", AuthorController.getBookByAuthor)
router.post("/createBooks", AuthorController.createBooks  )
router.get("/getUpdate", AuthorController.getUpdate)


module.exports = router;