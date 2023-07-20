const express = require('express');
const router = express.Router();
const { loginUser, registerUser, updateUser, getUser } = require('../controller/user');
const { tokenVerify } = require('../Authentication/jwt'); // Corrected the import path

// SIGNUP-ENDPOINT
router.post('/userSignUp', registerUser);

// LOGIN-ENDPOINT
router.post('/userLogin', loginUser);

// UPDATE-ENDPOINT
router.put('/userUpdate', tokenVerify, updateUser);

// GET-USER-ENDPOINT
router.get('/getUser', getUser);

module.exports = router;
