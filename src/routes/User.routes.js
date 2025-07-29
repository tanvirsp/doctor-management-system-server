const express = require('express');
const router = express.Router()

//middleware
const AuthVerification = require('../middlewares/AuthVerification');

//controllers
const UserController = require("../controllers/UserController");




router.post("/create-user", UserController.CreateUser )
router.post("/login", UserController.Login )
router.get("/logout", UserController.Logout )
router.post("/change-password", AuthVerification, UserController.ChangePassword )
router.get("/send-otp/:email", UserController.SendOtp )
router.get("/verify-otp/:email/:otp", UserController.VerifyOTP );
router.post("/reset-password", UserController.ResetPassword );

/*
    TODO
    -users details

*/







module.exports = router
