/* eslint-disable no-tabs */
exports.resetEmail = (host, user) => {
  const message = {
    subject: 'Reset Password',
    text:
              `Hi ${user.firstName} ${user.lastName}! ${'You are receiving this because you have requested to reset your password for your account.\n\n' +
                  'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                  'https://'}${host}/reset_password/${user.resetPasswordToken}\n\n` +
              'If you did not request this, please ignore this email and your password will remain unchanged.\n'
  };
  return message;
};
