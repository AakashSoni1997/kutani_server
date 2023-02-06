 const express=require("express");
const {  loginUser, registerUser } = require("../controller/userController");
const auth = require("../middleware/auth");
 const router=express.Router();


 router.route("/login").post(loginUser)
 router.route("/register").post(registerUser)
 router.route("/abcd").post(auth,registerUser)





module.exports =router