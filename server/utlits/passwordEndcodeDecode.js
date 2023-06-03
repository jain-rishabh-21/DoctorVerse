const bcrypt = require('bcryptjs')

const encodePassword = async (password) => {
    const salt = await bcrypt.genSalt(8);
    return await bcrypt.hash(password, salt);
};

const decodePassword = async (password, hashPassword) => {
    return await bcrypt.compare(password, hashPassword)
};

module.exports = {
    encodePassword,
    decodePassword
}
