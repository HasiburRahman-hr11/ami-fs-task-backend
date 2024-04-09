const { createNewUser } = require("../controllers/userController");

const router = require("express").Router();

router.post("/user/create", createNewUser);

module.exports = router;
