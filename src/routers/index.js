const express = require('express');

const router = express.Router();

//User
const { createUser, getUsers, deleteUser } = require('../controllers/user');

router.post("/user", createUser);
router.delete("/user/:id", deleteUser);
router.get("/users", getUsers);

module.exports = router;