const express = require('express');
const router = express.Router();
const { forgotPassword, changePassword, resetPassword } = require('../controller/reset');
const { tokenVerify } = require('../Authentication/jwt');

router.put('/changePassword', tokenVerify, changePassword);

router.put('/forgotPassword', forgotPassword);

router.put('/resetPassword', resetPassword);

module.exports = router;
