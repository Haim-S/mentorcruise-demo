
const router = require("express").Router();
const authentication = require("../controllers/authentication.controllers");
const catchAsyncError = require("../error/catchAsyncError");

router.post("/login", catchAsyncError(authentication.login));
router.post("/register",authentication.register);
router.post("/logout")



module.exports = router;