const router = require("express").Router();
const usersControllers = require("../controllers/users.controllers");

router.get("/users", usersControllers.getAllUsers);


module.exports = router;