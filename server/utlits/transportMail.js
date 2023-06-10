const nodemailer = require('nodemailer');

exports.transporter = nodemailer.createTransport({
  host: 'gmail',
  auth: {
    user: process.env.userName,
    pass: process.env.password
  }
});
