const router = require("express").Router();
const usersControllers = require("../controllers/users.controllers");
const {authUserJwt} = require("../middlewares/authentication.middlewares");


router.get("/users", usersControllers.getAllUsers);
router.get("/user",authUserJwt, usersControllers.getOneUser);
router.post("/user",authUserJwt, usersControllers.PostOneUser);
router.put("/:id", usersControllers.updateOne);

module.exports = router;