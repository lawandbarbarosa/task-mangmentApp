const express = require("express")

const {loginUser,signUpUser} = require("../controller/userController")

const router = express()

// geting all user
router.post("/login",loginUser)


// posting user
router.post("/signup",signUpUser)


module.exports = router