const { changePasswordSchema, forgotPasswordSchema, resetPasswordSchema } = require('../validations/reset');
const { decodePassword, encodePassword } = require('../Authentication/passwordEncodeDecode');
const User = require('../models/doctor');
const { resetToken } = require('../Authentication/jwt');
const { resetEmail } = require('../Authentication/template');
const { transporter } = require('../Authentication/transportmail');

const changePassword = async (req, res) => {
  try {
    const payload = await changePasswordSchema.validateAsync(req.body);
    const { newPassword, oldPassword } = payload;

    const isPasswordCorrect = await decodePassword(oldPassword, req.user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: 'Old password is not correct'
      });
    }

    const hashedNewPassword = await encodePassword(newPassword);

    req.user.password = hashedNewPassword;
    await req.user.save();

    res.status(201).json({
      message: 'Updated your password'
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const payload = await forgotPasswordSchema.validateAsync(req.body);
    const { email } = payload;

    const user = await User.findOne({ email });

    if (user) {
      /* Create a password reset token that expires in 6 hours */
      user.resetPasswordToken = await resetToken();
      user.resetPasswordExpires = Date.now() + 3600000; // 15 min// Date.now() + 2.16e7;
      await user.save(function (err) {
        if (err) {
          res.json({
            success: false,
            message: err
          });
        } else {
          const data = resetEmail('doctorVerse.com', user);
          const mailOption = {
            from: 'RESET LINK <help@doctorVerse.com>',
            to: user.email,
            subject: data.subject,
            text: data.text
          };
          transporter.sendMail(mailOption, function (err, data) {
            if (err) {
              console.log('error');
            } else {
              console.log('send');
            }
          });
          console.log(`New reset token for ${user.email}: ${user.resetPasswordToken}`);
        }
      });

      res.status(200).json({
        message: 'Please check your email inbox and spam folder'
      });
    } else {
      return res.status(400).json({
        message: 'Please input valid Email Address'
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const verifyId = await User.findOne({ resetPasswordToken: req.params.resetID });
    if (verifyId) {
      const payload = await resetPasswordSchema.validateAsync(req.body);
      const { password } = payload;

      /* Search for a user with a matching reset token that isn't expired */
      const query = {
        resetPasswordToken: req.params.resetID,
        resetPasswordExpires: { $gt: Date.now() }
      };
      const user = await User.findOne(query);
      if (user) {
        const hashedNewPassword = await encodePassword(password);

        user.password = hashedNewPassword;
        await user.save();

        /* Now reset the token and expiration */
        user.resetPasswordToken = null;
        user.resetPasswordTokenExpires = Date.now();
        await user.save();

        res.status(200).json({
          message: `Password for ${user.email} successfully reset`
        });
      } else {
        res.status(400).json({
          message: 'This password reset link is either expired or invalid'
        });
      }
    } else {
      res.status(400).json({
        message: 'Invalid Token'
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  changePassword,
  forgotPassword,
  resetPassword
};
