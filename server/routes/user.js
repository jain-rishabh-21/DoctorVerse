const express = require('express')
const router = express.Router()
const { loginUser, registerUser, updateUser } = require('../controller/user');
const { tokenVerify } = require('../utlits/jwt');

//SIGNUP-ENDPOINT
router.post('/userSignUp', registerUser);

//LOGIN-ENDPOINT
router.post('/userLogin', loginUser);

//UPDATE-ENDPOINT
router.put('/userUpdate', tokenVerify, updateUser);

module.exports = router
