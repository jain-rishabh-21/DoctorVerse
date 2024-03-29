const User = require('../models/user');
const { encodePassword, decodePassword } = require('../Authentication/passwordEncodeDecode');
const { userLoginSchema, userRegisterSchema, userUpdateSchema } = require('../validations/user');
const { tokenSign } = require('../Authentication/jwt');
const axios = require('axios');

// SIGNUP-CONTROLLER
const registerUser = async (req, res) => {
  try {
    const payloadValidate = await userRegisterSchema.validateAsync({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    const { name, email, password } = payloadValidate;
    //Captcha Verification
    const secret = "YOUR SECRET KEY";
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${req.body.Token}`;
    const response = await axios.post(url);
    if (response.data.success) {

      const hashPassword = await encodePassword(password);
      const user = new User({
        name,
        email,
        password: hashPassword
      });
      await user.save();
      res.status(201).json({ name, email });
    }
    else {
      res.status(400).json({ message: 'Invalid Captcha' });
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

// LOGIN-CONTROLLER
const loginUser = async (req, res) => {
  try {
    const payloadValidate = await userLoginSchema.validateAsync(req.body);
    const { email, password } = payloadValidate;
    const user = await User.findOne({ email });
    if (user) {
      const comparePassword = await decodePassword(password, user.password);
      if (comparePassword) {
        const jwtToken = await tokenSign(user);
        res.status(201).json({ token: jwtToken });
      } else {
        res.status(400).json({ message: 'Invalid User' });
      }
    } else {
      res.status(400).json({ message: 'Invalid User' });
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { _id } = req.user;
    const payloadValidate = await userUpdateSchema.validateAsync(req.body);
    const { name, address, phone } = payloadValidate;
    const userUpdate = await User.findByIdAndUpdate(_id, {
      $set: {
        name,
        address,
        phone
      }
    }, { projection: { name: 1, address: 1, phone: 1, email: 1 }, new: true });
    res.status(201).json({ name: userUpdate.name, email: userUpdate.email, phone: userUpdate.phone, address: userUpdate.address });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  updateUser
};
