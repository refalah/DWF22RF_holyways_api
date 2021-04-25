const express = require('express');
const router = express.Router();

//Middlewares
const { authToken } = require('../middlewares/authMiddleware');

//Auth
const { register, login } = require('../controllers/auth');
router.post('/register', register);
router.post('/login', login);

//User
const { createUser, getUsers, deleteUser } = require('../controllers/user');

router.post("/user", createUser);
router.delete("/user/:id", deleteUser);
router.get("/users", authToken, getUsers);

module.exports = router;