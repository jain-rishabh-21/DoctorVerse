const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    // This also validates whether the user has entered valid and unique email
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true
    },
    address: {
        type: String
    },
    phone: {
        type: Number
    }
})


const User = mongoose.model('User', userSchema)
module.exports = User