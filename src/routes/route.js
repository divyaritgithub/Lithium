const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware= require("../middleware/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users",userController.createUser)

router.post("/login",userController.loginUser)

router.get("/users/:userId",middleware.authenticate,userController.getUserData)

router.put("/users/:userId",middleware.authenticate,middleware.authorise,userController.updateUser)

router.delete('/users/:userId',middleware.authorise,middleware.authenticate,userController.deleteUser)

module.exports = router