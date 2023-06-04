const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const router = new express.Router();

// Function to generate JWT token
const generateAuthToken = (user) => {
  const token = jwt.sign({ email: user.email,name:user.name,_id:user._id}, 'your-secret-key', { expiresIn: '1h' });
  return token;
};

// SIGNUP-ENDPOINT
router.post('/userSignUp', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = generateAuthToken(user);
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send('Something went wrong!!');
  }
});

// LOGIN-ENDPOINT
router.post('/userLogin', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = generateAuthToken(user);
    res.send({ user, token });
  } catch (e) {
    res.status(400).send('Something went wrong!!');
  }
});

module.exports = router;
