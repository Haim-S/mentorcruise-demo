const router = require("express").Router();

router.use("/auth", require("./authentication.routes"));
router.use("/data", require("./users.routes"));

// route protected

const {authJwtToken} = require("../middlewares/authentication.middlewares");

router.get("/onlyToken", authJwtToken, (req, res)=>{
    res.send("you can see me only if you have a token");
  
});




router.all("*", (req, res, next)=>{
    next(res.send("error"))
})

module.exports = router;