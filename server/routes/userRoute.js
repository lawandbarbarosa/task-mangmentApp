const express = require("express")

const {
    loginUser,
    signUpUser,
    geAllUsers,
    deleteUser,
    UpdateUser} = require("../controller/userController")

const router = express()


router.post("/login",loginUser)



router.post("/signup",signUpUser)


// geting all user
router.get("/",geAllUsers)


router.delete("/:id",deleteUser)

router.patch("/:id",UpdateUser)

module.exports = router