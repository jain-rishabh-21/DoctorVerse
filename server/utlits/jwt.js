const jwt = require('jsonwebtoken');
const User = require('../model/User');
const crypto = require('crypto');

const tokenVerify = async (req, res, next) => {
  try {
    if (req.headers && req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      const authToken = req.headers.authorization;
      const token = authToken.split(' ')[1];
      const decodeToken = await jwt.verify(token, process.env.SECRET_TOKEN);
      const { _id } = decodeToken;
      req.user = await User.findById(_id);
      next();
    } else {
      res.status(400).json({ message: 'INVALID TOKEN' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const adminVerify = async (req, res, next) => {
  try {
    if (req.headers && req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      const authToken = req.headers.authorization;
      const token = authToken.split(' ')[1];
      const decodeToken = await jwt.verify(token, process.env.SECRET_TOKEN);
      const { _id } = decodeToken;
      req.user = await User.findById(_id, { password: 0 });
      if (req.user.email === 'admin@gmail.com') {
        next();
      } else {
        res.status(400).json({ message: 'You are not admin' });
      }
    } else {
      res.status(400).json({ message: 'INVALID TOKEN' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const tokenSign = async (user) => {
  const { _id, email } = user;
  return await jwt.sign({ _id, email }, process.env.SECRET_TOKEN, {
    expiresIn: '1d'
  });
};

const resetToken = () => crypto.randomBytes(32).toString('hex');

module.exports = {
  tokenVerify,
  adminVerify,
  tokenSign,
  resetToken
};
